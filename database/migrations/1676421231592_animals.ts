import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animals extends BaseSchema {
  protected tableName = 'animals'

  public async up () {
    this.schema.createTable (this.tableName, (table) => {
      table.integer ('id').primary().unsigned () /* codigo_usuario llave primaria*/
      table.string('name', 100).notNullable()
      table.integer('species').notNullable()
      table.integer('breed', 100).notNullable()
      table.integer('gender', 1).notNullable()
      table.integer('age').notNullable()
      table.timestamps (false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
