import React, { useEffect } from 'react'
import { fetchPhoto, fetchVideo, fetchGIF } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../Redux/Features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/store'


const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} =  useSelector((store)=> store.search)

    useEffect(function(){
        const getData = async() => {
        let data;
        if(activeTab == 'photos'){
            let response = await fetchPhoto(query)
            data = response.results
        }
        if(activeTab == 'videos'){
            let response = await fetchVideo(query)
            data = response.videos
        }
        if(activeTab == 'gif'){
            let response = await fetchGIF(query)
            data = response.data
        }
        console.log(data)
    }
        getData()
    },[query, activeTab,])
    
  return (
    <div>
        {/* <button onClick={getData}>Get Data</button> */}
    </div>
  )
}

export default ResultGrid