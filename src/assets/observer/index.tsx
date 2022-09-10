/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { ContextRef } from "../../context";
import Data from "../datas/images.json"

interface PropsRef {
  reference: string;
}

export const Observe = ({ reference }: PropsRef) => {
  const { component, setComponent } = React.useContext(ContextRef)

  const options = {
    root: document.querySelector(reference)!,
    rootMargin: "50px",
    threshold: 1.0
  }

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      // console.log(entries[0].isIntersecting)
      Data.forEach(({id, text}) => {
        if(entries[0].target.id === text && entries[0].isIntersecting) {
          setComponent(id)
        }
      })
    }, options)

    intersectionObserver.observe(document.querySelector(reference)!)

    return () => intersectionObserver.disconnect()
  }, [component])

  return <></>
}
