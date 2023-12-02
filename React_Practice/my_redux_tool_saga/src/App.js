import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getCatsFetch } from './catSlice';

function App() {
    const cats = useSelector((state) => state.cats.cats)
    const Loading = useSelector(state=>state.cats.isLoading)
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getCatsFetch())
    },[dispatch])

    console.log(cats)
    console.log(Loading)
    
   if(Loading){
    return (
      <h1>
        Data is loading!!
      </h1>
    );
   }else{
    return (
      <div className="App">
        {
          cats.map(cat=>(
            <div key={cat.id} className='row'> 
            <div className='column column-left'>
              <h2>{cat.name}</h2>
            </div>
            <div className='column column-right'>
              <h5>{cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
            </div>
          ))
        }
      </div>
    );
   }
}

export default App;
