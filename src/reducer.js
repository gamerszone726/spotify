export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    //token: "BQDtHEqF_jmizFUZ_ubUhojrowOlp7W-Ed88yXPGfd0F8JRN4oeCWltK42nNT2iLb1j2dAcLlGHE_D3prxcaS8UG5CZOQaXGwWRWeiOpiGgC4TDHaFGfh89YLr_-wIUEEPAh4c66lXXsSFDXuyyl73HcGt1ieyk",

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                } 
      
    }


}

export default reducer;