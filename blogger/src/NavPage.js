import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NavPage() {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?pageSize=6&country=in&apiKey=f5010aa1fefe47258db55540100af60c`)
            setArticles(response.data.articles)
            console.log(response)
        }
        const interval = setInterval(() =>  getArticles(), 50000);
        return () => {
          clearInterval(interval);
        };
        getArticles();
    }, [])

    return (

        <div style={{height:'100%'}}>
        {articles.map(article => {
            return(
                <div className="news-app">
                <div className='news-item'>
                    <img width={'150px'} height={'150px'} className='news-img' src={article.urlToImage} alt={article.urlToImage} />
                    <h3><a href={article.url}>{article.title}</a></h3>
                    <p>{article.description}</p>
                </div>
            </div>
            )
        })}
    </div>

    )
}