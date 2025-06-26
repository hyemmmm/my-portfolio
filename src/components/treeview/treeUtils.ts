export const MAX_CHILDREN_PER_RENDER = 5;

export function findNodeRecursive(
  nodes: TreeCheckNode[],
  key: string
): TreeCheckNode | undefined {
  for (const node of nodes) {
    if (node.id === key) {
      return node;
    }
    if (node.children) {
      const found = findNodeRecursive(node.children, key);
      if (found) {
        return found;
      }
    }
  }

  return undefined;
}

// 재귀적으로 찾아서 업데이트하는 것
export function updateNodeRecursive(
  nodes: TreeCheckNode[], // 현재 레벨의 노드 배열
  key: string, // 찾고자 하는 id
  updateFn: (node: TreeCheckNode) => TreeCheckNode // 해당 노드를 어떻게 업데이트할지 정의한 함수
): TreeCheckNode[] {
  return nodes.map((node) => {
    // 1) 현재 노드가 목표 key인지 확인
    if (node.id === key) {
      // 맞으면 updateFn으로 업데이트
      return updateFn(node);
    }

    // 2) children이 있으면 재귀 호출
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: updateNodeRecursive(node.children, key, updateFn),
      };
    }

    // 3) 현재 노드도 아니고 자식도 없다면, 그대로 반환
    return node;
  });
}

// 재귀적으로 모두 업데이트하는 것
export function updateNodeAndAllSubtreeByKey(
  nodes: TreeCheckNode[],
  key: string,
  newCheckState: TreeCheckedState
): TreeCheckNode[] {
  return nodes.map((node) => {
    // 1) 현재 노드가 찾는 key라면 → 재귀적으로 자기 자신 + 자식들 checkState 갱신
    if (node.id === key) {
      // 여기서 바로 “해당 노드와 자식 전부” 재귀 업데이트
      return (function recur(target: TreeCheckNode): TreeCheckNode {
        // 자기 자신 갱신
        const updated: TreeCheckNode = {
          ...target,
          checkState: newCheckState,
        };
        // 자식이 있으면 자식들도 갱신
        if (updated.children && updated.children.length > 0) {
          updated.children = updated.children.map((child) => recur(child));
        }
        return updated;
      })(node);
    }

    // 2) key가 아니면, 자식이 있는지 확인
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: updateNodeAndAllSubtreeByKey(
          node.children,
          key,
          newCheckState
        ),
      };
    }

    // 3) 자식도 없고 guid도 다르면 그대로 반환
    return node;
  });
}

export function updateAllNodeRecursive(
  nodes: TreeCheckNode[],
  newCheckState: TreeCheckedState
): TreeCheckNode[] {
  return nodes.map((node) => {
    // 자기 자신 갱신
    const updated: TreeCheckNode = {
      ...node,
      checkState: newCheckState,
    };
    // 자식이 있으면 재귀적으로 자식도 갱신
    if (updated.children && updated.children.length > 0) {
      updated.children = updateAllNodeRecursive(
        updated.children,
        newCheckState
      );
    }
    return updated;
  });
}

const getCheckStateFromChildren = (
  children: TreeCheckNode[]
): TreeCheckedState => {
  if (children.every((node) => node.checkState === "checked")) return "checked";
  if (children.every((node) => node.checkState === "unchecked"))
    return "unchecked";
  return "partially";
};

export const changeParentNodeState = (
  node: TreeCheckNode | undefined,
  tree: TreeCheckNode[]
): void => {
  if (node === undefined) return;

  const children = node.children ?? [];

  node.checkState = getCheckStateFromChildren(children);

  if (node.parentKey) {
    const parentNode = findNodeRecursive(tree, node.parentKey);
    changeParentNodeState(parentNode, tree);
  }
};

export const returnAllMeshIds = (nodes: TreeCheckNode[]): string[] => {
  return nodes.flatMap((node) =>
    node.isLeaf
      ? [node.id]
      : node.children
      ? returnAllMeshIds(node.children)
      : []
  );
};

export const sortItemsByTitle = <T extends { title: string }>(
  items: T[]
): T[] => {
  return items.sort((a, b) => {
    const regex = /^([^\d]*)(\d+)/; // 문자 + 숫자 패턴

    const matchA = a.title.match(regex);
    const matchB = b.title.match(regex);

    if (matchA && matchB) {
      const prefixA = matchA[1];
      const prefixB = matchB[1];

      if (prefixA !== prefixB) {
        return prefixA.localeCompare(prefixB, "ko");
      }

      const numA = parseInt(matchA[2], 10);
      const numB = parseInt(matchB[2], 10);

      return numA - numB;
    }

    // 매칭 안 된 경우 일반 문자열 비교
    return a.title.localeCompare(b.title, "ko");
  });
};

export const countExpandedDescendantLines = (
  nodes?: TreeCheckNode[]
): number => {
  if (!nodes) return 0;

  return nodes.reduce((acc, node) => {
    const isExpanded =
      node.expanded && node.children && node.children.length > 0;
    return (
      acc + 1 + (isExpanded ? countExpandedDescendantLines(node.children) : 0)
    );
  }, 0);
};

export const getOverallCheckState = (treeData: TreeCheckNode[]) => {
  if (treeData.every((node) => node.checkState === "checked")) return "checked";
  if (treeData.every((node) => node.checkState === "unchecked"))
    return "unchecked";
  return "partially";
};

export const countVisibleExpandedLines = (
  nodes: TreeCheckNode[],
  visibleCountMap: Record<string, number>
): number => {
  return nodes.reduce((acc, node) => {
    const visibleCount = visibleCountMap?.[node.id] ?? MAX_CHILDREN_PER_RENDER;
    const visibleChildren = node.children?.slice(0, visibleCount);

    const childCount =
      node.expanded && node.children && visibleChildren
        ? countVisibleExpandedLines(visibleChildren, visibleCountMap)
        : 0;

    return acc + 1 + childCount;
  }, 0);
};

export const hasMoreInSubtree = (
  nodes: TreeCheckNode[],
  visibleCountMap: Record<string, number>
): boolean => {
  if (nodes.length === 0) return false;

  return nodes.some((child) => {
    if (!child.expanded) return false;

    const visibleCount = visibleCountMap?.[child.id] ?? MAX_CHILDREN_PER_RENDER;

    const childHasMore = (child.children?.length || 0) > visibleCount;

    if (childHasMore) {
      return true;
    }

    // children이 없으면 재귀 아예 안 돌림
    if (child.children && child.children.length > 0) {
      return hasMoreInSubtree(child.children, visibleCountMap);
    }

    return false;
  });
};
