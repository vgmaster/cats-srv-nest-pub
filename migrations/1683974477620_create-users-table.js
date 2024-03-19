/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    login: { type: 'varchar(100)', notNull: true },
    password: { type: 'varchar(100)', notNull: true },
    is_admin: { type: 'boolean', notNull: true, default: false },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
    },
  });
};
