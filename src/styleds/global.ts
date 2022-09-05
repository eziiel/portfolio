import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li,ul{
  list-style: none;
}
a{
  text-decoration: none;
  display: inline-block;
}
img{
  display: block;
}

body{
  font-family: 'Inconsolata', monospace;
  height: 1500px;
}

`

export default Global
