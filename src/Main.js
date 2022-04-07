import React from 'react';

import Button from './Button';
import InputButton from './InputButton';
import { Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <div class="parent">
      <Container>
        <Row className="d-flex">
                <InputButton class={"div2"} />
                <Button class={"div1"}/>
        </Row>
      </Container>
    </div>
  );
}
