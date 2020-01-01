import React from 'react';
import { Link, Route } from 'react-router-dom';

function Note(props) {
  return (
    <>
      <li>
        <Link to={`/note/${props.note.id}`}>
          <h3>{props.note.name}</h3>
        </Link>
        <p>{props.note.modified}</p>
        <button>Delete</button>
      </li>
      <Route path='/note/:id' render={() => <p>{props.note.content}</p>} />
    </>
  );
}

export default Note;