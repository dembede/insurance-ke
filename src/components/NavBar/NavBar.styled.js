import styled from "styled-components";

export const Section = styled.section`
  font-family: "Prompt";
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  gap: 1rem;
  color: greenyellow;
  background-color: black;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    font-weight: 700;
    a {
      color: inherit;
      text-decoration: none;
    }
    .active a {
      color: white;
    }
    a:hover {
      color: white;
    }
  }
`;
export const Logo = styled.div`
  font-family: "Prompt";
  font-weight: 900;
  font-size: 1.2rem;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
`;
