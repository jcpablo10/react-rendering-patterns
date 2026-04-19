// A parent can control the behavior of the child component throgh props. 
// This parent helps to manage the comunication between parent and child components.

// In this example the parent controls the behavior of the child. the compunication uses control prosp to handle the child
// the child is customizable to reuse the component

import { useState } from "react";

// Using types, could be helpfull to use union tupes. 
type ToggleProps = {
  isToggled?: boolean
  onToggle?: (value: boolean) => void 
}

// Having an internal state, makes mor flexible the logic when we reuse the component
// Fix example, its possbile that the parent component doest really need to handle the state or behavior of the child component.
export const Toggle: React.FC<ToggleProps> = ({isToggled = false, onToggle}) => {
  const [internalToggle, setInternalToggle] = useState(isToggled)

  const toggle = () => {
    setInternalToggle(!internalToggle)
    
    // This also works
    onToggle && onToggle(!internalToggle)
  }

  return (
    <button onClick={toggle}>
      { internalToggle ? "on 😜" : "Off 😵" }
    </button>
  );
};

export const ParentComponent = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <p>Toggle is {toggle ? "👍" : "☹️"}</p>
      <Toggle isToggled={toggle} onToggle={setToggle} />
    </div>
  );
};
