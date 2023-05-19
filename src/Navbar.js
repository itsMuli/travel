import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #3ded97;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 10px;
  font-style: italic;
  font-weight: 120%:
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  margin-right: 10px;
  
`;

const A = styled.a`
  color: #333;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    background-color: #ddd;
    border-radius: 5px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo>
          MashaTravels
        </Logo>
        <Items>
          <Item>
            <A href="/">Home</A>
          </Item>
          <Item>
            <A href="/services">Services</A>
          </Item>
          <Item>
            <A href="/book">Booking</A>
          </Item>
          <Item>
            <A href='/signin'>SignIn</A>
          </Item>
          <Item>
            <A href='/signup'>SignUp</A>
          </Item>
        </Items>
      </Container>
    </Nav>
  );
};

export default Navbar;
