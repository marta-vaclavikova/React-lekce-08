import React, { useEffect, useState } from 'react';

const WorldTime = () => {

    const [datetime, setDatetime] = useState('');
    const [timezone, setTimezone] = useState('Europe/Prague');

    const handleTimezoneChange = (e) => {
        setTimezone(e.target.value);
    }

    useEffect(() => {
        fetch('https://worldtimeapi.org/api/timezone/Europe/Prague').then(response => response.json())
            .then(json => {
                setDatetime(json.datetime);
            })

    }, []);

    useEffect(() => {
        fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
        .then(response => response.json())
            .then(json => {
                setDatetime(json.datetime.slice(11,19));
            })

    }, [timezone]);

    return (
        <>
            <select value={timezone} onChange={handleTimezoneChange}>
                <option value="America/New_York">New York</option>
                <option value="Europe/London">Londýn</option>
                <option value="Europe/Moscow">Moskva</option>
                <option value="Europe/Prague">Praha</option>
                <option value="Asia/Hong_Kong">Hong Kong</option>
                <option value="Asia/Jerusalem">Jeruzalém</option>
            </select>
            <h2>Aktuální čas</h2>
            <p>{datetime}</p>
        </>
    );
}

export default WorldTime;