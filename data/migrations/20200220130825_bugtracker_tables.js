
exports.up = function(knex) {
  return knex.scheme.createTable('roles', tbl=>{
      tbl.increments();

      tbl.string('name', 255).notNullable().unique();
  })

  .createTable('employees', tbl=>{
      tbl.increments();
      tblstring('name', 255).notNullable();

      //foreign key
      tbl.integer('role_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })

  .createTable('tickets', tbl=>{
      tbl.increments();
      tbl.string('description', 255).notNullable();
  })

  .createTable('employee_tickets', tbl=>{
      tbl.primary(['ticket_id', 'employee_id']);
    //   tbl.unique(['ticket_id', 'employee_id']);

      //foreign keys
      tbl.integer('employee_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('employees')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl.integer('ticket_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tickets')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl
  })
};


exports.down = function(knex) {
  
};
