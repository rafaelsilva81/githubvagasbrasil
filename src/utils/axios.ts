import axios from "axios";

/* 
  Esse arquivo é responsável por criar uma instância do axios para ser usada em todo o aplicativo.
  Será usado em conjunto com o react-query, que é um hook para fazer requisições HTTP. (https://react-query.tanstack.com/)
*/
const instance = axios.create({
  baseURL: "https://api.github.com/",
});

export default instance;
