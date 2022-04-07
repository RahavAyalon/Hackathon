import React from 'react';

import Button from './Button';
import InputButton from './InputButton';
import { Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <div className="website">
      <Container>
        <Row className="d-flex">
          <Button />
          <InputButton />
        </Row>
      </Container>
    </div>
  );
}
