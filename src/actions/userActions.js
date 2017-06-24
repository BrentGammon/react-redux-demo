
export function changeUser(name,age){
    return {
        type: 'CHANGE_USER',
        payload: {
            name,
            age,
        }
    }
}

export function setName(name){
    return {
        type: 'CHANGE_NAME',
        payload: {
            name,
        }
    }
}

export function setAge(age){
    return {
        type: 'CHANGE_AGE',
        payload: {
            age,
        }
    }
}
