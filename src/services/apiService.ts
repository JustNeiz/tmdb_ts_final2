import axios from "axios";
import {baseURL} from "../constants/urls.ts";

const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request=> {
    request.headers["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTZjMDAyNmU3ZDc4MjM3ZTc4MjQ0YzZjY2FkYzE3NCIsInN1YiI6IjY1ZGM5NjljM2RjODg1MDE4YjQzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yh67u1N1BdsE4RtEqhsdG52D-P87kF1UwhAlLWqC5Dc';
    return request
})
export { apiService}
