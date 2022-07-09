import { ReactNode, useCallback, useEffect, useState } from "react"
import * as C from "./styled"
import React from "react"

type Props = {
    show: boolean
    togglerDisplay: (control: boolean) => void
    children: ReactNode
}

export const Modal = ({show, togglerDisplay, children}: Props) => {

    const [opacity, setOpacity] = useState(false)
    const [display, setDisplay] = useState(false)
    
     
     // Smooth transition
     const controllerDisplay = useCallback((controller: boolean) => {
        if(controller){
            setDisplay(controller)
            setTimeout(()=> {setOpacity(controller)},50)
        }else{
            setOpacity(controller)
            setTimeout(()=> {setDisplay(controller)},300)
            togglerDisplay(false)
        }
     },[togglerDisplay])

     useEffect(()=> {
        controllerDisplay(show)
     },[controllerDisplay, show])

    return (
        <C.Container dp={display} op={opacity}>
            <div className="md-container">
                <div className="back--area">
                    <img src="/icons/left-arrow.png" alt="" onClick={()=> controllerDisplay(false)}/>
                </div>
                <div className="modal--area">
                {children}
                </div>
            </div>
        </C.Container>
    )
}