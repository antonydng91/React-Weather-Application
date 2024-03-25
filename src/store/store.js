import {createStore} from 'redux';

const imageReducer=(state={imageName:"",imageUrl:"",imageDescription:""},action)=>{

    switch (action.type){
    
    case "addImage":

      return {
        ...state,
        ...action.payload

      };

      default:
    

      return state;
    }

  }

const store=createStore(imageReducer);

export default store;