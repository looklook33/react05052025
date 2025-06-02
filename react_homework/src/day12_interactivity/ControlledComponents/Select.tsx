import { useState } from "react"
export default function Select() {
          const [age, setAge]=useState('')
  return (
        <>
        <label htmlFor="ageSelect">Age</label>
        <select value={age} onChange={(e)=>setAge(e.target.value)}>
            <option value=''>select Age</option>
            <option value="10">Ten</option>
            <option value="20">Twenty</option>
            <option value="30">Thirty</option>
        </select>
        {age && <p>you selected age: {age}</p>}
        </>
      )
}
