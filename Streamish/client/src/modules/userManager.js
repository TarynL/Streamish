const baseUrl = '/api/userprofile';


export const getUserWithVideos = (id) => {
    return fetch(`${baseUrl}/getwithvideos/${id}/`).then((res) => res.json())
}
