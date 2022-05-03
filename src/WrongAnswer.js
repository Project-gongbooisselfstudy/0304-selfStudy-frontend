import { React, useState, Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { InputGroup, Container, FormControl, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import styles from './WrongAnswer.module.css';
import Footer from './Footer.js';

function WrongAnswer() {
  
    return (
        <><Header />

        <div className= {styles.carousel}>
        <Carousel variant="dark">
  <Carousel.Item>
    <p>오답노트1</p>
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <p>오답노트2</p>
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <p>오답노트3</p>
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        

        <Footer />
        
        </>
    );
  }
  
 


export default WrongAnswer;