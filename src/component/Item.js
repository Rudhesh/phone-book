import React from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';




export const Item = ({item, onDelete}) => {
    return (
        <div className="my-3" >
           <ListGroup  className="" horizontal>
  <ListGroup.Item >Name: {item.name}  </ListGroup.Item>
  <ListGroup.Item> Contact Number: {item.contact}</ListGroup.Item>

<Button className="mx-3" variant="danger" size="sm" onClick={()=>{onDelete(item)}}>Delete</Button>
</ListGroup>

{/*            
<Container className="mb-3" variant="outline-success"  >
    
  <Row >
    <Col sm={3}>Name: {item.name}</Col>
    <Col sm={3}>Contact Number: {item.contact}</Col>
    <Col sm={1}><Button variant="danger" size="sm" onClick={()=>{onDelete(item)}}>Delete</Button>
</Col>

   
  </Row>
  
</Container> */}

           
           
        </div>
    )
}