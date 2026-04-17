// Render Props Pattern
// The Parent component tells the Child component what needs to be rendered with a function called render()

import { useState } from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
}

// React.FC means Function component. 
// render() is a function that needs to return an JSX.Element.
export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {

  // For this example, this value is part of the interal state of the component.

  const valueInChild = "JC 👨‍💻"
  return (
    <p>{render(valueInChild)}</p>
  );
};

export const ParentComponent = () => {
  const control = <p>X</p>
  const content = () => (<div>Hi!, this is the content inside the Expansible</div>)
  return (
    <>
      <ChildComponent render={(name) => <div>Hello, {name}</div>} />
      <ExpandibleComponent toggleControl={control} render={() => content() } />
    </>

  );
};



// An example of this component could be a an Expansible component.
// Example of a Expansible

interface ExpansibleProps {
  toggleControl: React.ReactNode
  render: ( toggleModal: () => void) => JSX.Element
}

export const ExpandibleComponent = ({toggleControl, render}: ExpansibleProps) => {
  const [isOpen, setValue] = useState(false)
  const toggleModal = () => setValue(!isOpen)

  return(
    <div className="modal-container" style={{
      display: "flex", 
      flexDirection: "row", 
      border: "1px solid gray",

    }}>
      {/* <div>isOpen: { `${isOpen}`} </div> */}
      <div onClick={toggleModal} >
        {toggleControl}
      </div>
      
      <div className="modal-content" style={{
        height: isOpen ? "100px" : "0px",
        transition: ".3s all",
        overflow: "hidden"
      }}>
        {render(toggleModal)}
      </div>
    </div>
  )
}
