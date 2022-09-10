/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react"
import { ContextRef } from "../../context";
import Data from "../datas/images.json"

interface PropsRef {
  reference: string;
}

export const Observe = ({ reference }: PropsRef) => {
  const { setComponent } = React.useContext(ContextRef)

  const options = {
    root: document.querySelector(reference)!,
    rootMargin: "0px",
    threshold: 1.0
  }

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      Data.forEach(({id, text}) => {
        if(entries[0].target.id === text && entries[0].isIntersecting) {
          setComponent(id)
        }
      })
    }, options)

    intersectionObserver.observe(document.querySelector(reference)!)

    return () => intersectionObserver.disconnect()
  }, [])

  return <></>
}
