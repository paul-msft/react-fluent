import { graphConfig } from "../App/authConfig";
import { getGraphApiAccessToken } from "./authTools";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 */
export async function getUserData(msalInstance) {
    const headers = new Headers();
    const token = await getGraphApiAccessToken(msalInstance);
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    try{
        const response = await fetch(graphConfig.graphMeEndpoint, options);
        return await response.json();
    } catch(error) {
        console.error(error);
    }
}

/**
 * Gets user avatar from MS Graph API
 */
export async function getUserAvatar() {
    const headers = new Headers();
    const token = await getGraphApiAccessToken();
    const bearer = `Bearer ${token}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphAvatarEndpoint, options)
}