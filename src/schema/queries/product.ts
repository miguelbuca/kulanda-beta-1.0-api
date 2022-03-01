import { GraphQLID, GraphQLList } from "graphql";
import { ProductController } from "../../controllers/product.controller";
import { ProductType } from "../typeDefs/product";

export const GET_ALL_PRODUCTS = {
  type: new GraphQLList(ProductType),
  resolve: async () => {
    const productController = new ProductController();
    return await productController.index();
  },
};
export const GET_PRODUCT = {
  type: ProductType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, args: any) => {
    const productController = new ProductController();
    return await productController.show(args.id);
  },
};
