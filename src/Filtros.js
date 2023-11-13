import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div>
      <button onClick={() => filtrarTareas("Todas")}>Todas</button>
      <button onClick={() => filtrarTareas("Pendientes")}>Pendientes</button>
      <button onClick={() => filtrarTareas("Completadas")}>Completadas</button>
      <button onClick={() => filtrarTareas("asc")}>Ascendente</button>
      <button onClick={() => filtrarTareas("desc")}>Descendente</button>
    </div>
  );
}

export default Filtros;
