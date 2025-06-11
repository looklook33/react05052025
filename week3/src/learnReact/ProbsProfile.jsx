//probs is the infomation you pass to jsx tag.

function Avatar({ person, size }) {
  return (
    <img src="https://i.imgur.com/1bX5QH6.jpg" alt={person.name} size={size} />
  );
}

export default function ProbsProfile() {
  return (
    <Avatar
      person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      size={100}
    />
  );
}
