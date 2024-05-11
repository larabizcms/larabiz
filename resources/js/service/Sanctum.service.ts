import { AxiosResponse } from "axios";
import http from "../http-common";

class SanctumService {
    csrfProtection(): Promise<AxiosResponse<any>> {
        return http.get("/sanctum/csrf-cookie");
    }
}

export default new SanctumService();
