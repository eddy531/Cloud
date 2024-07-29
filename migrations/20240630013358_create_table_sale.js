/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('sale', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.string('cedula_comprador').notNullable();
        table.string('fono_comprador').notNullable();
        table.string('ciudad').notNullable();
        table.string('total').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('sale')
};
