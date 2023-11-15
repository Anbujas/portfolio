import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc"> I am highly skilled and motivated web developer with a strong proficiency in HTML,CSS,React and Javascript with a passion for developing innovative and creative web applications.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I can transform your idea into stunning interfaces and can shape the way,making every click a pleasure.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Crafting seamless online experiences through creative design and technical expertise.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Designing and creating intuitive high performance mobile applications at the palm of your hand.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;