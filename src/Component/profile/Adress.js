import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import'./Adresss.css'

const Adress = () => {
  return (
    <div>
       <center><Form className='tout' style={{ width: '25rem',margin:'10rem' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'green'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'red'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></center>
    
    </div>
  )
}

export default Adress

