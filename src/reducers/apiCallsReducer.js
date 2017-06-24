const api_Calls = {
  fetching: false,
  fetched: false,
  error: null
}

export default function reducer(state=api_Calls, action){
  switch(action.type){
    case 'REQUEST_USER' : {
        state = {...state, fetching: true}
        break;
    }
    case 'REQUEST_USER_RECEIVED' : {
        state = {...state, fetching: false, fetched: true}
        break;
    }
    case 'ERROR_API_PERSON' : {
        state = {...state, fetching: false, error: action.payload}
        break;
    }
    default:
        return state;
  }
  return state;
}
