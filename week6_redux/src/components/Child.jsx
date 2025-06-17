import React from "react";

function Child() {
  console.log("child");
  return (
    <>
      <h3>ChildComponent</h3>
    </>
  );
}

export default React.memo(Child);
