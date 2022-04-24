import styled from 'styled-components';

export const InputBox = styled.div`
  min-width: 200px;
  height: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 50px;
  display: flex;
  align-items: center;
  min-height: 30px;
  &:focus-within {
    transition: width 0.3s;
    outline: 1px solid black;
    width: 100%;
    input {
      opacity: 1;
      width: 100%;
    }
  }
`;
export const Input = styled.input`
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  margin-left: 05px;
  opacity: 0;
  width: 30px;
  left: 20px;
`;
export const Label = styled.label`
  height: 100%;
  display: flex;
  align-items: center;
`;
