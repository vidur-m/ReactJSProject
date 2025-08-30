import React from 'react';
import welcomeImage from '../images/welcomeImage.png';

function Welcome() {
    return(
        <section id='welcome-data'>
            <div id="welcome">
                <h1>Valencia High School Robotics</h1>
                <p className='welcome-text'>We are building the future, one robot at a time. Contact us at #########</p>
                <p className='welcome-text'>if you are interested in joining our team or funding us!</p>
            </div>
            <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        </section>
        
    );
}

export default Welcome;