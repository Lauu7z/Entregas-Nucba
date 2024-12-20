import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  box-shadow: 0px 0px 34px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    width: auto;
  }
`;
