const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
// REDUCER | ADD_FAV
case 'ADD_FAV':
      return { ...state, myFavorites: payload, allCharacters: payload };


// REDUCER | REMOVE_FAV
case 'REMOVE_FAV':
      return { ...state, myFavorites: payload };
      
        case "FILTER":
            let copy3 =  state.allCharacters.filter((char) => char.gender === payload)
            return{
                ...state,
                myFavorites: copy3
            }
        case "ORDER":
            let copy4 = state.allCharacters.sort((a,b) => {
                if(payload === "A"){
                    return a.id - b.id
                }else if(payload === "D"){
                    return b.id - a.id
                }else{
                    return 0;
                }
            })
            return{
                ...state,
                myFavorites: copy4

                }
    
        default:
            return {
                ...state
            }
    }
}
export default rootReducer;

