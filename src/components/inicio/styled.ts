import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

const InicioSection = styled(Section)`
  background: var(--grey);
  color: var(--light);
`

const InicioInfo = styled.article`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`
const Info = styled.p`
  letter-spacing: 1px;

  :nth-child(2) {
    /* color: red; */
    align-self: center;
    font: var(--title);
    padding: 3rem 0;
    letter-spacing: 1px;
  }
  :nth-child(4) {
    align-self: end;
    font-style: italic;
    padding-bottom: 3rem;
  }
  :nth-child(6) {
    padding: 0.5rem 0;
    font: var(--info);
    /* align-self: center; */
  }
`

export { InicioSection, InicioInfo, Info }
