import React, { useState } from 'react';


function Marketing() {


    const [tv, setTv] = useState('');
    const [radio, setRadio] = useState('');
    const [newspaper, setNewspaper] = useState('');


    const insertartv =({target}) =>{
        setTv(target.value);

    }
    const insertarCategoria =({target})=> {
        setCategoria(target.value);

    }

    function handleSubmit() {
        console.log('Username: ' + usuario)
        console.log('Categoria: ' + categoria)

        
    }






    return (
        <div>
            <label>Usuario

                <input type="text" onChange={insertarUsuario}></input></label>

            <label>categoria

                <input type="text" onChange={insertarCategoria}></input></label>

            <input type="submit" value="Empezar a Jugar" onClick={handleSubmit} ></input>
        </div>
    )
}


export default Prueba
//output
//Your input value is: x
