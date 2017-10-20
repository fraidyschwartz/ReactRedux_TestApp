import React from 'react';
import PersonListRow from './PersonListRow';


const PeopleList = ({people, deletePerson}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {people.map(person =>
                    <PersonListRow key={person.id} person={person} deletePerson={deletePerson}/>
                )}
            </tbody>
        </table>
    );
};

export default PeopleList;