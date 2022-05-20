import React from "react";
import {Card, Button} from "react-bootstrap"
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className='card1'>
  {props.contacts.map((item, index) => (
    <Card
      key={item.id}
      style={{ width: '18rem' }}
    >
        <Card.Img className="imgContact" src={item.photo}/>
      <Card.Header>{item.name}</Card.Header>
      <Card.Body>
        <Card.Title className="name">{item.phone}</Card.Title>
      </Card.Body>
      <Button 
      className="contactlistBtn"
      onClick={() => props.handleDeleteContact(item.id)}
      variant='danger'
      >
        Delete
      </Button>
      <Button
       className="contactlistBtn"
       onClick={() => props.handleEditIndex(index)}
       variant='danger'
      >
        Edit
      </Button>
      {""}
    </Card>
  ))}
</div>
  );
};

export default ContactList;
