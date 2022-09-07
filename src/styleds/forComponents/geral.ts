import styled from "styled-components"

const Section = styled.section`
  background: red;
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 95vh;
  transition: ease-in-out 0.5s;
  animation: 0.5s;
`
const Title = styled.h1`
  width: 100%;
  background-color: var(--light);
  padding: 5rem;
  margin-top: 3rem;
  color: var(--dark-blue) !important;
  font: var(--title);
`

export { Section, Title }
