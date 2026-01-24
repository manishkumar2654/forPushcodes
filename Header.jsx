import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import "./Css/header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="gh-header" sticky="top">
      <Container>
        {/* LEFT : Logo */}
        <Navbar.Brand href="/" className="gh-brand">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">Gram Hat</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle className="gh-toggle" />

        <Navbar.Collapse>
          {/* CENTER : Menu */}
          <Nav className="gh-menu mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/deals">Hot Deals</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* RIGHT : WhatsApp CTA */}
          <div className="gh-whatsapp">
            <FaWhatsapp />
            <span>75808-38888</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
