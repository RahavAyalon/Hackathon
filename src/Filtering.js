import React from 'react';
import { Form } from 'react-bootstrap';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Filtering() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <>
      <div class="parent">
        <div className={"divSpace"}>
          Please select the fields for your corpus, then press 'Go':
        </div>
        <div class="div4">
          <Form>
            {['checkbox'].map((type) => (
              <>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Sections`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Links`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Comments`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Headers`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Sub-Headers`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Contents`}
                  />
                </div>
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Authors`}
                  />
                </div>
              </>
            ))}
          </Form>
        </div>
        <div class="div3" backgroundColor="#000000">
          {' '}
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <container class={'centered'}>
            <button class={'btn1 linkstyle'}>
              <Link to="/data">Go</Link>
            </button>
          </container>
        </div>
      </div>
    </>
  );
}
