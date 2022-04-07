import React from 'react';
import { Form } from 'react-bootstrap';
export default function Filtering() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Websites`} />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Links`} />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Comments`} />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Headers`} />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`Sub-Headers`}
            />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Contents`} />
          </div>
          <div key={`default-${type}`} className="mb-3">
            <Form.Check type={type} id={`default-${type}`} label={`Writers`} />
          </div>
        </>
      ))}
    </Form>
  );
}
