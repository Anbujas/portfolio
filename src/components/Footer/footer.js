import React from 'react';
import './footer.css';

const Footer = () => {
    const year=new Date();
    return (
        <footer className='footer'>
            Copyright &copy; {year.getFullYear()}
        </footer>
    );
}

export default Footer