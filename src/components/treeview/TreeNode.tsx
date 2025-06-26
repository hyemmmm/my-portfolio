import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowRight from "@mui/icons-material/ArrowRight";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import treeTrailBeeLine from "../../assets/icons/treeTrailBeeLine.svg";
import treeTrailBranch from "../../assets/icons/treeTrailBranch.svg";
import treeTrailCurve from "../../assets/icons/treeTrailCurve.svg";
import AddRounded from "@mui/icons-material/AddRounded";
import {
  countVisibleExpandedLines,
  hasMoreInSubtree,
  MAX_CHILDREN_PER_RENDER,
} from "./treeUtils";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

type TreeNodeProps = {
  node: TreeCheckNode;
  toggleExpanded: (key: string, currentExpandedState: boolean) => Promise<void>;
  onClickCheckBox: (node: TreeCheckNode, parentKey?: string) => void;
  changeCheckedState: (key: string, currentChecked: TreeCheckedState) => void;
  isLast: boolean;
  visibleCountMap: Record<string, number>;
  onLoadMore: (id: string, totalChildren: number) => void;
};

const TreeNode = ({
  node,
  toggleExpanded,
  onClickCheckBox,
  changeCheckedState,
  isLast,
  visibleCountMap,
  onLoadMore,
}: TreeNodeProps) => {
  const { t, i18n } = useTranslation();

  const {
    children,
    expanded,
    checkState,
    id,
    depth,
    isLeaf,
    title,
    parentKey,
  } = node;

  const renderCheckBox = () =>
    checkState === "checked"
      ? CheckBoxIcon
      : checkState === "partially"
      ? IndeterminateCheckBoxIcon
      : CheckBoxOutlineBlankIcon;

  const CheckboxIconComponent = renderCheckBox();

  const noBranchDepth = 1;

  const visibleChildrenCount =
    visibleCountMap[node.id] ?? MAX_CHILDREN_PER_RENDER;
  const visibleChildren = children?.slice(0, visibleChildrenCount) || [];
  const hasMore = (children?.length || 0) > visibleChildrenCount;

  return (
    <Container>
      <BranchsWrapper>
        {id !== "root" && depth > noBranchDepth && (
          <BranchImg
            src={isLast ? treeTrailCurve : treeTrailBranch}
            style={isLast ? { marginLeft: "-1.5px" } : {}}
          />
        )}
        {id !== "root" &&
          depth > noBranchDepth &&
          expanded &&
          !isLast &&
          children?.length !== 0 &&
          Array.from({
            length:
              hasMore || hasMoreInSubtree(children || [], visibleCountMap)
                ? countVisibleExpandedLines(visibleChildren, visibleCountMap) +
                  1
                : countVisibleExpandedLines(visibleChildren, visibleCountMap),
          }).map((_, index) => (
            <BranchImg
              key={index}
              src={treeTrailBeeLine}
              style={{
                height: "34px",
              }}
            />
          ))}
      </BranchsWrapper>
      <div>
        {id !== "root" && (
          <ItemBlock>
            {node.isLeaf && (
              <ArticleIcon style={{ height: "16", marginLeft: "3px" }} />
            )}
            <CaretAndCheckBoxContainer>
              {!node.isLeaf && (
                <IconButton
                  size="small"
                  onClick={() => toggleExpanded(id, expanded)}
                >
                  {expanded ? <KeyboardArrowDown /> : <ArrowRight />}
                </IconButton>
              )}
            </CaretAndCheckBoxContainer>
            <CheckboxIconComponent
              onClick={() => onClickCheckBox(node, parentKey)}
              sx={{ fontSize: 16, cursor: "pointer" }}
            />
            <TextLabel
              onClick={() => {
                onClickCheckBox(node, parentKey);
              }}
            >
              {title}
            </TextLabel>
          </ItemBlock>
        )}
        {expanded && children && (
          <div>
            {visibleChildren?.map((item, idx) => {
              return (
                <TreeNode
                  key={item.id}
                  node={item}
                  toggleExpanded={toggleExpanded}
                  onClickCheckBox={onClickCheckBox}
                  changeCheckedState={changeCheckedState}
                  isLast={isLast && idx === visibleChildren.length - 1}
                  visibleCountMap={visibleCountMap}
                  onLoadMore={onLoadMore}
                />
              );
            })}
          </div>
        )}
        {expanded && hasMore && (
          <LoadMoreWrapper onClick={() => onLoadMore(id, children!.length)}>
            <AddRounded /> {t("더 보기")}
          </LoadMoreWrapper>
        )}
      </div>
    </Container>
  );
};

export default TreeNode;

const Container = styled.div<{
  $beeLine?: boolean;
}>`
  display: flex;
  ${({ $beeLine }) =>
    $beeLine &&
    css`
      margin-left: -20px;
    `}
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
  padding: 3px 0;
`;

const CaretAndCheckBoxContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const TextLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BranchImg = styled.img`
  height: 34px;
`;

const BranchsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadMoreWrapper = styled.div`
  color: #da5d3b;
  margin-left: 21px;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
