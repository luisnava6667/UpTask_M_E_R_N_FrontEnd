import React from "react";
import FormularioProyectos from "../components/FormularioProyectos";

const NuevoProyecto = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crear Proyectos</h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyectos/>
      </div>
    </>
  );
};

export default NuevoProyecto;