import React, { useState } from 'react';


function Marketing() {

    const [tv, setTv] = useState('');
    const [radio, setRadio] = useState('');
    const [newspaper, setNewspaper] = useState('');


    const insertarTv = ({ target }) => { setTv(target.value) };
    const insertarRadio = ({ target }) => { setRadio(target.value) };
    const insertarNewspaper = ({ target }) => { setNewspaper(target.value) };


    const modelo = {
        tv: undefined,
        radio: undefined,
        newspaper: undefined,
    }
        function handleSubmit(e) {
            e.preventDefault();
    modelo["tv"] = tv;
    modelo["radio"] = radio;
    modelo["newspaper"] = newspaper;
    /*         console.log('tv :' + tv)
            console.log('radio :' + radio)
            console.log('newspaper :' + newspaper) */
    console.log(tv);
    console.log(radio);
    console.log(newspaper);
    console.log(modelo);
}

return (
    <form>
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
        <input type="submit" value="submit" onClick={handleSubmit} />
    </form>
);
}

export default Marketing;