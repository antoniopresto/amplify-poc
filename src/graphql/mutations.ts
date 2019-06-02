// tslint:disable
// this is an auto generated file. This will be overwritten

export const addEntry = `mutation AddEntry($id: Int, $email: String, $createdAt: String) {
  addEntry(id: $id, email: $email, createdAt: $createdAt)
}
`;
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    name
    createdAt
  }
}
`;
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    id
    name
    createdAt
  }
}
`;
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
    id
    name
    createdAt
  }
}
`;
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    orderId
    status
    createdAt
    name
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    orderId
    status
    createdAt
    name
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    orderId
    status
    createdAt
    name
  }
}
`;
