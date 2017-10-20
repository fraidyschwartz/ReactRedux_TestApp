import * as types from './actionsTypes';
import axios from 'axios';

function addPersonSuccess(person) {
    return {
        type: types.ADD_PERSON_SUCCESS,
        person
    }
}

function updatePersonSuccess(person) {
    return {
        type: types.UPDATE_PERSON_SUCCESS,
        person
    }
}

function deletePersonSuccess(person) {
    console.log(person);
    return {
        type: types.DELETE_PERSON_SUCCESS,
        person
    }
}

function getPeopleSuccess(people) {
    return {
        type: types.GET_PEOPLE,
        people
    }
}

function savePerson(person) {
    return async dispatch => {
        return await axios.post('./savePerson', person).then(savedPerson => {
            debugger;
            person.id ? dispatch(updatePersonSuccess(savedPerson.config.data)) :
                dispatch(addPersonSuccess(savedPerson.config.data))
        }).catch(error => {
            throw(error);
        });
    }
}

function deletePerson(person) {
    console.log(person.person.id);
    return async dispatch => {
        await axios.post('./deletePerson', person.person);
        dispatch(deletePersonSuccess(person.person.id));
    }
}

function getPeople(people) {
    return async dispatch => {
        let response = await axios.get('./getPeople');
        dispatch(getPeopleSuccess(response.data));
    }
}

export {
    savePerson,
    deletePerson,
    getPeople
}