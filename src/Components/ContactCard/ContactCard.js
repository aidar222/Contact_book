import React, {useState} from 'react';
import "./ContactCard.css"

const ContactCard = (props) => {
    let [name, setName] = useState(props.editContact.name);
    let [phone, setLastName] = useState(props.editContact.phone);
    let [photo, setPhoto] = useState(props.editContact.photo);

    function handleSaveClick(){
        let contact = {...props.editContact}
        contact.name = name;
        contact.phone = phone;
        contact.photo = photo
        props.handleSaveEditedContact(contact)
        setName('')
        setLastName('')
        setPhoto('')
    }

    return (
        <div>
            <div className='edit'>
            <input className='input'
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name"
                value={name}
            />
            <input className='input'
                onChange={(e) => setLastName(e.target.value)}
                type="text" placeholder="Phone"
                value={phone}
            />
            <input className='input'
                onChange={(e) => setPhoto(e.target.value)}
                type="text" placeholder="URL Photo"
                value={photo}
            />
            <button className='btnSave' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default ContactCard;