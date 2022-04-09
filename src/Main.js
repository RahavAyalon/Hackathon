import React from 'react';
import Button from './Button';
import InputButton from './InputButton';
import { Container, Row } from 'react-bootstrap';
import image from './Logo.png';
export default function Main() {
  return (
    <div class="parent">
            <div className={"div5 centered"}>
                <img src={image} width={200} height={260}/>
            </div>
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
