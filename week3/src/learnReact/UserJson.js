import { userJson } from "./data/userJson";

  export default function UserComponent(){

    const {users} = userJson

  return(
        <>
      <ul>
        {users
          .filter(({ age }) => age < 30)
          .map((user) => {
            return (
              <li key={user.id}>
                <UserInfo
                  //  firstName={firstName}
                  //  lastName={lastName}
                  //  hair={hair}
                  user={user}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
}

function UserInfo({user}){
  const { firstName, lastName, hair, age, gender } = user;

  return (
    <>
      <div>
        {firstName} {lastName} {age}
      </div>
      <div style={{ color: gender === "female" ? "pink" : "blue" }}>
        {gender}
      </div>
      <div>
        {hair.color} {hair.type}
      </div>
    </>
  );
}
 
