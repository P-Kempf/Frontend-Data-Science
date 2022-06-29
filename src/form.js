import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Fieldset } from 'primereact/fieldset';



function Marketing() {

    const [tv, setTv] = useState('');
    const [radio, setRadio] = useState('');
    const [newspaper, setNewspaper] = useState('');

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

        fetch("http://localhost:3050/preguntas/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(modelo),
        }).then((response) => response.json());

        console.log(modelo);

    }

    return (
        <div id="contenedor">
            <h2>Calculadora de Inversión en Marketing</h2>
            <form>
                <div id="contenedor-formulario">

                    <span className="p-float-label">
                        <InputText id="inversiontv" value={tv} onChange={(e) => setTv(e.target.value)} autoFocus />
                        <label htmlFor="inversiontv">Inversión en TV</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="inversionradio" value={radio} onChange={(e) => setRadio(e.target.value)} />
                        <label htmlFor="inversionradio">Inversión en Radio</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="inversionnewspaper" value={newspaper} onChange={(e) => setNewspaper(e.target.value)} />
                        <label htmlFor="inversionnewspaper">Inversión en Newspaper</label>
                    </span>
                    <Button id='submit' label="submit" onClick={handleSubmit} />



                </div>
            </form>
            <Fieldset id='resultado' legend="Resultado de la inverion en Marketing">
                
            </Fieldset>
        </div>
    );
}

export default Marketing;