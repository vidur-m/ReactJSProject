import React, {useEffect, useState} from 'react';

function About() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        // Since the backend is on the same domain, we use a relative path.
        const backendURL = `/about`;
        
        console.log(`Attempting to fetch from: ${backendURL}`);
        
        try {
            const response = await fetch(backendURL);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}. Response: ${errorText}`);
            }

            const items = await response.json();
            setItems(items);
            setError(null);
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Failed to load data. Please check the console for more details.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <section id='about-data'><h1>Loading...</h1></section>;
    }

    if (error) {
        return <section id='about-data'><h1>Error</h1><p>{error}</p></section>;
    }

    return(
        <section id='about-data'>
            <h1>About</h1>
            {
                items.length > 0 ? (
                    items.map(item => (
                        <div key={item.username}>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Username: {item.username}</p>
                        </div>
                    ))
                ) : (
                    <p>No data found.</p>
                )
            }
        </section>
    );
}

export default About;
