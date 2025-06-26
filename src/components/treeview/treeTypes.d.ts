type TreeCheckNode = {
  depth: number;
  title: string;
  id: string;
  isLeaf: boolean;
  children?: TreeCheckNode[];
  expanded: boolean;
  checkState: TreeCheckedState;
  parentKey?: string;
};

type TreeNode = {
  title: string;
  id: string;
  depth: number;
  isLeaf: boolean;
};

type TreeCheckedState = "unchecked" | "checked" | "partially";
