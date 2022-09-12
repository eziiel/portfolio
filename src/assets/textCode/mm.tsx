import React from "react"
import Span from "./styled"

interface Props {
  text: string;
}

export const MM = ({ text }: Props): JSX.Element => {
  return <Span>{`<${text} / >`}</Span>
}
