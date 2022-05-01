// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

import confgis from "./config";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "https://spotify-clone-30d91.web.app";
const clientId = confgis.spotify.client_id

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

