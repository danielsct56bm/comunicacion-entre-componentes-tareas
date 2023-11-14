import React from 'react';

function Advertencia({ advertencia }) {
    if (advertencia==="textVacio"){
        return (
            <div>
                <p>la descripcion no puede estar vacia</p>
            </div>  
        );
    }else if (advertencia==="textM20"){
        return (
            <div>
                <p>la descripcion no puede tener mas de 20 caracteres</p>
            </div>  
        );
    }else {
        return(
            <br></br>
        );
    }
}

export default Advertencia;