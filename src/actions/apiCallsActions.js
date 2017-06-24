import axios from 'axios';

export function requestUser(){
    return function(dispatch){
        dispatch({type:"REQUEST_USER"})
        axios.get("https://reqres.in/api/users/1")
            .then((response) =>{
                dispatch({type:'REQUEST_USER_RECEIVED'});
                dispatch({type: "CHANGE_NAME", payload: response.data.data.first_name})
        })
        .catch((err)=>{
            dispatch({type: "ERROR_API_PERSON", payload: err})
        })
    }
}



export function requestUserReceived(){
    return{
        type: 'REQUEST_USER_RECEIVED'
    }
}

export function errorAPIPerson(error){
    return {
        type: 'ERROR_API_PERSON',
        payload: error
    }
}