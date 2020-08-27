import React from 'react';
import './navbar.css';
// Importo los componentes de react bootstrap que voy a usar en el Nav.
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// Importo el icono Carrito.
import CartIcon from './CartIcon/CartIcon';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi carrito en React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Productos</Nav.Link>
          <Nav.Link href="#">Nosotros</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
        <Form inline>
          <a href="#"><CartIcon icon="cart"></CartIcon></a>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;