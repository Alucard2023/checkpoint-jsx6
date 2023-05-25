import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic1 from './profile.jpg'
 const Prophoto = () => {
  return (
    <div>
      <center><Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
         <h1>Tarek Hadded </h1> <br />
          <h3>Developpeur Web</h3> <br />
        Je me décrirais comme une personne persévérante creative et ambitieuse.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card></center>
    </div>
  )
}

export default Prophoto
