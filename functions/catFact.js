
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        return {
            statusCode: 500,
            body: 'Failed to fetch a cat fact.'
        };
    }
};
