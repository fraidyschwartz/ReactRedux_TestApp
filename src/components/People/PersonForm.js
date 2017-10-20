import React from 'react';
import TextInput from '../common/TextInput';
import { Link } from 'react-router-dom';

const PersonForm = ({person, onSave, onChange, errors}) => {
    return (
        <form>
            <TextInput
                name="firstName"
                label="First Name"
                value={person.firstName}
                onChange={onChange}
                errors={errors.firstName} />
            <TextInput
                name="lastName"
                label="Last Name"
                value={person.lastName}
                onChange={onChange}
                errors={errors.lastName} />
            <TextInput
                name="age"
                label="Age"
                value={person.age}
                onChange={onChange}
                errors={errors.age} />
            <input
                type="submit"
                value="Save"
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    )
};

// PersonForm.propTypes = {
//     person: PropTypes.object.isRequired,
//     onSave: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     errors: PropTypes.object
// };

export default PersonForm;