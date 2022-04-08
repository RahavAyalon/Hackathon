import React from 'react';
import Button from './Button';
import InputButton from './InputButton';
import { Container, Row } from 'react-bootstrap';
import image from './logo.png';
export default function Main() {
  return (
    <div class="parent">
            <div className="div1">
                <InputButton />
            </div>
            <div className="div2">
                    <Button/>
                {/*<img src={image}/>*/}
            </div>
    </div>
  );
}
