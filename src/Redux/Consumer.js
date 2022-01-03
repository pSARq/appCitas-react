/* eslint-disable import/no-anonymous-default-export */
const HOST_API =  "https://app-citas-mongo-reactivo.herokuapp.com/"

export default {
    findAll: async () => {
        return fetch(HOST_API + "citasReactivas")
            .catch(error => console.error('Error:', error))
    },

    findByIdPaciente: async (idPaciente) => {
        return fetch(HOST_API + "citasReactivas/"+ idPaciente +"/byidPaciente", )
        .catch(error => console.error('Error:', error))
    },
    
};