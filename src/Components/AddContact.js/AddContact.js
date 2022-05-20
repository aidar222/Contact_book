import React, { useState } from 'react';
import "./AddContact.css"

const AddContact = (props) => {
let [name, setName] = useState('');
let [phone, setPhone] = useState('');
let [photo, setPhoto] = useState('');

function handleClick(){
    let newContact = {
        name,
        phone,
        photo,
        id: Date.now()
    }
    props.handleNewContact(newContact)
    setName('')
    setPhone('')
    setPhoto('')
}

    return (
        <div>
            <div>
                <h1 className='h1'>FILL IN THE SUPPLIER CARD</h1>
            </div>
            <div className='addStyle'>
            <input className='fill'
                onChange={(e)=> setName(e.target.value)} 
                type="text" placeholder="Name"
                value={name}
                />
            <input className='fill'
                onChange={(e)=> setPhone(e.target.value)} 
                type="text" placeholder="Phone"
                value={phone}
                />
            <input className='fill'
                onChange={(e)=> setPhoto(e.target.value)} 
                type="url" placeholder="URL Photo"
                value={photo}
                />
            <button className='fill' id='btn' onClick={handleClick}>Add contact</button>
            </div>
        </div>

    );
};

export default AddContact;