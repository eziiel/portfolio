import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

const ProjetosSection = styled(Section)`
  background: var(--dark-blue);
  color: var(--light);
  position: relative;
`

const ProjetoInfo = styled.article`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;

  span {
    cursor: pointer;
  }
`
const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  /* flex-direction: column; */
  padding: 2rem 0;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1300px) {
    display: none;
  }
  li {
    :hover {
      transform: scale(1.1);
    }
  }
  span {
    font-size: 0.875rem;
    border-bottom: 1px solid green;
    padding: 1rem 0;
  }
`
export { ProjetosSection, ProjetoInfo, Ul }
