import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: transparent;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: right;
`;
export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: right;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  display: none;
  align-items: right;
  opacity: 0;
  z-index: -1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      background: #000000;
    }
  }
`;

export const ThemeLabel = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: right;
  margin-right: 1em;
`;
