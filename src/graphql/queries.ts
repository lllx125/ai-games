/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    title
    user {
      id
      username
      email
      score
      createdAt
      updatedAt
      __typename
    }
    sentences {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    chatUserId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      updatedAt
      chatUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
export const getSentence = /* GraphQL */ `query GetSentence($id: ID!) {
  getSentence(id: $id) {
    id
    role
    content
    Chat {
      id
      title
      createdAt
      updatedAt
      chatUserId
      __typename
    }
    createdAt
    updatedAt
    chatSentencesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSentenceQueryVariables,
  APITypes.GetSentenceQuery
>;
export const listSentences = /* GraphQL */ `query ListSentences(
  $filter: ModelSentenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSentences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      role
      content
      createdAt
      updatedAt
      chatSentencesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSentencesQueryVariables,
  APITypes.ListSentencesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      score
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
