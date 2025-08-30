import React from 'react';
import homeImage from '../images/homeImage.jpg';

function Home() {
    return(
        <section>
            <div id="home-data">
                <h1 class="mt-5">Home</h1>
                <p>We are located in Placentia, California.</p>
            </div>
            <img src={homeImage} alt="Home" className="homeImage" />
        </section>
    );
}

export default Home;