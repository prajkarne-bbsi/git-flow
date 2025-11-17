import { Nav, Navbar as BSNavbar } from "react-bootstrap";

const Navbar = () => (
  <BSNavbar bg="dark" variant="dark" expand="lg" className="mb-4 px-3">
    <BSNavbar.Brand className="text-white">Piyush</BSNavbar.Brand>
    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BSNavbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#about" className="text-white">About</Nav.Link>
        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
      </Nav>
    </BSNavbar.Collapse>
  </BSNavbar>
);

export default Navbar;