import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {
  getProducts: {
    type: new GraphQLObjectType({
        name: 'getProducts',
        description: 'getProducts object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getProducts
  },
  getOneProduct: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOneProduct
  },
  getAllProduct: {
    type: new GraphQLList(type),
    resolve: model.getAllProduct
  },
  getAllProductsByCategory: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getAllProductsByCategory
  },

  get5RecentProduct: {
    type: new GraphQLList(type),
    resolve: model.get5RecentProduct
  },

  getProductRelative: {
    type: new GraphQLList(type),
    resolve: model.getProductRelative,
  }
};
