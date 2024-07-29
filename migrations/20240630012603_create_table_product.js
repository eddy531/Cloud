/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary(); // Corregido de 'inclement' a 'increments'
        table.string('name').notNullable();
        table.string('price').notNullable();
        table.string('categoria').notNullable();
        table.string('stock').notNullable();
        table.string('descripcion').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('product')
};
