// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    name
    createdAt
  }
}
`;
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($orderId: ID!, $status: Status!, $createdAt: AWSDateTime!) {
  getItem(orderId: $orderId, status: $status, createdAt: $createdAt) {
    orderId
    status
    createdAt
    name
  }
}
`;
export const listItems = `query ListItems(
  $orderId: ID
  $statusCreatedAt: ModelItemPrimaryCompositeKeyConditionInput
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(
    orderId: $orderId
    statusCreatedAt: $statusCreatedAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      orderId
      status
      createdAt
      name
    }
    nextToken
  }
}
`;
export const itemsByStatusAndCreatedAt = `query ItemsByStatusAndCreatedAt(
  $status: Status
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByStatusAndCreatedAt(
    status: $status
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      orderId
      status
      createdAt
      name
    }
    nextToken
  }
}
`;
