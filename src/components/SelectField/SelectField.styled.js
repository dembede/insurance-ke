import styled from "styled-components";

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Select = styled.select`
  border: solid 1px rgba(0, 0, 0, 0.5);
  padding: 0.95rem 0.75rem 0.75rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-family: "Prompt";
  outline-color: midnightblue;
  transition: 0.35s ease-in-out;
  border-radius: 3px;
  font-size: 1rem;
  &:focus {
    border-color: black;
  }
`;

export const Option = styled.option``;

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
`;
