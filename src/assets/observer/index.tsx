/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react"
import { ContextRef } from "../../context";

interface PropsRef {
  reference: string;
}

export const Observe = ({ reference }: PropsRef) => {
  const { component, setComponent } = React.useContext(ContextRef)
  const [dataImgs, setDataImgs] = React.useState([])

  React.useEffect(() => {
    fetch('api/images.json')
      .then((response) => response.json())
      .then((res) => setDataImgs(res))
  }, [])

  const options = {
    root: document.querySelector(reference)!,
    rootMargin: "0px",
    threshold: 0.5
  }

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      dataImgs.forEach(({id, text}) => {
        if(entries[0].target.id === text && entries[0].isIntersecting) {
          setComponent(id)
          window.localStorage.setItem("component", JSON.stringify(component))
        }
      })
    }, options)

    intersectionObserver.observe(document.querySelector(reference)!)

    return () => intersectionObserver.disconnect()
  }, [])

  return <></>
}
