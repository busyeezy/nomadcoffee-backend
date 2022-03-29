import client from "../client";

export default {
  Mutation: {
    createBeverage: (_, { name, price, type }) =>
      client.beverage.create({ data: { name, price, type } }),
    updateBevarage: (_, { id, price }) =>
      client.beverage.update({ where: { id }, data: { price } }),
    deleteBevarage: (_, { id }) => client.beverage.delete({ where: { id } }),
  },
};
