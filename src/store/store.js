import {createStore} from 'redux';

const counterReduce=(state={counter:0,showCounter:true},action)=>{

    if(action.type=="increment"){

      return {
        ...state,
        counter: state.counter + 1,

      };
    }
    if(action.type=="decrement"){
        return {
            ...state,
            counter: state.counter + 1,
          };
      }

      if(action.type=="toggle"){
        return {
            ...state,
            showCounter:!state.showCounter
          };
      }

      return state;

}

const store=createStore(counterReduce);

export default store;