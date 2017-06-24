
const initalUserState = {
     name: "Jimmy",
     age: 48
} 

export default function reducer(state=initalUserState, action){
  switch(action.type){
    case 'CHANGE_USER': {
      state = {...state = action.payload}
      break;
    }
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload.age}
      break;
    }
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload}
      break;
    }
    default:
        return state;
  }
  return state;
}