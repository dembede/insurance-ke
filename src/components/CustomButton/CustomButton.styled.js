import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 900;
  border-radius: 50px;
  text-transform: capitalize;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.35s ease-in-out;
  ${(props) =>
    props.size === "big"
      ? "padding: 1rem 2rem; font-size: 1.2rem;"
      : "padding: 0.65rem 1.75rem; font-size: 1rem;"}

  &:hover {
    color: #9e9e9e;
    background-color: rgba(0, 0, 0, 0.95);
  }
`;
