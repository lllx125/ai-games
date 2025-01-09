/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatInput = {
  id?: string | null,
  title: string,
  chatUserId: string,
};

export type ModelChatConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  chatUserId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  title: string,
  user: User,
  sentences?: ModelSentenceConnection | null,
  createdAt: string,
  updatedAt: string,
  chatUserId: string,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  score: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelSentenceConnection = {
  __typename: "ModelSentenceConnection",
  items:  Array<Sentence | null >,
  nextToken?: string | null,
};

export type Sentence = {
  __typename: "Sentence",
  id: string,
  role: string,
  content: string,
  Chat?: Chat | null,
  createdAt: string,
  updatedAt: string,
  chatSentencesId?: string | null,
};

export type UpdateChatInput = {
  id: string,
  title?: string | null,
  chatUserId?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateSentenceInput = {
  id?: string | null,
  role: string,
  content: string,
  chatSentencesId?: string | null,
};

export type ModelSentenceConditionInput = {
  role?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelSentenceConditionInput | null > | null,
  or?: Array< ModelSentenceConditionInput | null > | null,
  not?: ModelSentenceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  chatSentencesId?: ModelIDInput | null,
};

export type UpdateSentenceInput = {
  id: string,
  role?: string | null,
  content?: string | null,
  chatSentencesId?: string | null,
};

export type DeleteSentenceInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  score: number,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  score?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
  chatUserId?: ModelIDInput | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type ModelSentenceFilterInput = {
  id?: ModelIDInput | null,
  role?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSentenceFilterInput | null > | null,
  or?: Array< ModelSentenceFilterInput | null > | null,
  not?: ModelSentenceFilterInput | null,
  chatSentencesId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
  chatSentencesId?: ModelSubscriptionIDInput | null,
  chatUserId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSentenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  role?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSentenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSentenceFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type CreateSentenceMutationVariables = {
  input: CreateSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type CreateSentenceMutation = {
  createSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type UpdateSentenceMutationVariables = {
  input: UpdateSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type UpdateSentenceMutation = {
  updateSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type DeleteSentenceMutationVariables = {
  input: DeleteSentenceInput,
  condition?: ModelSentenceConditionInput | null,
};

export type DeleteSentenceMutation = {
  deleteSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSentenceQueryVariables = {
  id: string,
};

export type GetSentenceQuery = {
  getSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type ListSentencesQueryVariables = {
  filter?: ModelSentenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSentencesQuery = {
  listSentences?:  {
    __typename: "ModelSentenceConnection",
    items:  Array< {
      __typename: "Sentence",
      id: string,
      role: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      chatSentencesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    title: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    },
    sentences?:  {
      __typename: "ModelSentenceConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatUserId: string,
  } | null,
};

export type OnCreateSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnCreateSentenceSubscription = {
  onCreateSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type OnUpdateSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnUpdateSentenceSubscription = {
  onUpdateSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type OnDeleteSentenceSubscriptionVariables = {
  filter?: ModelSubscriptionSentenceFilterInput | null,
};

export type OnDeleteSentenceSubscription = {
  onDeleteSentence?:  {
    __typename: "Sentence",
    id: string,
    role: string,
    content: string,
    Chat?:  {
      __typename: "Chat",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      chatUserId: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatSentencesId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
