import './App.css';
import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  useEffect(() => {
    let tareasFiltradas = tareas.slice();

    if (filtro === "Pendientes") {
      tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
    } else if (filtro === "Completadas") {
      tareasFiltradas = tareas.filter((tarea) => tarea.completada);
    }

    tareasFiltradas.sort((a, b) => a.fechaCreacion - b.fechaCreacion);

    setTareasFiltradas(tareasFiltradas);
  }, [tareas, filtro]);


  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fechaCreacion: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} />
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;
