/* eslint-disable import/no-anonymous-default-export */
import { actionType } from "./events"

export default () => {
    const action = {};

    action[actionType.CITA_FINDED] = (state, action) => {
        return { ...state, citas : { elements: action.list } }
    };

    action[actionType.CITA_BY_ID_FINDED] = (state, action) => {
        return { ...state, citas: { elements: action.idPaciente } }
    };
    
    return action;
}