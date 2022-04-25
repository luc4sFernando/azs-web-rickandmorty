import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 30px;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  background: red;
  width: 0;
  color: black;
  transition: all 0.5s;
  background: transparent;
`;
export const Label = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
`;
