// export default function TodoList(){
//     const name ='Minyu';
//     return (
//         <h1>{name} To Do List for {formatDate(today)}</h1>
//     )
// }

// const today = new Date()

// function formatDate(date){
//     return new Intl.DateTimeFormat().format(date)
// }

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
