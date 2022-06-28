import React, { useState } from 'react';

function marketing() {
    const [tv, setTv] = useState('');
    const [radio, setRadio] = useState('');
    const [newspaper, setNewspaper] = useState('');


    const insertarTv = ({ target }) => { setTv(target.value) };
    const insertarRadio = ({ target }) => { setRadio(target.value) };
    const insertarNewspaper = ({ target }) => { setNewspaper(target.value) };

    function handleSubmit() {
        console.log('tv :' + tv)
        console.log('radio :' + radio)
        console.log('newspaper :' + newspaper)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Inversión en TV:
                <input type="text" onChange={insertarTv} />
            </label>
            <label>
                Inversión en Radio:
                <input type="text" onChange={insertarRadio} />
            </label>
            <label>
                Inversión en Newspaper:
                <input type="text" onChange={insertarNewspaper} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}