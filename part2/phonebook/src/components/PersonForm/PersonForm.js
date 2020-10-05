import React from 'react';

const PersonForm = ({newName, number, handleName, handleForm, handleNumber}) => {  
    return (
        <form onSubmit={handleForm}>
            <div>
            name: <input type="text" value={newName} onChange={handleName}/>
            </div>
            <div>
            number: <input type="text" value={number} onChange={handleNumber}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>)
}

export default PersonForm;