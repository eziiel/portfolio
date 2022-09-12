/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled from "styled-components"
import { Section } from "../../styleds/forComponents/geral"

interface PropsImg {
  src: string;
  alt: string;
}

const ExperienciaSection = styled(Section)`
  background: #0a81d1;
  background: var(--dark-blue);
  justify-content: center;
  align-items: center;
`
const ExperienciaInfo = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`
const Ferramentas = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`
const IconsFerramentas = styled.li`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const NameIcon = styled.span`
  border-top: 1.5px solid var(--orange);
  padding: 1rem 1.5rem;
  color: var(--orange);
  transition: 0.5s;

  @media (max-width: 1370px) {
    font-size: 0.875rem;
  }
`

const Img = styled.img.attrs(({ alt, src }: PropsImg) => {
  alt
  src
})`
  align-items: center;
  width: 40px;
  transition: 0.5s ease-in;
`

const InfoFerramentas = styled.span`
  text-align: center;
  padding: 2rem;
  color: var(--orange);
`

export {
  ExperienciaSection,
  ExperienciaInfo,
  Ferramentas,
  IconsFerramentas,
  Img,
  NameIcon,
  InfoFerramentas
}
