const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create order', async () => {
    expect.assertions(1);
    const order = await db.Order.create({
        id: 1,
        name: 'Big box of Dr. Pepper :)',
        timestamp: Date('2023-12-22T12:00:00.000Z')
    });
    expect(order.id).toEqual(1);
});

test('get order', async () => {
    expect.assertions(2);
    const order = await db.Order.findByPk(1);
    expect(order.firstName).toEqual('Bobbie');
    expect(order.lastName).toEqual('Draper');
});

test('delete order', async () => {
    expect.assertions(1);
    await db.Order.destroy({
        where: {
            id: 1
        }
    });
    const order = await db.Order.findByPk(1);
    expect(order).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});