import React from "react"
import "./Modal.css"
import Wrapper from "../../../hoc/Wrapper"
import Backdrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.showModal} hideBackdrop={props.hideBackdrop} />
      <div className="modal"
        style={{
          transform: props.showModal ? 'translateY(0)' : 'translateY(-130vh)',
          opacity: props.showModal ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

export default Modal