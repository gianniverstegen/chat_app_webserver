import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['Float'];
  text: Scalars['String'];
  creatorId: Scalars['Float'];
  creatorName: Scalars['String'];
  creator: User;
  createdAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: Scalars['Boolean'];
  login: UserRegistrationLoginResult;
  register: UserRegistrationLoginResult;
  registerOneTimeUser: Scalars['Boolean'];
  createMessage: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  input: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  hello: Scalars['String'];
  viewUsers: Array<User>;
  viewMessage: Array<Message>;
  viewTodayMessages: Array<Message>;
  testing: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  createdAt: Scalars['String'];
};

export type UserRegistrationLoginResult = {
  __typename?: 'UserRegistrationLoginResult';
  succesFlag: Scalars['String'];
  errors?: Maybe<ErrorMessage>;
};

export type ErrorMessage = {
  __typename?: 'errorMessage';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type CreateMessageMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserRegistrationLoginResult', succesFlag: string, errors?: Maybe<{ __typename?: 'errorMessage', field: string, message: string }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', username: string }> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserRegistrationLoginResult', succesFlag: string, errors?: Maybe<{ __typename?: 'errorMessage', field: string, message: string }> } };

export type RegisterOneTimeUserMutationVariables = Exact<{ [key: string]: never; }>;


export type RegisterOneTimeUserMutation = { __typename?: 'Mutation', registerOneTimeUser: boolean };

export type ViewUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewUsersQuery = { __typename?: 'Query', viewUsers: Array<{ __typename?: 'User', id: number, username: string }> };

export type ViewMessageQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewMessageQuery = { __typename?: 'Query', viewMessage: Array<{ __typename?: 'Message', id: number, text: string, creatorId: number, createdAt: string, creatorName: string }> };

export type ViewTodayMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewTodayMessagesQuery = { __typename?: 'Query', viewTodayMessages: Array<{ __typename?: 'Message', text: string, creatorId: number, createdAt: string, creatorName: string, id: number }> };


export const CreateMessageDocument = gql`
    mutation createMessage($input: String!) {
  createMessage(input: $input)
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    succesFlag
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String) {
  register(username: $username, password: $password, email: $email) {
    succesFlag
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RegisterOneTimeUserDocument = gql`
    mutation RegisterOneTimeUser {
  registerOneTimeUser
}
    `;
export type RegisterOneTimeUserMutationFn = Apollo.MutationFunction<RegisterOneTimeUserMutation, RegisterOneTimeUserMutationVariables>;

/**
 * __useRegisterOneTimeUserMutation__
 *
 * To run a mutation, you first call `useRegisterOneTimeUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOneTimeUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerOneTimeUserMutation, { data, loading, error }] = useRegisterOneTimeUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useRegisterOneTimeUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterOneTimeUserMutation, RegisterOneTimeUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterOneTimeUserMutation, RegisterOneTimeUserMutationVariables>(RegisterOneTimeUserDocument, options);
      }
export type RegisterOneTimeUserMutationHookResult = ReturnType<typeof useRegisterOneTimeUserMutation>;
export type RegisterOneTimeUserMutationResult = Apollo.MutationResult<RegisterOneTimeUserMutation>;
export type RegisterOneTimeUserMutationOptions = Apollo.BaseMutationOptions<RegisterOneTimeUserMutation, RegisterOneTimeUserMutationVariables>;
export const ViewUsersDocument = gql`
    query ViewUsers {
  viewUsers {
    id
    username
  }
}
    `;

/**
 * __useViewUsersQuery__
 *
 * To run a query within a React component, call `useViewUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewUsersQuery(baseOptions?: Apollo.QueryHookOptions<ViewUsersQuery, ViewUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewUsersQuery, ViewUsersQueryVariables>(ViewUsersDocument, options);
      }
export function useViewUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewUsersQuery, ViewUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewUsersQuery, ViewUsersQueryVariables>(ViewUsersDocument, options);
        }
export type ViewUsersQueryHookResult = ReturnType<typeof useViewUsersQuery>;
export type ViewUsersLazyQueryHookResult = ReturnType<typeof useViewUsersLazyQuery>;
export type ViewUsersQueryResult = Apollo.QueryResult<ViewUsersQuery, ViewUsersQueryVariables>;
export const ViewMessageDocument = gql`
    query ViewMessage {
  viewMessage {
    id
    text
    creatorId
    createdAt
    creatorName
  }
}
    `;

/**
 * __useViewMessageQuery__
 *
 * To run a query within a React component, call `useViewMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewMessageQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewMessageQuery(baseOptions?: Apollo.QueryHookOptions<ViewMessageQuery, ViewMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewMessageQuery, ViewMessageQueryVariables>(ViewMessageDocument, options);
      }
export function useViewMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewMessageQuery, ViewMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewMessageQuery, ViewMessageQueryVariables>(ViewMessageDocument, options);
        }
export type ViewMessageQueryHookResult = ReturnType<typeof useViewMessageQuery>;
export type ViewMessageLazyQueryHookResult = ReturnType<typeof useViewMessageLazyQuery>;
export type ViewMessageQueryResult = Apollo.QueryResult<ViewMessageQuery, ViewMessageQueryVariables>;
export const ViewTodayMessagesDocument = gql`
    query viewTodayMessages {
  viewTodayMessages {
    text
    creatorId
    createdAt
    creatorName
    id
  }
}
    `;

/**
 * __useViewTodayMessagesQuery__
 *
 * To run a query within a React component, call `useViewTodayMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewTodayMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewTodayMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewTodayMessagesQuery(baseOptions?: Apollo.QueryHookOptions<ViewTodayMessagesQuery, ViewTodayMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewTodayMessagesQuery, ViewTodayMessagesQueryVariables>(ViewTodayMessagesDocument, options);
      }
export function useViewTodayMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewTodayMessagesQuery, ViewTodayMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewTodayMessagesQuery, ViewTodayMessagesQueryVariables>(ViewTodayMessagesDocument, options);
        }
export type ViewTodayMessagesQueryHookResult = ReturnType<typeof useViewTodayMessagesQuery>;
export type ViewTodayMessagesLazyQueryHookResult = ReturnType<typeof useViewTodayMessagesLazyQuery>;
export type ViewTodayMessagesQueryResult = Apollo.QueryResult<ViewTodayMessagesQuery, ViewTodayMessagesQueryVariables>;