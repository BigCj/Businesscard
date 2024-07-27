import React from 'react';
import './App.css';

function Info() {
    return (
        <div className="info">
            <div className='text-container'>
                <h1 className='heading'>Laura Smith</h1>
                <h2 className='job'>Frontend Developer</h2>
                <p className='website'>laurasmith.website</p>
            </div>
            <div className="links">
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
            <div className="section">
                <h3>About</h3>
                <p className='para1'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="section">
                <h3>Interests</h3>
                <p className='para2'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    );
}

export default Info;
