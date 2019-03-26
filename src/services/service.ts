"use strict";

/*
* Nice way to handle network requests, keeping everything in separate files
* class APIService runs the function call RequestData from requestService.ts
* this file is where the linking of the API data static or prod will be placed
* APIService is exported using ES6 and imported to other components to map data
*/

import RequestData from './requestService'

class APIService {

    getData(){
    var url = `JSON FILE`
      return RequestData.getRequest(url)
    }
  
}

export default new APIService()