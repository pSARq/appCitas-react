import React, { Fragment, useContext, useState, useRef} from "react";
import Store from '../Store';
import { useForm } from "react-hook-form";
import Consumer from '../Redux/Consumer';
import events from '../Redux/events'

export default function BuscarCitaPorIdPaciente({isVacio}) {

	const {register, handleSubmit, formState: { errors }} = useForm();
  const {dispatch} = useContext(Store);
  const formRef = useRef(null);
  const [id, setId] = useState("");
  
 
  const buscar = () => {
    Consumer.findByIdPaciente(id)
      .then((response) => {
        if (response.ok) {
          response.json().then((cita) => {
            dispatch(events.findByIdPaciente(cita));
            if(cita.length === 0){
              isVacio(true);
            }else{
              isVacio(false)
            }
            formRef.current.reset();
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

    return (
		<Fragment>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target="#buscarId"
      >
        Buscar usuario por id
      </button>

      <div
        className="modal fade"
        id="buscarId"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Ingrese el dato a buscar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form ref={formRef} onSubmit={handleSubmit(buscar)}>
              <div className="modal-body">
                <label htmlFor="idPaciente" className="form-label">
				          Id del paciente
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idPaciente"
                  placeholder="Ingrese el id del paciente"
                  {...register("idPaciente", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Salir
                </button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
	)
}
