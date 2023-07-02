import { createGlobalStyle } from 'styled-components'

function pixelsToRem(...values: number[]): string {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  return values.reduce((a, i) => (a += `${i / 16}rem `), '').trim()
}
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
  color: var(--dark-blue);
}
img{
  max-width: 80%;
  display: block;
}
:root{
  /* colors */
  --light: #FCFCFC;
  --grey: #4A525A;
  --dark-grey: #24272B;
  --blue: #011521;
  --dark-blue: #07070A;
  --orange: #FF7E0E;


  //fonts
  --title:normal 700 ${pixelsToRem(36)}/${pixelsToRem(
  38,
)} "JetBrains Mono", monospace;
  --title2:normal 700 ${pixelsToRem(24)}/${pixelsToRem(
  32,
)} "JetBrains Mono", monospace;
  --title3:normal 700 ${pixelsToRem(28)}/${pixelsToRem(
  32,
)} "JetBrains Mono", monospace;
  --info:normal 700 ${pixelsToRem(22)}/${pixelsToRem(
  24,
)} "JetBrains Mono", monospace;
  
}
body{
  font-family: "JetBrains Mono", monospace;
  background: var(--light);
  color: var(--dark-blue);
  height: auto;
}

html {
  scroll-behavior: smooth;
}
`

export default Global
