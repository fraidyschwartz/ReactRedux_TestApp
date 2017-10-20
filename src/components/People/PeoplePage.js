import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as peopleActions from '../../actions/peopleActions';
import PeopleList from './PeopleList';

class PeoplePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    redirectToAddPersonPage() {
        this.props.history.push('/person');
    }

    deletePerson(person) {
        this.props.actions.deletePerson(person);
    }

    render() {
        const {people} = this.props;
        return (
            <div>
                <h1>People</h1>

                <input type="submit"
                    value="Add Person"
                    className="btn btn-primary"
                    onClick={this.redirectToAddPersonPage}/>    

                <PeopleList people={people} deletePerson={this.deletePerson}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return (
        {people: state.people}
    )
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);