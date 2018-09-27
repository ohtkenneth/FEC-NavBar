exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('searches', (table) => {
    // table.increments('id');
    table.integer('id');
    table.string('brand');
    table.string('search');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('searches');
};
