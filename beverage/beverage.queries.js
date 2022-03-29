import client from "../client";

export default {
  Query: {
    beverages: () => client.beverage.findMany(),
    beverage: ({ name }) => client.beverage.findUnique({ name }),
  },
};
