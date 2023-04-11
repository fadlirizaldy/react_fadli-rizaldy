import { gql } from "@apollo/client";

export const GetProductList = gql`
  query GetProduct {
    product {
      id
      name
      description
      freshness
      category
      price
    }
  }
`;

export const AddProduct = gql`
  mutation MyQuery($object: product_insert_input!) {
    insert_product_one(object: $object) {
      id
      name
      description
    }
  }
`;

export const DeleteProductById = gql`
  mutation DeleteProductById($id: Int!) {
    delete_product_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const LatestId = gql`
  query LatestId {
    product(order_by: { id: desc }, limit: 1) {
      id
    }
  }
`;

export const SubscriptionProduct = gql`
  subscription ProductSubs {
    product {
      id
      name
      category
      freshness
      price
      description
      image
    }
  }
`;
