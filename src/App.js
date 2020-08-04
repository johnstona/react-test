import React, { useState, useEffect } from 'react';
import './App.css';
import API from './API/API';
import Posts from './components/Posts';
import Search from './components/Search';

const App = () => {
  const [allPosts, setAllPosts] = useState()
  const [filter, setFilter] = useState(null)

  useEffect(()=> {
    API.fetchAllPosts()
      .then(res => setAllPosts(res))
  }, [])

  const filterPosts = (query) => {
    return allPosts?.filter(p => p.title.slice(0, query.length) === query)
  }

  const postsToShow = !filter ? allPosts : filterPosts(filter)

  return <>
          <Search setFilter={setFilter}/>
          {postsToShow ? <Posts posts={postsToShow} /> : 'Loading...'}
         </> 
}


export default App;
