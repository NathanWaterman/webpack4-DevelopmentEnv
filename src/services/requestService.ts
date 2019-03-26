"use strict";

//IE FIX
//require isomorphic fetch
//require a pollyfill for es6
//https://www.npmjs.com/package/isomorphic-fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

/*
* Nice way to handle network requests, keeping everything in separate files
* class RequestService runs an async function
* this function calls API data ('url') which is retrieved from service.ts
* the class is exported using ES6 and called in service.ts
* the get call is made using Fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/


//Another idea is to use observables


class RequestService {
    // async function
    async getRequest(url){
      let data = await (await (fetch(url)
        .then(res => {
          return res.json()
        })
        .catch(err => {
          console.log('Error: ', err)
        })
      ))
      return data
    }
}
export default new RequestService()