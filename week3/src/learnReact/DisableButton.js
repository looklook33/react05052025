import { useState } from "react";

export default function DisableButton() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <button 
    disabled={isDisabled}
    onMouseEnter={()=>setIsDisabled(true)}
    onMouseLeave={()=>setIsDisabled(false)}>
      Hover to Disable!
    </button>
  );
}
