import { useState } from "react";
import { MAX_CHILDREN_PER_RENDER } from "./treeUtils";

export const useVisibleCountMap = () => {
  const [visibleCountMap, setVisibleCountMap] = useState<
    Record<string, number>
  >({});

  const onLoadMore = (id: string, totalChildren: number) => {
    setVisibleCountMap((prev) => {
      const current = prev[id] ?? MAX_CHILDREN_PER_RENDER;
      const remaining = totalChildren - current;
      const toAdd = Math.min(remaining, MAX_CHILDREN_PER_RENDER);
      return { ...prev, [id]: current + toAdd };
    });
  };

  return {
    visibleCountMap,
    onLoadMore,
  };
};
