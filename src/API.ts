/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
};

export type DeleteCustomerInput = {
  id?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelIDFilterInput = {
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
};

export type ModelStringFilterInput = {
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
};

export type AddEntryMutationVariables = {
  id?: number | null,
  email?: string | null,
  createdAt?: string | null,
};

export type AddEntryMutation = {
  addEntry: string | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
};

export type CreateCustomerMutation = {
  createCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
};

export type UpdateCustomerMutation = {
  updateCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
};

export type DeleteCustomerMutation = {
  deleteCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer:  {
    __typename: "Customer",
    id: string,
    name: string,
    createdAt: string | null,
  } | null,
};
