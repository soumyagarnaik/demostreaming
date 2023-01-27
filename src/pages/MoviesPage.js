import React,{useState, useEffect} from 'react'
import styles from '../css/series.module.css'
import ProgramCard from '../components/ProgramCard'
import Loader from '../components/Loader'
import Error from '../components/Error'

const MoviesPage = () => {
  const [movies,setMovies] = useState([])
  const [error,setError] = useState()

  const getData=()=> {
    setTimeout(() => {
      fetch('sample.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then((response) =>{
          return response.json();
        })
        .catch(err => setError(err))
        .then(function(programData) {
          const movieData = programData && programData.entries.filter(program => program.programType === 'movie' && program.releaseYear >= 2010)
          const selectedMovies = movieData.slice(0,21).sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
          setMovies(selectedMovies);
        });
    },[1000]) 
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    {
      error ? (
        <Error />
      ) : (
        movies && movies.length > 0 ? (
          <div className={styles.seriesDashboard}>
                {
                  movies && movies.map(seriesData => (
                    <div key={seriesData} className={styles.program}>
                      <ProgramCard imgurl={seriesData.images['Poster Art'].url} title = {seriesData.title} releaseYear = {seriesData.releaseYear}/>
                    </div>
                  ))
                }
              </div>
                ) : (
                  <Loader />
                )
      )
    }
    </>
    
  )
}

export default MoviesPage