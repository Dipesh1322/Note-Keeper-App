import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Input from "./Input";

function App() {

    const [notes, setNotes] = useState([]);

    function addInput(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <Input onAdd={addInput} />
            <div className="noteBox">
                {notes.map((noteItem, index) => {
                    return <Notes
                        key={index}
                        id={index}
                        headingNote={noteItem.headingNote}
                        paraNote={noteItem.paraNote}
                        onDelete={deleteNote}
                    />
                })}
            </div>
            <Footer />
        </div>
    )
}

export default App;