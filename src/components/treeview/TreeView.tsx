import styled from "@emotion/styled";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useTranslation } from "react-i18next";
import {
  changeParentNodeState,
  findNodeRecursive,
  getOverallCheckState,
  sortItemsByTitle,
  updateAllNodeRecursive,
  updateNodeAndAllSubtreeByKey,
  updateNodeRecursive,
} from "./treeUtils";
import { useEffect } from "react";
import { useTreeController } from "./useTreeController";
import { useVisibleCountMap } from "./useVisibleCountMap";
import TreeNode from "./TreeNode";
import useTreeViewStore from "./treeviewStore";
import handleError from "../../utils/handleError";
import { getTreeNodes } from "../../apis/mockTreeApi";

const TreeView = () => {
  const { t } = useTranslation();

  const { treeData, setTreeData } = useTreeViewStore((state) => state);

  const { toggleExpanded } = useTreeController();
  const { visibleCountMap, onLoadMore } = useVisibleCountMap();

  const fetchTreeNodes = async () => {
    try {
      const { data } = await getTreeNodes();

      const mappedSelectOptions = data.data.map((item: TreeNode) => ({
        title: item.title,
        id: item.id,
        depth: 1,
        isLeaf: item.isLeaf,
        children: [],
        expanded: false,
        checkState: "unchecked" as TreeCheckedState,
      }));

      setTreeData(sortItemsByTitle(mappedSelectOptions));
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    if (treeData.length !== 0) return;

    fetchTreeNodes();
  }, [treeData]);

  const renderCheckBox = () =>
    treeData.every((node) => node.checkState === "checked")
      ? CheckBoxIcon
      : treeData.every((node) => node.checkState === "unchecked")
      ? CheckBoxOutlineBlankIcon
      : IndeterminateCheckBoxIcon;

  const CheckboxIconComponent = renderCheckBox();

  const onClickCheckBox = (node: TreeCheckNode, parentKey?: string) => {
    const { id, checkState } = node;
    const newChecked = checkState === "checked" ? "unchecked" : "checked";

    const newTreeData = updateNodeAndAllSubtreeByKey(
      treeData ?? [],
      id,
      newChecked
    );

    if (parentKey) {
      const parentNode = findNodeRecursive(newTreeData, parentKey);
      changeParentNodeState(parentNode, newTreeData);
    }

    setTreeData(newTreeData);
  };

  const changeCheckedState = (
    key: string,
    newCheckedState: TreeCheckedState
  ) => {
    const updated = updateNodeRecursive(treeData, key, (targetNode) => ({
      ...targetNode,
      checkState: newCheckedState,
    }));

    setTreeData(updated);
  };

  const onClickAllSelect = async () => {
    try {
      const treeAllChecked = getOverallCheckState(treeData);

      const newCheckState: TreeCheckedState =
        treeAllChecked === "checked" ? "unchecked" : "checked";

      const updated = updateAllNodeRecursive(treeData, newCheckState);

      setTreeData(updated);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <>
      {treeData.length !== 0 && (
        <TreeContainer>
          <AllSelectBox>
            <CheckboxIconComponent
              onClick={onClickAllSelect}
              sx={{ fontSize: 21, cursor: "pointer" }}
            />
            <BigTextLabel onClick={onClickAllSelect}>
              {t("전체 선택")}
            </BigTextLabel>
          </AllSelectBox>
          {treeData.map((node, idx) => (
            <TreeNode
              key={node.id}
              node={node}
              toggleExpanded={toggleExpanded}
              onClickCheckBox={onClickCheckBox}
              changeCheckedState={changeCheckedState}
              isLast={idx === treeData.length - 1}
              visibleCountMap={visibleCountMap}
              onLoadMore={onLoadMore}
            />
          ))}
        </TreeContainer>
      )}
    </>
  );
};

export default TreeView;

const TreeContainer = styled.div`
  margin-top: 27px;
  padding-left: 8px;
  max-width: 100%;
`;

const AllSelectBox = styled.div`
  display: flex;
  height: 26px;
  gap: 7px;
  margin-bottom: 11px;
`;

const BigTextLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.32px;
`;
