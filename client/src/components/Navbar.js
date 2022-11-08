import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar id="navi" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1667893491/Google_Books_logo2_w3ocjs.webp"
              alt="Google Books Search"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <NavLink id="btn1" as={Link} to="/">
                Search Books 🔍
              </NavLink>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <NavLink id="btn" as={Link} to="/saved">
                    View Books 🔎
                  </NavLink>
                  <NavLink id="btn" onClick={Auth.logout}>
                    Logout 🚫
                  </NavLink>
                </>
              ) : (
                <NavLink id="btn1" onClick={() => setShowModal(true)}>
                  Login 📡/Sign Up 🔏
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item id="btn2">
                  <Nav.Link eventKey="login">Login 📡</Nav.Link>
                </Nav.Item>
                <Nav.Item id="btn3">
                  <Nav.Link eventKey="signup">Sign Up 🔏</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
