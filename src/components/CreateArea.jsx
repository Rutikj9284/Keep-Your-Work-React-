import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title:"",
    content:""
  });

  function f1(event){
    const name = event.target.name;
    const value = event.target.value;
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name] : value
      }
    })
  }

  function f2(event){
    props.onSubmit(note);
    event.preventDefault();
    setNote({title:"", content:""});
  }
  return (
    <div>
      <form className="create-note">
        <input onChange={f1}
        name="title" value={note.title} placeholder="Title" />
        <textarea onChange={f1}
        name="content" 
        value ={note.content} 
        placeholder="Take a note..." rows="3" />
        <button onClick={f2}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
