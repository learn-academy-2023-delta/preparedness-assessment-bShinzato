import React, { useState } from "react"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Label, Input } from "reactstrap"
import { LoremIpsum } from "react-lorem-ipsum"

const ModalComponent = () => {
  const [modal, setModal] = useState(false)
  
  const [inputText, setInputText]= useState("")
  
  const toggle = () => setModal(!modal)

  const handleChange = (e) => {
   return setInputText(e.target.value)
}

const handleReset = () => {
  return setInputText("")
}

  return (
    <>
      <div>
        <Label for="name">Enter your name</Label>
          <Input 
          type="text"
          placeholder="Enter Name Here"
          onChange={handleChange} 
          value={inputText}
          />
          <Button onClick={toggle}>
            Click Me
          </Button>

          <Button onClick={handleReset}>
            Reset
          </Button>

          <Modal isOpen={modal} toggle={toggle}>

          <ModalHeader toggle={toggle}>
            Hello there {inputText}!
          </ModalHeader>

          <ModalBody>
              <LoremIpsum />
          </ModalBody>

          <ModalFooter>
            <Button onClick={toggle}>
              Do Something
            </Button>{' '}

            <Button onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
  </>
  )
}

export default ModalComponent
