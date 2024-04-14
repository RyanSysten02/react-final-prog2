import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { LiaClipboardListSolid } from "react-icons/lia";
import { AiOutlineFileSearch } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';


function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg'>
      <Container>
      <Navbar.Brand href="#home">
          <svg width="20" 
          height="20" 
          viewBox="0 0 256 225" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid">
          <path d="M77.965 80.568l48.57-28.042a3.929 3.929 0 0 1 3.93 0l48.57 28.042A3.932 3.932 0 0 
          1 181 83.971v56.084c0 1.403-.75 2.7-1.965 3.403l-48.57 28.042a3.929 3.929 0 0 1-3.93 0l-48.
          57-28.042A3.931 3.931 0 0 1 76 140.055V83.97c.001-1.404.75-2.7 1.965-3.403" fill="#8080F2"/>
          <path d="M254.417 107.417L196.323 6.35C194.213 2.696 190.315 0 186.095 0H69.906c-4.22 0-8.12
           2.696-10.23 6.35L1.583 107.194c-2.11 3.655-2.11 8.268 0 11.923l58.093 100.239c2.11 3.654 6.
           01 5.522 10.23 5.522h116.188c4.22 0 8.119-1.812 10.228-5.467l58.094-100.402c2.112-3.653 2.112
           -7.938 0-11.592zm-48.105 48.6c0 1.485-.894 2.86-2.182 3.604l-73.999 42.693a4.21 4.21 0 0 1-4.186
            0l-74.056-42.693c-1.287-.744-2.188-2.118-2.188-3.605V70.628c0-1.487.888-2.86 2.176-3.604l73.995-
            42.694a4.202 4.202 0 0 1 4.185 0l74.06 42.694c1.289.744 2.195 2.117 2.195 3.604v85.388z" 
            fill="#4B32C3"/></svg>
          VAGAS DE EMPREGO
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#pricing">
            <LiaClipboardListSolid />
            Cadastrar</Nav.Link>
          <Nav.Link href="#features">
            <AiOutlineFileSearch />
            Buscar candidatos</Nav.Link>
          </Nav>
          <Nav className="nav-icons">
            <FaInstagram className="nav-icon" />
            <FaFacebook className="nav-icon" />
            <FaLinkedin className="nav-icon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;
