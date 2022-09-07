import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

const SobreSection = styled(Section)`
  background: var(--blue);
`

const SobreInfo = styled.article`
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  justify-content: center;
  height: 100%;
`
const Info = styled.p`
  padding: 0.5rem 0;
  color: var(--light);
  letter-spacing: 1px;
`

export { SobreSection, SobreInfo, Info }
