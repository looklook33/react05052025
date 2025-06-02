import { useState } from "react";
import GenderSelction from "./Gender";
import AgeSelection from "./AgeSelction";


export default function Checkbox() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <h1>Checkbox</h1>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Label
      </label>
      <GenderSelction/>
      <AgeSelection/>
    </div>
  );
}
