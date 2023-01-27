import React, { useState, useEffect } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import ProgramCard from '../components/ProgramCard'
import styles from '../css/series.module.css'

const SeriesPage = () => {
  const [series,setSeries] = useState([])
  const [error,setError] = useState()


  const getData=()=>{
    // Added setTimeout intentionally to show loading functionality
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
          const seriesData = programData && programData.entries.filter(program => program.programType === 'series' && program.releaseYear >= 2010)
          const selectedSeries = seriesData.slice(0,21).sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
          setSeries(selectedSeries);
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
        series && series.length > 0 ? (
          <div className={styles.seriesDashboard}>
          {
            series && series.map(seriesData => (
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

export default SeriesPage