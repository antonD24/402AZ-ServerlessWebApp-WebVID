import http from "../http-common";
import Itv from "../components/types/TVtypes";
import { Auth } from "aws-amplify";
import { useState } from "react";


// this component has all the methods for performing the CRUD operations
// using HTTP requests in the API the perform the operations
// when returning data, the location in the database is specified so that if an id is specified it only retreives that item
// OR the whote database and it's items (this is used on main pages to display all of the shows for example)
// the authorizations are passed to the api in order to tell it that the required authorizations are met
// by importing the http-common component we can give the methods access to the route to the API by usinng the end-point URL provided by API Gateway

const getAll = async () => {
  // returns array of all TV Shows
  const user = await Auth.currentSession();
  return http.get<Array<Itv>>("/items", {
    headers: {
      Authorization: user.getIdToken().getJwtToken().toString(),
    },
  });
};

//returning just one show

const get = async (id: any) => {
  const user = await Auth.currentSession();
  return http.get<Itv>(`/items/${id}`, {
    headers: {
      Authorization: user.getIdToken().getJwtToken().toString(),
    },
  });
};

//deleting show
const remove = async (id: any) => {
  const user = await Auth.currentSession();
  return http.delete<any>(`/items/${id}`, {
    headers: {
      Authorization: user.getIdToken().getJwtToken().toString(),
    },
  });
};

const put = async (data: Itv) => {
  const user = await Auth.currentSession();
  const response = await window.fetch(
    'https://9o0nimges3.execute-api.us-east-1.amazonaws.com/items',
    {
      method: "PUT",
      headers: {
        
        
        Authorization: user.getIdToken().getJwtToken().toString()

      },
      body: JSON.stringify(data),
    }
    
  );

  return response;
};

const ShowsServices = {
  getAll,
  get,
  remove,
  put
};

export default ShowsServices;
