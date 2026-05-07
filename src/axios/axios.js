import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers:{
        'accept':'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization = `${token}`;
        }
        return config
    }, 
    (error) => Promise.reject(error)
)

const sheets = {
    postLogin: (user) => api.post("/login", user),
    postCadastro: (user) => api.post("/user", user),
    getUsers: () => api.get("/user"),
    getOrganizadores: () => api.get("/organizador"),
    getEventos: () => api.get("/evento"),
    getIngressos: () => api.get("/ingresso"),

    deleteUser: (cpf) => api.delete("/user/"+cpf),
    deleteOrganizador: (id_organizador) => api.delete("/organizador/"+id_organizador),
    deleteIngresso: (id_ingresso) => api.delete("/ingresso/"+id_ingresso),
    deleteEvento: (id_evento) => api.delete("/evento/"+id_evento),
}

export default sheets;