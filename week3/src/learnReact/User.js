//react component becasue it return UI, component name start with a Capital letter!
export const UserObj = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};
export const User = (props) => {
  const { name, age, email } = props;
  return age < 21 ? <p>{name} no alcohol🚫</p> : <p>{name} can drink🍷</p>;

  // if (age > 10) {
  //   return (
  //     <div>
  //       <h1>{name}</h1>
  //       <h1>{age}</h1>
  //       <h1>{email}</h1>
  //     </div>
  //   ) 
  // }else{
  //   return <p>age less than 10</p>
  // }
};
