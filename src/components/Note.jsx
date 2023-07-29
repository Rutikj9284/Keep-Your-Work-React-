import React from "react";
function Note(props) {
  function f1(event){
    props.onDelete(props.id);
    event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={f1}
      >Delete</button>
    </div>
  );
}

export default Note;
