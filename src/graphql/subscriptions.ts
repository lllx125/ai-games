/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateSentence = /* GraphQL */ `subscription OnCreateSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onCreateSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSentenceSubscriptionVariables,
  APITypes.OnCreateSentenceSubscription
>;
export const onUpdateSentence = /* GraphQL */ `subscription OnUpdateSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onUpdateSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSentenceSubscriptionVariables,
  APITypes.OnUpdateSentenceSubscription
>;
export const onDeleteSentence = /* GraphQL */ `subscription OnDeleteSentence($filter: ModelSubscriptionSentenceFilterInput) {
  onDeleteSentence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSentenceSubscriptionVariables,
  APITypes.OnDeleteSentenceSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    username
    email
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
