import { userJson } from "./data/userJosn";

export default function RecallUsersJson() {
  return (
    <>
      {userJson.users
        // .filter((user)=>user.gender === "male")
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </>
  );
}

function User({ user }) {
  const { id, firstName, lastName, gender, hair } = user;
  return (
    <div>
      {gender === "male" && (
        <li>
          ID {id} {firstName} {lastName} {hair.color}
        </li>
      )}
    </div>
  );
}
