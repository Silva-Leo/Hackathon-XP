import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});


function getALgo(){
    axios.get(api)
    .then(response=>{
        const dados = response.dados
        // pegar a lista e .textContent = JSON.stringify(dados)
    })
    .catch(error => console.log(error))
}

getALgo();

export default api;