import React, { useState, useContext, useEffect } from "react";
import Store from "../Store";
import Consumer from "../Redux/Consumer";
import events from "../Redux/events";
import BuscarCitaPorIdPaciente from "../Componets/BuscarCitaPorIdPaciente";

const Citas = () => {
  const {
    state: { citas },
    dispatch,
  } = useContext(Store);
  const listaCitas = citas.elements;
  const [isLoaded, setLoaded] = useState(false);
  const [vacio, setVacio] = useState(false);

  const isVacio = (res) => {
	setVacio(res);  
  }
  

  const todasLasCitas = () => {
    setVacio(false)
    Consumer.findAll()
      .then((response) => {
        if (response.ok) {
          response.json().then((citas) => {
            dispatch(events.find(citas));
          });
        }
        setLoaded(true);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    todasLasCitas();
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <div className="mt-2"><BuscarCitaPorIdPaciente isVacio={setVacio} /></div>
        <button className="btn btn-success" onClick={todasLasCitas}>
          Ver todas las cita
        </button>
      </div>

      <div className="container mt-2">
        <h1>Lista de Citas</h1>
        <table className="container table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>Id Paciente</th>
              <th>Nombre Paciente</th>
              <th>Nombre Medico</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
      		{!isLoaded && <h3>Cargando...</h3>}
		  	{citas.elements.lenght === 0 && <h3>No hay citas</h3>}
	  		{vacio === true && <h3>No exite usuario con ese id</h3>}
            {listaCitas.map((cita) => (
              <tr key={cita.id}>
                <td>{cita.idPaciente}</td>
                <td>
                  {cita.nombrePaciente} {cita.apellidosPaciente}
                </td>
                <td>
                  {cita.nombreMedico} {cita.apellidosMedico}
                </td>
                <td>{cita.fechaReservaCita}</td>
                <td>{cita.horaReservaCita}</td>
                <td>{cita.estadoReservaCita ? "Activa" : "Cancelada"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Citas;
