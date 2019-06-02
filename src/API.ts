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

export type CreateItemInput = {
  orderId: string,
  status: Status,
  createdAt: string,
  name: string,
};

export enum Status {
  DELIVERED = "DELIVERED",
  IN_TRANSIT = "IN_TRANSIT",
  PENDING = "PENDING",
  UNKNOWN = "UNKNOWN",
}


export type UpdateItemInput = {
  orderId: string,
  status: Status,
  createdAt: string,
  name?: string | null,
};

export type DeleteItemInput = {
  orderId: string,
  status: Status,
  createdAt: string,
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

export type ModelItemPrimaryCompositeKeyConditionInput = {
  eq?: ModelItemPrimaryCompositeKeyInput | null,
  le?: ModelItemPrimaryCompositeKeyInput | null,
  lt?: ModelItemPrimaryCompositeKeyInput | null,
  ge?: ModelItemPrimaryCompositeKeyInput | null,
  gt?: ModelItemPrimaryCompositeKeyInput | null,
  between?: Array< ModelItemPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelItemPrimaryCompositeKeyInput | null,
};

export type ModelItemPrimaryCompositeKeyInput = {
  status?: Status | null,
  createdAt?: string | null,
};

export type ModelItemFilterInput = {
  orderId?: ModelIDFilterInput | null,
  status?: ModelStatusFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelStatusFilterInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
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

export type CreateItemMutationVariables = {
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
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

export type GetItemQueryVariables = {
  orderId: string,
  status: Status,
  createdAt: string,
};

export type GetItemQuery = {
  getItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};

export type ListItemsQueryVariables = {
  orderId?: string | null,
  statusCreatedAt?: ModelItemPrimaryCompositeKeyConditionInput | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      orderId: string,
      status: Status,
      createdAt: string,
      name: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ItemsByStatusAndCreatedAtQueryVariables = {
  status?: Status | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByStatusAndCreatedAtQuery = {
  itemsByStatusAndCreatedAt:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      orderId: string,
      status: Status,
      createdAt: string,
      name: string,
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

export type OnCreateItemSubscription = {
  onCreateItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem:  {
    __typename: "Item",
    orderId: string,
    status: Status,
    createdAt: string,
    name: string,
  } | null,
};
