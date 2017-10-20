var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : "localhost",
        user : "root",
        password : "1234",
        database : "test"
    }
});

async function savePerson(person) {
    if(person.id) {
        updatePerson(person);
    }
    else {
        addPerson(person);
    }
}

async function addPerson(person) {
    let id = await knex('people').insert(person);
    let newPerson = await knex('people').select().where("id", id[0]).first();
    return newPerson;
}

async function updatePerson(person) {
    let updatedPerson = await knex('people').update(person).where('id', person.id);
    return updatePerson;
}

async function deletePerson(person) {
    return await knex('people').where('id', person.id).del();
}

async function getAllPeople() {
    return await knex('people').select();
}

export {
    savePerson,
    deletePerson,
    getAllPeople
}





