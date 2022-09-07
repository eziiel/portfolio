import React from "react"

interface Props {
  text: string;
}

export const MM = ({ text }: Props): JSX.Element => {
  return <span>{`<${text} / >`}</span>
}
