import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 900;
  border-radius: 4px;
  text-transform: capitalize;
  background-color: midnightblue;
  border: none;
  color: lightblue;
  cursor: pointer;
  transition: 0.35s ease-in-out;
  ${(props) =>
    props.size === "big"
      ? "padding: 1rem 2rem; font-size: 1.2rem;"
      : "padding: 0.65rem 1.75rem; font-size: 1rem;"}

  &:hover, &:focus {
    color: white;
    scale: 1.075;
    /* rotate: x -20deg;
    rotate: y -20deg;
    rotate: z -20deg; */
    /* rotate: 0 1 1.5 -90deg; */
  }
`;
