
import { getToken } from "./authManager";

const baseUrl = '/api/userprofile';


export const getUserWithVideos = (id) => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/getwithvideos/${id}/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get quotes.");
            }
        });
    });
};
