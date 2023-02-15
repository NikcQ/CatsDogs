import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Animals from 'Database/migrations/1676421231592_animals'

export default class Animal extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public name: string
  @column() public species: Number
  @column() public breed: Number
  @column() public gender: Number
  @column() public age: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
