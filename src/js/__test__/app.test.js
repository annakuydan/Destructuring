import specialAttack from '../app';

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
        },
    ],
};

// eslint-disable-next-line no-undef
test('Массив объектов с 4 полями', () => {
    // eslint-disable-next-line array-bracket-spacing, array-bracket-newline
    const expected = [{
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
    // eslint-disable-next-line array-bracket-spacing, array-bracket-newline
    }];
    // eslint-disable-next-line no-undef
    expect(expected).toEqual(specialAttack(character));
});