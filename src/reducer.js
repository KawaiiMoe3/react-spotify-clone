export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    // Remove after finished developing
    //token : 'BQBAW8KpRU9N_JNMParfdE0VqH5CPqL9a8ySLBDZZo4DKolFzeWeqI3-90Rj2a6q0A9HZRTkfCRfeJy0lrqeOQ_hXoLnowdnxlx6g150ALiYFQWYlMBtWR-qsEoKcgt4v00tEOURjejk8XYLkoBnsRpAkd_7uSTWjg3AZa9xezqXuh4t',
}

const reducer = (state,action) =>{
    console.log(action)

    // Action -> type, [payload]
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user : action.user,
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state
    }
}

export default reducer;