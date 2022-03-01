import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { CREATE_BANK, DELETE_BANK, UPDATE_BANK } from './mutations/bank';
import { CREATE_BANKACCOUNT, DELETE_BANKACCOUNT, UPDATE_BANKACCOUNT } from './mutations/bankaccount';
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './mutations/category';
import { CREATE_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from './mutations/comment';
import { CREATE_INTERACTION, DELETE_INTERACTION, UPDATE_INTERACTION } from './mutations/interaction';
import { CREATE_PERSON, DELETE_PERSON, UPDATE_PERSON } from './mutations/person';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './mutations/product';
import { CREATE_STORE, DELETE_STORE, UPDATE_STORE } from './mutations/store';
import { CREATE_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from './mutations/subcategory';
import { CREATE_USER, DELETE_USER, UPDATE_USER } from './mutations/user'
import { CREATE_WISHLIST, DELETE_WISHLIST, UPDATE_WISHLIST } from './mutations/wishlist';
import { GET_ALL_BANKACCOUNTS, GET_BANKACCOUNT } from './queries/backaccount';
import { GET_ALL_BANKS, GET_BANK } from './queries/bank';
import { GET_ALL_CATEGORIES, GET_CATEGORY } from './queries/category';
import { GET_ALL_COMMENTS, GET_COMMENT } from './queries/comment';
import { GET_ALL_INTERACTIONS, GET_INTERACTION } from './queries/interaction';
import { GET_ALL_PERSONS, GET_PERSON } from './queries/person';
import { GET_ALL_PRODUCTS, GET_PRODUCT } from './queries/product';
import { GET_ALL_STORES, GET_STORE } from './queries/store';
import { GET_ALL_SUBCATEGORIES, GET_SUBCATEGORY } from './queries/subcategory';
import { GET_ALL_USERS, GET_USER } from './queries/user'
import { GET_ALL_WISHLISTS, GET_WISHLIST } from './queries/wishlist';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    /**User */
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    /**Person */
    getAllPersons: GET_ALL_PERSONS,
    getPerson: GET_PERSON,
    /**Store */
    getAllStores: GET_ALL_STORES,
    getStore: GET_STORE,
    /**Category */
    getAllCategories: GET_ALL_CATEGORIES,
    getCategory: GET_CATEGORY,
    /**Category */
    getAllBanks: GET_ALL_BANKS,
    getBank: GET_BANK,
    /**WishList */
    getAllWishLists: GET_ALL_WISHLISTS,
    getWishList: GET_WISHLIST,
    /**BankAccount */
    getAllBankAccounts: GET_ALL_BANKACCOUNTS,
    getBankAccount: GET_BANKACCOUNT,
    /**Subcategory */
    getAllSubcategories: GET_ALL_SUBCATEGORIES,
    getSubcategory: GET_SUBCATEGORY,
    /**Interaction */
    getAllInteractions: GET_ALL_INTERACTIONS,
    getInteraction: GET_INTERACTION,
    /**Comment */
    getAllComments: GET_ALL_COMMENTS,
    getComment: GET_COMMENT,
    /**Product */
    getAllProducts: GET_ALL_PRODUCTS,
    getProduct: GET_PRODUCT,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    /**User */
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER,
    /**Person */
    createPerson: CREATE_PERSON,
    updatePerson: UPDATE_PERSON,
    deletePerson: DELETE_PERSON,
    /**Store */
    createStore: CREATE_STORE,
    updateStore: UPDATE_STORE,
    deleteStore: DELETE_STORE,
    /**Category */
    createCategory: CREATE_CATEGORY,
    updateCategory: UPDATE_CATEGORY,
    deleteCategory: DELETE_CATEGORY,
    /**Bank */
    createBank: CREATE_BANK,
    updateBank: UPDATE_BANK,
    deleteBank: DELETE_BANK,
    /**WishList */
    createWishList: CREATE_WISHLIST,
    updateWishList: UPDATE_WISHLIST,
    deleteWishList: DELETE_WISHLIST,
    /**WishList */
    createBankAccount: CREATE_BANKACCOUNT,
    updateBankAccount: UPDATE_BANKACCOUNT,
    deleteBankAccount: DELETE_BANKACCOUNT,
    /**WishList */
    createSubcategory: CREATE_SUBCATEGORY,
    updateSubcategory: UPDATE_SUBCATEGORY,
    deleteSubcategory: DELETE_SUBCATEGORY,
    /**Interaction */
    createInteraction: CREATE_INTERACTION,
    updateInteraction: UPDATE_INTERACTION,
    deleteInteraction: DELETE_INTERACTION,
    /**Comment */
    createComment: CREATE_COMMENT,
    updateComment: UPDATE_COMMENT,
    deleteComment: DELETE_COMMENT,
    /**Product */
    createProduct: CREATE_PRODUCT,
    updateProduct: UPDATE_PRODUCT,
    deleteProduct: DELETE_PRODUCT,
  },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})