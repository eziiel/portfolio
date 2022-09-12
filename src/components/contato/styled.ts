import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

const ContatoSection = styled(Section)`
  background: var(--orange);
  color: var(--light);
`

const ContatoInfo = styled.article`
  padding: 3rem;
  display: flex;
  gap: 5em;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: var(--dark-blue);
  font: var(--info);
  text-align: center;

  @media (max-width: 1670px) {
    font-size: 1rem;
    padding: 3rem 1rem;
  }
`

const Contato = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export { ContatoSection, ContatoInfo, Contato }
