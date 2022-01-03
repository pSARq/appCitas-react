/* eslint-disable import/no-anonymous-default-export */
export const actionType  = {
    CITA_FINDED: "cita.CITA_FINDED",
    CITA_BY_ID_FINDED: "cita.CITA_BY_ID_FINDED"
};

export default {
  find : (list) => ({type: actionType.CITA_FINDED, list}),
  findByIdPaciente : (idPaciente) => ({type: actionType.CITA_BY_ID_FINDED, idPaciente}),
};