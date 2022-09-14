import styled from "styled-components"

const Nav = styled.nav`
  width: 155px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--dark-blue);
  font-weight: bold;
  display: none;
  justify-items: start;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-content: start;
  }
`

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0;
  align-items: center;
  background: green;
`

const Li = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid green;
`

const ActiveProjeto = styled.span`
  width: 20%;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: start;

  img {
    width: 100%;
    background: green;
  }
`

const SpanText = styled.span``

export { Nav, Ul, Li, ActiveProjeto, SpanText }
