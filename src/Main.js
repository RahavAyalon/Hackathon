import React from 'react';

import Logo from './Logo';
import Button from './Button';
import { Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <div className="website">
      <Container>
        <Logo />
        <Row className="d-flex">
          <Button />
        </Row>
      </Container>
    </div>
  );
}
