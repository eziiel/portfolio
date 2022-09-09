import styled, { css } from "styled-components"

interface Anima {
  anima: boolean;
}

const ProjetosData =
  styled.div <
  Anima >
  `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: card 0.5s forwards;
  transform: translate3d(-80px, 0 0);
  opacity: 0;
  transition: ease-in-out 0.5s;

  /* @keyframes card {
    to {
      transform: translate3d(0, 0 0);
      opacity: initial;
    }
  } */
  ${props =>
    props.anima &&
    css`
      opacity: 1;
      transform: translate3d(0, 0 0);
    `}
`

const ImgProjeto = styled.img`
  max-width: 100%;
  max-height: 80%;
`

const InfoTextProjeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
`
const InfoText = styled.p``

const LinksProjeto = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`

const LinkList = styled.li``

const Link = styled.a`
  padding: 1rem;
  span {
    color: green;
  }
`

export {
  ProjetosData,
  ImgProjeto,
  InfoTextProjeto,
  InfoText,
  LinksProjeto,
  LinkList,
  Link
}
