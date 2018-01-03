/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import imageQueries from './models/image/queries';
import settingQueries from './models/setting/queries';
import seoQueries from './models/seo/queries';
import postQueries from './models/post/queries';
import categoryQueries from './models/category/queries';
import userQueries from './models/user/queries';
import informationQueries from './models/information/queries';

const { listImage } = imageQueries;
const { users } = userQueries;
const { setting } = settingQueries;
const { seo, allSeo } = seoQueries;
const { getPosts, getOnePost, getAllPosts, getPostRelative, get5RecentPost, getAllPostsByCategory} = postQueries;
const { getCategories, getOneCategory } = categoryQueries;
const { information } = informationQueries;

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      setting,
      listImage,
      seo,
      allSeo,
      getPosts,
      getOnePost,
      getAllPostsByCategory,
      getAllPosts,
      getPostRelative,
      get5RecentPost,
      getCategories,
      getOneCategory,
      users,
      information
    },
  }),
});

export default schema;
