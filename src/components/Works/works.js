import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">"Building more than websites - constructing online identities. Explore my projects, where every line of code contributes to a compelling online presence."I have developed Learning Management System for Physicians,Designed and developed Donation tracker app and developed Ecommerce sites with CMS</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />

            </div>
            
        </section>
    );
}

export default Works;