const knex = require("../db/connection");

const tableName = "reservations";

function list() {
    return knex(tableName)
        .select("*")
        .orderBy('reservation_time', 'asc')
}

function listOnDate(reservation_date) {
    return knex(tableName)
    .select("*")
    .where({reservation_date})
    .orderBy('reservation_time', 'asc')
}

function create(reservation) {
    return knex(tableName)
        .insert(reservation)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

module.exports = {
    create,
    list,
    listOnDate,
};