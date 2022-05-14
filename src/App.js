import React,{useEffect,useState} from 'react'  
import MovieCard from './MovieCard';
import './App.css';
import search from './search.svg'
// dad36ab0

const APT_URL = 'https://www.omdbapi.com?apikey=dad36ab0'; 



const App = () => {
  const [movies ,setMovies] =useState([]);
  const [searchTerm ,setSearchTerm] = useState('');
    const searchMovies = async (title)=>{
        const response = await fetch(`${APT_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        return () => {
            searchMovies('Spiderman');
        };
    }, [])
  return (
    <div className='app'>
         <h1>MovieLand</h1>
         <div className='search'>
            <input
             placeholder='Search for movies'
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img src={search}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}/>
         </div>

         {
          movies?.length>0
          ?(
            <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
         </div>
          ):
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
         }
       
    </div>
  )
}

export default App