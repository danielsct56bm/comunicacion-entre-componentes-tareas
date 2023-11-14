import React from 'react';

function Orden({ ordenarTareas }) {
  return (
    <div>
        <button onClick={() => ordenarTareas("asc")}>Ascendente</button>
        <button onClick={() => ordenarTareas("des")}>Descendente</button>
    </div>  
  );
}

export default Orden;

