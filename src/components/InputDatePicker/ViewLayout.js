import styled from "styled-components";

const ViewLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ViewLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  
`;
const ViewLayoutBody = styled.div`
  flex: 1;
`;
const ViewLayoutFooter = styled.div`

&:before {
  content: "";
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
  display: block;
  margin-bottom: 10px;
}
`;
function ViewLayout(props) {
  const { header, bodyElement, foorerElement } = props;
  const { leftElement, middleElement, rightElement } = header;
  return (
    <ViewLayoutContainer>
      <ViewLayoutHeader>
        <div>{leftElement}</div>
        <div>{middleElement}</div>
        <div>{rightElement}</div>
      </ViewLayoutHeader>
      <ViewLayoutBody>{bodyElement}</ViewLayoutBody>
      <ViewLayoutFooter>{foorerElement}</ViewLayoutFooter>
    </ViewLayoutContainer>
  );
}

export default ViewLayout;
