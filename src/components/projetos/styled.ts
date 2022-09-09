import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

const ProjetosSection = styled(Section)`
  background: var(--dark-blue);
  color: var(--light);
`

const ProjetoInfo = styled.article`
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
`

export { ProjetosSection, ProjetoInfo }
