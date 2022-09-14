import styled, { css } from "styled-components"

interface Anima {
  anima: boolean;
}

const ProjetosData =
  styled.div <
  Anima >
  `
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
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
  max-width: 80%;
  max-height: 200px;
  align-self: center;
  margin: 1rem 0 0.5rem 0;
`

const InfoTextProjeto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 1rem;
  }
`
const InfoText = styled.p``

const LinksProjeto = styled.ul`
  align-self: end;
  justify-self: end;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 0.3rem;
  bottom: 0;

  @media (max-width: 760px) {
    position: initial;
  }
`

const LinkList = styled.li``

const Link = styled.a`
  padding: 0.5rem;

  span {
    color: green;
    @media (max-width: 760px) {
      font-size: 0.7rem;
    }
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
