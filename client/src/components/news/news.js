import React, { useEffect, useState, useRef } from "react";

const NewsArticles = () => {
  const [articles, setArticles] = useState("")


  const getArticles = async () => {
    try {

      const response = await fetch("http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=69be0979a5ee4732bf3aacc0c442dfa8", {
        "method": "GET",
        "headers": {
          "Access-Control-Allow-Origin": "*"
        }
      })
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getArticles()
  }, [])


  return <div>Hello</div>
}

export default NewsArticles