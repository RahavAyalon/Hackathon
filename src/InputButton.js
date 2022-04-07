import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
export default function InputButton() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="url"
        aria-label="url"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Go
      </Button>
    </InputGroup>
  );
}
