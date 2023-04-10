/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.25.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  [k: string]: unknown;
}
export type ExecuteMsg = {
  create_listing: {
    denom: string;
    number_of_credits: Uint64;
    price_per_credit: Coin;
  };
} | {
  update_listing: {
    denom: string;
    number_of_credits: Uint64;
    price_per_credit: Coin;
  };
} | {
  buy_credits: {
    denom: string;
    number_of_credits_to_buy: number;
    owner: Addr;
  };
} | {
  cancel_listing: {
    denom: string;
  };
};
export type Uint64 = string;
export type Uint128 = string;
export type Addr = string;
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  listings: {
    limit?: number | null;
    start_after?: [Addr, string] | null;
  };
} | {
  listing: {
    denom: string;
    owner: Addr;
  };
};
export interface ListingResponse {
  listing: Listing;
}
export interface Listing {
  denom: string;
  number_of_credits: Uint64;
  owner: Addr;
  price_per_credit: Coin;
}
export interface ListingsResponse {
  listings: Listing[];
}