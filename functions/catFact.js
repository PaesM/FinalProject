const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch cat fact' }),
        };
    }
};
