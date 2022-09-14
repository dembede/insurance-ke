import styled from "styled-components";
import DownArrow from "../../files/icons/chevron-24.png";

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  border: solid 1px rgba(0, 0, 0, 0.5);
  padding: 0.95rem 0.75rem 0.75rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-family: "Avenir Next";
  outline-color: midnightblue;
  transition: 0.35s ease-in-out;
  border-radius: 3px;
  font-size: 1rem;
  &:focus {
    border-color: midnightblue;
    scale: 1.02 1;
  }
`;

export const NumberInput = styled(Input).attrs({
  type: "number",
})`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0.5rem;
  padding: 0.45rem 0.25rem;
  background: white;
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
  color: midnightblue;
  z-index: 5;
`;

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Select = styled.select`
  position: relative;
  border: solid 1px rgba(0, 0, 0, 0.5);
  padding: 0.95rem 0.75rem 0.75rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-family: "Avenir Next";
  outline-color: midnightblue;
  transition: 0.35s ease-in-out;
  border-radius: 3px;
  font-size: 1rem;
  appearance: none;
  background-image: url(${DownArrow});
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: 98% center;

  &:focus {
    border-color: midnightblue;
    scale: 1.02 1;
  }
`;

export const Option = styled.option``;
