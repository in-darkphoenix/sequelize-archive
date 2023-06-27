# sequelize-archive
getting to know sequelize with postgresql and more on later...

## poool:-
1. https://sequelize.org/docs/v6/other-topics/connection-pool/
2. https://stackoverflow.com/questions/35525574/how-to-use-database-connections-pool-in-sequelize-js#:~:text=The%20pool%20is%20the%20collection,open%20connections%20(%20max%3A%205%20)

## notes
1. sequelize works on both empty or non-empty db
2. By default, Sequelize will log to console every SQL query it performs
3. Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.

## configure table options
```sequelize.define('User', {
  // ... (attributes)
}, {
  freezeTableName: true // same as model
  tableName: 'Employees'
  timestamps: false

   // don't forget to enable timestamps!
  timestamps: true,

  // I don't want createdAt
  createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
  updatedAt: 'updateTimestamp'
})
```
## model synchronization, ex User model, we can also use sequelize.sync()
1. User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
2. User.sync({ force: true }) - This creates the table, dropping it first if it already existed
3. User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model
4. As shown above, sync({ force: true }) and sync({ alter: true }) can be destructive operations. Therefore, they are not recommended for production-level software. Instead, synchronization should be done with the advanced concept of Migrations (https://sequelize.org/docs/v6/other-topics/migrations/), with the help of the Sequelize CLI.

## Column options
```
const { Model, DataTypes, Deferrable } = require("sequelize");

class Foo extends Model {}
Foo.init({
  // instantiating will automatically set the flag to true if not set
  flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

  // default values for dates => current time
  myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

  // setting allowNull to false will add NOT NULL to the column, which means an error will be
  // thrown from the DB when the query is executed if the column is null. If you want to check that a value
  // is not null before querying the DB, look at the validations section below.
  title: { type: DataTypes.STRING, allowNull: false },

  // Creating two objects with the same value will throw an error. The unique property can be either a
  // boolean, or a string. If you provide the same string for multiple columns, they will form a
  // composite unique key.
  uniqueOne: { type: DataTypes.STRING,  unique: 'compositeIndex' },
  uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

  // The unique property is simply a shorthand to create a unique constraint.
  someUnique: { type: DataTypes.STRING, unique: true },

  // Go on reading for further information about primary keys
  identifier: { type: DataTypes.STRING, primaryKey: true },

  // autoIncrement can be used to create auto_incrementing integer columns
  incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

  // You can specify a custom column name via the 'field' attribute:
  fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },

  // It is possible to create foreign keys:
  bar_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Bar,

      // This is the column name of the referenced model
      key: 'id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  },

  // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
  commentMe: {
    type: DataTypes.INTEGER,
    comment: 'This is a column name that has a comment'
  }
}, {
  sequelize,
  modelName: 'foo',

  // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
  indexes: [{ unique: true, fields: ['someUnique'] }]
});
```