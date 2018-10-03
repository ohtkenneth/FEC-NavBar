const knex = require('./pgDb');

async function insertRow(tableName, id, location, size, url) {
  try {
    const result = await knex(tableName).insert({ id, location, size, url });
    return result;
  } catch(err) {
    return err;
  }
}

async function updateRow(tableName, id, data) {
  try {
    const result = await knex(tableName).where({ id }).update(data);
    return result;
  } catch(err) {
    return err;
  }
}

async function deleteRow(tableName, id) {
  try {
    const result = await knex(tableName).where('id', id).del();
    return result;
  } catch(err) {
    console.log(err);
    return err;
  }
}

async function dropTable(tableName) {
  try {
    const result = await knex.schema.dropTableIfExists(tableName);
    console.log('Deleted table', tableName);
    return result;
  } catch(err) {
    return err;
  }
};

async function createTestTable(tableName) {
  try {
    const result = await knex.schema.createTable(tableName, (table) => {
      table.integer('id').primary();
      table.string('location');
      table.string('size');
      table.string('brand');
      table.string('season');
      table.string('url');
    });

    console.log('Created table', tableName);
    return result;
  } catch(err) {
    return err;
  }
}

module.exports = {
  insertRow,
  updateRow,
  deleteRow,
  createTestTable,
  dropTable,
};

