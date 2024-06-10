import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f77ff886faae49768a64e8a5fdbb4011`;
    async function getData(){
      let res = await fetch(url);
      let data = await res.json();

      const filteredData = data.articles.filter(article => article && Object.values(article).every(value => value !== null));

      setArticles(filteredData);
    }
    getData()
  },[category]);

  console.log(articles)
  return (
    <div>
    <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2> 
    <div className='container d-flex flex-wrap justify-content-center'>
    {
      articles.map((item, key)=>(
        <NewsItem key={key} title={item.title} description={item.description} url={item.url} urlToImage={item.urlToImage}/>  
      ))
    }   
    </div>
    </div>
  )
}

export default NewsBoard;
