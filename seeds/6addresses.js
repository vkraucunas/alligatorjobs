
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('addresses').del(),

    // Inserts seed entries
    knex('addresses').insert({
        id: 1,
        user_id: 1,
        line_1: '1900 Pennsylvania Avenue',
        line_2: 'The Residence',
        city: 'Washington',
        state: 'Michigan',
        zip: '48302'

    }),
    knex('addresses').insert({
        id: 2,
        user_id: 2,
        line_1: 'Buckingham Palace',
        line_2: 'The Dungeon',
        city: 'Manhattan',
        state: 'Ohio',
        zip: '12798'
    }),
    knex('addresses').insert({
        id: 3,
        user_id: 3,
        line_1: 'Taj Mahal' ,
        line_2: 'Ghost Room',
        city: 'Indiana',
        state: 'New York',
        zip: '48302'
    })
  );
};
