import styled from "styled-components";

export const StyledModal = styled.div`
    width: fit-content;
    padding: 48px 48px;
    z-index: 2000;
`;

export const StyledModalContent = styled.div`
  max-height: 65vh;
  overflow: auto;
  padding: 0 12px;
`;

export const StyledModalActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 32px;
  padding: 0 12px;
`;
