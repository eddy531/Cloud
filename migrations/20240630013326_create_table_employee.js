/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('employee', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('position').notNullable();
        table.string('salary').notNullable();
        table.string('jornada').notNullable();

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('employee')
};
