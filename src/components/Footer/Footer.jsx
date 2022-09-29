import React from 'react'; 
import './footer.css'; 
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 

const Footer = () => {
  const history = useNavigate(); 
  const goToPage = (page) =>  {  
    history.push(`/${page}`)
  }
  return (
      <footer className='footer-div'>
        <div className='footer-item' onClick={() => goToPage('terms-of-service')}>Terms</div>
        <div className='footer-item' onClick={() => goToPage('privacy-policy')}>Privacy Policy</div>
        <div>©Free Creator Tools</div>
      </footer>
  );
}

export default Footer;