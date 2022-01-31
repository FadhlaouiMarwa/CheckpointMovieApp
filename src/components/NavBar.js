import React from 'react';
import {Navbar,Container,Form,FormControl,Button} from 'react-bootstrap'
function NavBar({inputSearch , setInputSearch}) {
  return <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">NAVBAR Movie APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
          onChange={(e)=>setInputSearch(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}

export default NavBar;
