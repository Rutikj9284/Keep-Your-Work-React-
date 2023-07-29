import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(note){
    setNotes((prevNotes)=>{
      return [...prevNotes, note];
    })
  }

  function deleteItem(id){
    setNotes(prevNotes =>{
     return  prevNotes.filter((note, idx) =>{
        return id !== idx;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea 
      onSubmit={addNote}
      />
      {notes.map((noteItem, index)=>(
        <Note key={index}
        id={index}
        onDelete={deleteItem}
        title={noteItem.title}
        content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
