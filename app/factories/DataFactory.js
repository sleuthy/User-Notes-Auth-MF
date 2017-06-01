"use strict";

app.factory("DataFactory", function($q, $http) {

  let getData = () => {
    let items = [];
    return $q((resolve, reject) => {
      // $http.get('./data/flavors.json') firebase data goes here based on userid
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        console.log("itemCollection", itemCollection);
        resolve(itemCollection.notes);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
