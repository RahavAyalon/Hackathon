import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function InputButton() {
  return (
    <InputGroup id={"inputBar"} className="mb-3">
      <FormControl
        placeholder="URL"
        aria-label="URL"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        <Link to="/filtering">Go</Link>
      </Button>
    </InputGroup>
  );
}
