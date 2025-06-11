import { userJson } from "./data/userJson";

export default function RepeatUsers(){

    const {users} = userJson;

    return (
        <>
        {
        users
        .filter((user)=> user.age<30 && user.age >20)
        .map((user)=>{
           return (
            <div key = {user.id}>
                <UsersInfor user={user} />
            </div>
           )

        })}
        
        </>
    )
}

function UsersInfor({user}){
    const {firstName, lastName, hair, age, gender} = user;
    return (
        <div>
        <p style={{color: hair.color === "Red"? "red":"black"}}>{firstName} {lastName} {hair.color} {hair.type} {age} {gender}</p>
        </div>

    )
}
