import styled from 'styled-components';
import { keyframes } from 'styled-components';
const rotate = keyframes`
0% {
  top: 8px;
  height: 64px;
}
50%, 100% {
  top: 24px;
  height: 32px;
}
`;
export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loading = styled.div``;
export const LoadingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  & ${Loading} {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background-color: green;
    animation: ${rotate} 0.6s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & ${Loading}:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  & ${Loading}:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  & ${Loading}:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;
