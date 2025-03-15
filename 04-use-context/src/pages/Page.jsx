import React, { useContext } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


import '../App.css'


const Page = () => {
  
  return (
    <div className='page'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default Page