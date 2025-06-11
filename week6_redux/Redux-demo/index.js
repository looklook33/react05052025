const redux = require("redux");
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
  //action creator is a function that return an action
  return {
    //action is an object with a type property
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

//reducers specify how the app's state changes in response to actions sent to the store.
//reducers is a function that accepts state and action as arguements and retuns the next state of the application
// (previousState, action) =>newState

const initialState = {
  numOfCakes: 10,
  numOfIceCreams:20
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

//redux store: holds application state; allows access to state via getState(); Allows state to be updates via dispatch(aciton);
// registers listens via subscribe(listener);handles unregistering of listeners via the function returend by subscribe(lisener)

const store = createStore(reducer,  applyMiddleware(logger));
console.log('Initial state',store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()