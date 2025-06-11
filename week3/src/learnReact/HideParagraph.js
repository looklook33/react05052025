import { useState } from "react";

export default function HideParagraphy(){
    const [visible, setVisible] = useState(true);
    const handleVisible =()=>{
        setVisible((visible)=>(!visible))
    }

    return (
        <>
       {visible && <p>This is a paragraph of text.</p>}
        </>
    )
}