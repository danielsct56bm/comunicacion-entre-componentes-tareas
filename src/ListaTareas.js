// src/ListaTareas.js
import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
    return (
      <ul>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea.texto}
            completada={tarea.completada}
            onDelete={() => eliminarTarea(tarea.id)}
            onEdit={(nuevoTexto) => editarTarea(tarea.id, nuevoTexto)}
            onToggleCompletada={() => toggleCompletada(tarea.id)}
          />
        ))}
      </ul>
    );
}  

export default ListaTareas;
