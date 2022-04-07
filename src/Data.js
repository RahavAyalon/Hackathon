import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Data() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>07/04/2022</td>
          <td>
            Leaked emails reveal Manchester City received payments from Abu
            Dhabi
          </td>
          <td>
            <a
              rel="noopener noreferrer"
              href="https://www.theguardian.com/p/y7q2"
              target="_blank"
            >
              https://www.theguardian.com/p/y7q2
            </a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>07/04/2022</td>
          <td>UK to announce fresh military aid package for Ukraine</td>
          <td>
            <a
              rel="noopener noreferrer"
              href="https://www.theguardian.com/p/y7phm"
              target="_blank"
            >
              https://www.theguardian.com/p/y7phm
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>07/04/2022</td>
          <td>
            The Guardian view on Boris Johnson’s energy strategy: missed
            opportunities
          </td>
          <td>
            <a
              rel="noopener noreferrer"
              href="https://www.theguardian.com/p/y7zat"
              target="_blank"
            >
              https://www.theguardian.com/p/y7zat
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
