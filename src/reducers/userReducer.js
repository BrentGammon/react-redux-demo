
const initalUserState = {
     name: "Jimmy",
     age: 48
} 
  
function checkLocalStorage(){
  if (localStorage.getItem('app_state')== null) {
      return initalUserState 
  } else {
      return JSON.parse(localStorage.getItem('app_state'))
  }
}  


export default function reducer(state=checkLocalStorage(), action){
  switch(action.type){
    case 'CHANGE_USER': {
      state = {...state = action.payload}
      localStorage.setItem("app_state", JSON.stringify(state));
      break;
    }
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload.age}
      localStorage.setItem("app_state", JSON.stringify(state));
      break;
    }
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload}
      localStorage.setItem("app_state", JSON.stringify(state));
      break;
    }
    default:
        return state;
  }
  return state;
}