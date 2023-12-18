import './App.css';
import { getPosts } from './api/axios';
import { useEffect,useState } from 'react';
import SearchBar from './component/SearchBar';
import ListPage from './component/ListPage';
function App() {
  const [posts,setPosts] = useState([])
  const [searchResults,setSearchResults] = useState([])
  const content = ''

  useEffect(() => {
    getPosts().then(json =>{
      setPosts(json)
      return json
    }).then(json =>{
      setSearchResults(json)
    })
  }, [])
  
  return (
    <div className="App">
      <SearchBar posts={posts} setSearchResults={setSearchResults}/>
      <ListPage searchResults={searchResults}/>
    </div>
  );
}

export default App;
