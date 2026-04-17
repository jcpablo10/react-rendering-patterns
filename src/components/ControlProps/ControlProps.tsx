// A parent can control the behavior of the child component

// In this example the parent controls the behavior of the child. the compunication uses control prosp to handle the child
// the child is customizable to reuse the component

import { useState } from "react";

type ToggleProps = {
  isToggled?: boolean
  onToggle?: (value: boolean) => void 
}

export const Toggle: React.FC<ToggleProps> = ({isToggled = false, onToggle}) => {
  const [internalToggle, setInternalToggle] = useState(isToggled)

  const toggle = () => {
    setInternalToggle(!internalToggle)

    if (onToggle) onToggle(!internalToggle)
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
