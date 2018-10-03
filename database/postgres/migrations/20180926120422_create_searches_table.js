exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('advertisements', (table) => {
    // table.increments('id');
    table.integer('id').primary();
    table.string('location');
    table.string('size');
    table.string('brand');
    table.string('season');
    table.string('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('advertisements');
};
