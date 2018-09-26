exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('searches', (table) => {
    table.increments('id').primary();
    table.string('brand');
    table.string('search');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('searches');
};
