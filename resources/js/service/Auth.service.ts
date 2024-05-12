import { AxiosResponse } from "axios";
import http from "../http-common";
import { LoginData } from "./types/AuthData";
import { RegisterData } from "./types/AuthData";

class AuthService {
    register(data: RegisterData): Promise<AxiosResponse<string>> {
        return http.post(`/auth/register`, data);
    }

    login(data: LoginData): Promise<AxiosResponse<any>> {
        return http.post(`/auth/login`, data);
    }

    getUser(): Promise<AxiosResponse<any>> {
        return http.get(`/profile`);
    }

    logout(): Promise<AxiosResponse<any>> {
        return http.post(`/auth/logout`);
    }
}

export default new AuthService();
