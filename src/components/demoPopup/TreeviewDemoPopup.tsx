import styled from "@emotion/styled";
import DemoPopup from "../DemoPopup";
import TreeView from "../treeview/TreeView";

type TreeviewDemoPopupProps = {
  open: boolean;
  onClose: () => void;
};

const TreeviewDemoPopup = ({ open, onClose }: TreeviewDemoPopupProps) => {
  return (
    <DemoPopup open={open} onClose={onClose}>
      <Container>
        <TreeView />
      </Container>
    </DemoPopup>
  );
};

export default TreeviewDemoPopup;

const Container = styled.div`
  width: 310px;
  max-width: 90vw;
  max-height: 80vh;
  background-color: #fff;
  color: black;
  padding: 8px;
  overflow: scroll;
`;
