import styled from "styled-components";

export const Section = styled.section`
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 540px) {
    max-width: unset;
  }

  li {
    margin-bottom: 1rem;
    line-height: 1.4rem;
  }
  b {
    display: block;
    margin-bottom: 0.5rem;
  }
`;
