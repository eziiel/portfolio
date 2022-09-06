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
:root{
  /* colors */
  --light: #FCFCFC;
  --grey: #4A525A;
  --dark-grey: #24272B;
  --blue: #011521;
  --dark-blue: #07070A;
  --orange: #FF7700;


  //fonts

  
}
body{
  /* font-family: 'Major Mono Display', monospace; */
  font-family: "JetBrains Mono", monospace;
  height: 1500px;
  background: var(--light);
}

`

export default Global
