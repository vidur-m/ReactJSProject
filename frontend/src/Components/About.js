import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function About() {
    useEffect(() => {
        fetchItems();
    }, []);

    const  [items, setItems] = useState([]);

    const fetchItems = async () => {
    const data = await fetch('/about');
        if (data.ok){
            const items = await data.json();
            setItems(items);
            console.log('Able to fetch data from /about');
        } else {
            console.error('Failed to fetch data from /about');
        }
    };

    return(
        <section id='about-data'>
            <h1>About</h1>
            {
                items.map(item => (
                    <div>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.username}</p>
                    </div>
                ))
            }
        </section>
    );
}


export default About;