///////////////Project Reducer//////////////////
const initialState={
    loading:false,
    elementName:null
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASYNC_ACTION_START":
      return {
          ...state,
          loading:true,
          elementName: action
      }
    case "ASYNC_ACTION_FINISH":
        return {
            ...state,
            loading:false,
            elementName:null
        }
    case "ASYNC_ACTION_ERROR":
        return {
            ...state,
            loading:false,
            elementName:null
        }
    default:
      return state;
  }
};

export default asyncReducer;