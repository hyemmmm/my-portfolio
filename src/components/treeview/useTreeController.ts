import useTreeViewStore from "./treeviewStore";
import { findNodeRecursive, updateNodeRecursive } from "./treeUtils";
import { getTreeNodes } from "../../apis/mockTreeApi";
import handleError from "../../utils/handleError";

export function useTreeController() {
  const { treeData, setTreeData } = useTreeViewStore((state) => state);

  const toggleExpanded = async (key: string, currentExpandedState: boolean) => {
    if (!currentExpandedState) {
      return openChildrenNode(key);
    } else {
      return closeChildrenNode(key);
    }
  };

  const openChildrenNode = async (key: string) => {
    console.log(treeData, key);
    const node = findNodeRecursive(treeData, key);

    if (node && node.children && node.children.length > 0) {
      // updateNodeRecursive 로 새로운 트리 만들기
      const updated = updateNodeRecursive(treeData, key, (targetNode) => ({
        ...targetNode,
        expanded: true,
      }));

      // 결과를 통째로 set
      setTreeData(updated);
    } else {
      // --> children이 없으니 원래 로직대로 서버 호출
      try {
        const { data } = await getTreeNodes(key);

        const convertedData = data.data.map((child: TreeNode) => ({
          ...child,
          expanded: false,
          checkState: node!.checkState,
          parentKey: key,
        }));

        const updated = updateNodeRecursive(treeData, key, (targetNode) => ({
          ...targetNode,
          children: convertedData,
          expanded: true,
        }));

        setTreeData(updated);
      } catch (e) {
        handleError(e);
      }
    }
  };

  const closeChildrenNode = (key: string) => {
    setTreeData(
      updateNodeRecursive(treeData, key, (targetNode) => ({
        ...targetNode,
        expanded: false,
      }))
    );
  };

  return {
    toggleExpanded,
  };
}
