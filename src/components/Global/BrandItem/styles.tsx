import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  padding: 10px;
`;

export const StyledImageWrapper = styled.div`
  overflow: hidden;
  height: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    max-width: 100%;
  }
`;
