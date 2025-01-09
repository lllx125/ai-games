/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createSentence = /* GraphQL */ `mutation CreateSentence(
  $input: CreateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  createSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSentenceMutationVariables,
  APITypes.CreateSentenceMutation
>;
export const updateSentence = /* GraphQL */ `mutation UpdateSentence(
  $input: UpdateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  updateSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSentenceMutationVariables,
  APITypes.UpdateSentenceMutation
>;
export const deleteSentence = /* GraphQL */ `mutation DeleteSentence(
  $input: DeleteSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  deleteSentence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSentenceMutationVariables,
  APITypes.DeleteSentenceMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
