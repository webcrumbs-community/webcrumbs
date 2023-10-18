import React, { useEffect, useState } from "react";
import { ColoredLine, Container, DateString, FlexContainerRow, Footer, Li, P, Span, Ul } from "@/styles/Index.styles";
import Link from 'next/link';

const AppLayout = () => {
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    setToday(date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}));
  }, []);
  
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
          <Span underline={true} textColor="grey" cursor="pointer">
            Add "read more" Check here
          </Span>
        </Link>
        <DateString>{today}</DateString>
      </Container>
      <ColoredLine lineColor="grey" />
      <FlexContainerRow>
        <Container>
          <Link href="#">
            ← Previous Page
          </Link>
        </Container>
        <Container>
          <Ul>
            <Li><Link href="#">1</Link></Li>
            <Li><Link href="#">2</Link></Li>
            <Li><Link href="#">3</Link></Li>
            <Li><Link href="#">4</Link></Li>
            <Li><Link href="#">5</Link></Li>
            <Li><Link href="#">6</Link></Li>
          </Ul>
        </Container>
        <Container>
          <Link href="#">
            Next Page →
          </Link>
        </Container>
      </FlexContainerRow>
      <FlexContainerRow> 
        <Footer>&copy; 2023 Webcrumbs. All rights reserved.</Footer>
      </FlexContainerRow>
    </Container>
  );
};

export default AppLayout;
