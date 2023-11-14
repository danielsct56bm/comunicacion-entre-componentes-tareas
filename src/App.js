import './App.css';
import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import Orden from './Orden';
import Advertencia from './Advertencia';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [orden, setOrden] = useState("asc");
  const [advertencia, setAdvertencia] = useState("");

  const IndexbyId = (id) => {
    return tareas.findIndex(tarea => tarea.id === id);
  };

  const agregarTarea = (texto) => {
    if (texto ==""){
      advertenciar("textVacio")
    }else if( texto.length >20){
      advertenciar("textM20")
    }else{
      setTareas([...tareas, {id: Date.now(), texto, completada: false }]);
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };
  

  const editarTarea = (id, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[IndexbyId(id)].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (id) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[IndexbyId(id)].completada = !nuevasTareas[IndexbyId(id)].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = (orden) => {
    setOrden(orden);
  };

  const advertenciar = (advertencia) => {
    setAdvertencia(advertencia);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  let tareasOrdenadas = [...tareasFiltradas];
  if (orden==="des"){
    tareasOrdenadas.reverse();
  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Advertencia advertencia={advertencia}/>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} />
      <Orden ordenarTareas={ordenarTareas} />
      <ListaTareas
        tareas={tareasOrdenadas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </div>
  );
}

export default App;
