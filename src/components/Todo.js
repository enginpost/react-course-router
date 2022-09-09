import { useState } from 'react';

import Backdrop from "./Backdrop"
import ModalAction from "./ModalAction";

function Todo(props) {
    // Custom ReactJS elements must start with a capital letter so ReactJS can find custom elements
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteCard_click(){
        // alert( `You are killing ${ props.title}` );
        setModalIsOpen(true);
    }

    function cancelModal_click(){
        console.log(`Canceled deleting... ${props.title}`);
        setModalIsOpen(false);
    }
    
    function confirmModal_click() {
        console.log(`Confirmed deleting... ${props.title}`);
         setModalIsOpen(false);
    }
    
    return (
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button type="button" className="btn" onClick={deleteCard_click}>
            Delete
          </button>
        </div>
        {modalIsOpen ? (
          <ModalAction onCancel={cancelModal_click} onConfirm={confirmModal_click} cardName={props.title} />
        ) : null}
        {modalIsOpen && <Backdrop />}
      </div>
    );
}

export default Todo;