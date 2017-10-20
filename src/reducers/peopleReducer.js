import * as types from '../actions/actionsTypes';

export default function peopleReducer(state = [], action) {
    switch(action.type) {
        case types.ADD_PERSON_SUCCESS: 
            return [...state, 
                Object.assign({}, action.person)];
        case types.UPDATE_PERSON_SUCCESS: 
            return [...state.filter(person => person.id !== action.person.id), 
                Object.assign({}, action.person)];
        case types.DELETE_PERSON_SUCCESS: 
            return [...state.filter(person => person.id !== action.person), 
                Object.assign({}, action.people)];
        case types.GET_PEOPLE:
            return action.people
        default: 
            return state;
    }
}