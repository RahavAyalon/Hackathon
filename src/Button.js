import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

export default function Button() {
  return (
    <>
      <div className="Buttons">
        {/* <button class={'btn1 linkstyle'}>
          <Link to="/filtering">Sky News</Link>
        </button>
        <button class={'btn1 linkstyle'}>
          <Link to="/filtering">The Guardian</Link>
        </button> */}
        {/*<a href="something" className="button1">Button</a>*/}
        {/* <button class={'btn1 linkstyle'} height={55} width={45}>
          <Link to="/filtering"></Link>
          <img class="jazz" src={'./jazeera.jpeg'} height={55} width={60}></img>
        </button> */}

        <a href="/filtering" class="bloop">
          <img
            class="jazz"
            src="wsi-imageoptim-aljazeera.jpeg"
            width={150}
            height={150}
          />
        </a>

        <a href="/filtering" class="bloop">
          <img class="jazz" src="guardian.jpeg" width={150} height={150} />
        </a>
        <a href="/filtering" class="bloop">
          <img
            class="jazz"
            src="Forbes_logo_com.svg"
            width={150}
            height={150}
          />
        </a>
      </div>
    </>
  );
}
