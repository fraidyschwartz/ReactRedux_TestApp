import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as peopleActions from '../../actions/peopleActions';
import PersonForm from './PersonForm';

class ManagePeoplePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            person: Object.assign({}, this.props.person),
            errors: {},
            redirect: false
        }
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.person.id != nextProps.person.id) {
            this.setState({person: Object.assign({}, nextProps.person)});
        }
    }

    change(e) {
        let person = this.state.person;
        person[e.target.name] = e.target.value;
        return this.setState({ person });
    }

    save(event) {
        event.preventDefault();
        this.props.actions.savePerson(this.state.person)
            .then(() => this.redirect)
            .catch(error => {
                throw(error);
        });
    }

    redirect() {
        //this.props.history.push('/person');
        this.setState({ redirect: true });
    }

    render() { 
        if (this.state.redirect) {
            return <Redirect to="/people" />;
        }

        return (
            <PersonForm 
                person={this.state.person} 
                errors={this.state.errors}
                onChange={this.change}
                onSave={this.save}/>
        )
    }
}

function getPersonById(people, id) {
  const person = people.filter(person => person.id == id);
  if (person) return person[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
    const personId = ownProps.match.params.id;

    let person = {id: 0, firstName: '', lastName: '', age: ''};
    
    if(personId && state.people.length > 0) {
        person = getPersonById(state.people, personId);
    }
    
    return {
        person: person
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePeoplePage);
