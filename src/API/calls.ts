import axios from "axios"

export const instance = axios.create({
  baseURL: "https://famous-calf-jersey.cyclic.app",
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*"
  },
  transformResponse: [
    function (data) {
      return data ? JSON.parse(data) : data
    }
  ]
})
