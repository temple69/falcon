
import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [serverResponse, setServerResponse] = useState([]);
  const [requestData, setRequestData] = useState({
    url:'',
    data:{}
  });
  const getEndpoint=(url,data)=>{
    console.log(data)
    console.log(url)
    setRequestData((prevData)=>{
        return{
            ...prevData,
            url:url,
            data:data
        }
    })

  }
  useEffect(() => {
    const getServerResponse = async () => {
      const request = await fetch(requestData.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:'temple',
            email:'utemple169@gmail.com',
            phone:'08108079518',
            password:'temple69'
        }),
      });
      const response = await request.json()
      setServerResponse(response)
    };
    getServerResponse()
  },[requestData.data,requestData.url]);
  return {
    serverResponse,
    getEndpoint
  }
};

export default useFetch;
