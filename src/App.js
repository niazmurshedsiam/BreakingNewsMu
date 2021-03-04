import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles,setArticles] = useState([]);
  // useEffect(()=>{
  //     fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=aa83b5d287e94483bdf47a0a22137b91`)
  //     .then(res=>res.json())
  //     .then(data =>setArticles(data.articles))
  // },[])
  useEffect(()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=aa83b5d287e94483bdf47a0a22137b91`
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
     <div>
       <h1>Breaking News : {articles.length}</h1>
       {
         articles.map(article => <News article={article}></News>)
       }
       
    </div>
  );
}

export default App;
