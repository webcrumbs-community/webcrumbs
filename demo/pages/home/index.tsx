import React from "react";
import styled from "styled-components";
import Link from 'next/link';

const Container = styled.div`
  margin: 3.4rem;
  `;

const P = styled.p`
  text-decoration: underline;
  font-size: 2.4rem;
  font-weight: 400;
  `;

const Span = styled.span`
  font-size: 1.1rem;

  margin: 3.4rem;
  text-align: center;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  color: ${(props) => (props.color ? "grey" : "")};
  cursor: ${(props) => (props.cursor ? "pointer" : "")};
`;

const Footer = styled.footer`
  background-color: lightgray;
  padding: 1rem;
  text-align: center;
  margin-top: 17rem;
`;

const AppLayout = () => {
  return (
    <Container>
      <P>Hello World!</P>
      <Container>
        <Span>
          {" "}
          😀Welcome to webcrums. This is the first post and a home page. Edit,
          delete it, then start writing!
        </Span>
      </Container>
      <Container>
        <Link href="/loginform">
        <Span underline color cursor>
          Add "read more" Check here
        </Span>
        </Link>
      </Container>
      <Container flex > 
        <Footer>&copy; 2023 Webcrumbs. All rights reserved.</Footer>
      </Container>
    </Container>
  );
};

export default AppLayout;
