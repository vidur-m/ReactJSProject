import React, { useEffect, useState } from 'react';

function About() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchItems = async () => {
            // Use absolute path to avoid routing conflicts
            const backendURL = '/about'; // Consider adding '/api' prefix
            
            console.log(`Attempting to fetch from: ${backendURL}`);
            
            try {
                // Add timeout mechanism
                const timeoutId = setTimeout(() => {
                    controller.abort();
                }, 10000); // 10 second timeout

                const response = await fetch(backendURL, { signal });
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
                }

                const data = await response.json();
                setItems(data);
                setError(null);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Fetch error:', error);
                    setError('Failed to load data. Please check the console for more details.');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();

        // Cleanup function
        return () => controller.abort();
    }, []);

    if (isLoading) {
        return (
            <section id='about-data'>
                <h1>Loading...</h1>
            </section>
        );
    }

    if (error) {
        return (
            <section id='about-data'>
                <h1>Error</h1>
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section id='about-data'>
            <h1>About</h1>
            {items.length > 0 ? (
                items.map(item => (
                    <div key={item.username || item.id} className="about-item">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Username:</strong> {item.username}</p>
                    </div>
                ))
            ) : (
                <p>No data found.</p>
            )}
        </section>
    );
}

export default About;