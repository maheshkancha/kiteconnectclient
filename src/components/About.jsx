import React from 'react';
import axios from 'axios';

const About = props => {
    console.log('Props Object:', props)
    const { location: { search } } = props
    const queryParamArray = search.substring(1, search.length).split('&')
    let myParams = [];
    for (let a of queryParamArray) {
        const splitter = a.split('=');
        const obj = { key: splitter[0], value: splitter[1] };
        myParams.push(obj);
    }

    const getProfile = async () => {
        console.log('Request to get User Profile.');
        const rt = myParams.filter(i => i.key === 'request_token')
        const url = `http://localhost:4200/authenticate/request_token=${rt[0].value}`
        const response = await axios.get(url);
        console.log('Response from server:', response);
    }

    return (
        <div>
            This is a About page.
            <div style={{ marginTop: '10px' }}>
                Query string details:
            <ul>
                    {myParams.map((item, i) =>
                        <li key={`key-${i}`}>{item.key.toUpperCase()} - {item.value}</li>
                    )}
                </ul>
            </div>
            <div style={{ width: '200px', height: '80px', backgroundColor: 'orange' }} onClick={getProfile}>Get Profile</div>
        </div>
    );
}

export default About;