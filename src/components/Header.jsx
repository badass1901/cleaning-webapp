import React from 'react';
import cover from '../assets/logos/main.png';
import cover2 from '../assets/logos/main2.png';
import '../styles/Header.scss'
import FormI from './FormI';
import Heading from './Heading';


const Header = () => {
  return (
    <div>
      
        <div className='imageDiv'>
        <img className='cover' src={cover} alt=""/>
        <img className='cover2' src={cover2} alt=""/>
        </div>
        <Heading />
        <FormI />
    </div>
  )
}

export default Header