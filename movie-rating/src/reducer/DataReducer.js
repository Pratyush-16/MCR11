import {movies} from "../Utils/Data"
export const initialState ={
    movies: [...movies],
    
}
console.log(movies)

export const DataReducer = (state,action) => {
    switch (action.type) {
        case "ILTERS":
          break;
    
        default:
         return { ...state };

          
    }

     
}