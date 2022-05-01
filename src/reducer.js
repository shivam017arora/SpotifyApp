export const initialState = { //default values
    user: null,
    playlists: null,
    playing: false,
    item: null,
    token: null,
    rapCavier: null,
}

const reducer = (state, action) => {
    console.log(action); //debugging tool

    // Action => type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_RAP_CAVIER':
            return {
                ...state,
                rapCavier: action.rapCavier
            }
        default:
            return state;
    }
}

export default reducer;