import React, { useState } from 'react';

import Popup from '../pure/popup';

const AddStudent = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
    return (
        <div className='button_add'>
            <button id='add_student' onClick={togglePopup}> Añadir alumno</button>
            { isOpen && <Popup content={
                <p>Testando</p>
            }></Popup>}
        </div>
    );
}

export default AddStudent;
