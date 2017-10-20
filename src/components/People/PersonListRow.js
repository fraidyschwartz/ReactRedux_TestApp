import React from 'react';
import {Link} from 'react-router-dom';

const PersonListRow = ({person, deletePerson}) => {
    return (
        <tr key={person.id}>
            <td><Link to={`/person/${person.id}`}>{person.firstName} {person.lastName}</Link></td>
            <td>{person.age}</td>
            <td className="btn btn-link" onClick={() => deletePerson({person})}>Delete</td>
        </tr>
    );
};

export default PersonListRow;