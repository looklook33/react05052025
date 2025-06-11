export function Profile() {
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katerina" />;
      <ul>
        <li>Invert new traffic lights</li>
        <li>Rehearse a moive scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <ol>
        <li>Invert new traffic lights</li>
        <li>Rehearse a moive scene</li>
        <li>Improve the spectrum technology</li>
      </ol>
    </>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Profile />
    </div>
  );
}
