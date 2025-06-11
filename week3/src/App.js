import "./App.css";
import { User, UserObj } from "./learnReact/User";
import { useState } from "react";
import Gallery, { Profile } from "./learnReact/Profile";
import TodoList from "./learnReact/TodoList";
import ProbsProfile from "./learnReact/ProbsProfile";
import PackingList from "./learnReact/PackingList";
import List from "./learnReact/List";
import DisableButton from "./learnReact/DisableButton";
import HideParagraphy from "./learnReact/HideParagraph";
import UserComponent from "./learnReact/UserJson";
import RepeatUsers from "./learnReact/RepeatUser";

function App() {
  const person = {
    name: "Ge",
    age: 40,
    email: "ge@ddd.com",
  };

  const users = [
    { name: "Minyu", age: 40 },
    { name: "Mark", age: 10 },
    { name: "Gavin", age: 8 },
  ];

  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  const [inputValue, setinputValue] = useState("");


  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };


  return (
    <div className="App">
      <h1 style={{ color: "red" }}>learnReact</h1>
      {/*   <Gallery/>
      <TodoList/>
      <ProbsProfile/>
      <PackingList/>
      <List/>
     <UserObj name="Minyu" age={40} email="Minyuzhang@hotmail.com" />

      <UserObj name={person.name} age={person.age} email={person.email} />

      {users.map((user, index) => {
        return <User key={index} name={user.name} age={user.age} />;
      })}
*/}
      <div>
        <h2 style={{ color: "blue" }}>Learning Stata</h2>
        <h3 style={{ color: "blueviolet" }}>increase age</h3>
        {age}
        <br></br>
        <button onClick={increaseAge}>increase Age</button>
      </div>

      <div>
        <h3 style={{ color: "blueviolet" }}>Input</h3>
        {inputValue}
        <br></br>
        <input type="text" onChange={handleInputChange} />
        <br></br>
      </div>

      <div>
       <h3 style={{ color: "blueviolet" }}>Disable a Botton</h3>
       <DisableButton/>
      </div>

        <div>
       <h3 style={{ color: "blueviolet" }}>Show/Hide Paragraph</h3>
       <HideParagraphy/>
      </div>

      <div>
        <h2>5/22/2025</h2>
        {/* <UserComponent/> */}
        <RepeatUsers/>
      </div>
    </div>
  );
}


export default App;
