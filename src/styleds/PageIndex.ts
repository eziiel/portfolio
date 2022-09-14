import styled from "styled-components"

const AppDivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 1400px;
  position: relative;

  @media (max-width: 1260px) {
    grid-template-columns: 1fr;
  }
`
const AppMain = styled.main`
  height: 100%;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* 
  @media (max-width: 1260px) {
    padding-top: 100px;
  } */
`

export { AppDivStyled, AppMain }
