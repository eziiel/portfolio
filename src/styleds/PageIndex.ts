import styled from "styled-components"

const AppDivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 1400px;
`
const AppMain = styled.main`
  height: 100%;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export { AppDivStyled, AppMain }
