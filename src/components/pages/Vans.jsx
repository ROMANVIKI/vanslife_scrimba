import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import {getVans} from '../../../api'

const Vans = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [arr, setArr] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(()=> {
    async function loadVans(){
      setLoading(true)
      try {

        const data = await getVans()
        setArr(data)
      }catch(error) {
        setError(error.message)
      }
      setLoading(false)
    }
    loadVans()

  }, [])

  const typeFilter = searchParams.get('type')
  
  // to filter the vanData
  const filteredVanData = typeFilter ? arr.filter(char => char.type.toLowerCase() === typeFilter) : arr

  const vanData = filteredVanData.map(van => 
    <div key={van.id} className="van-tile">
      <Link to={`/van/${van.id}`} state={{search : `${searchParams.toString()}`, type: typeFilter}}>
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  )  


  // function genNewSearchParamString(key, value) {
  //   const sp = new URLSearchParams(searchParams)
  //   if (value === null) {
  //     sp.delete(key)
  //   } else {
  //     sp.set(key, value)
  //   }
  //   return `?${sp.toString()}`
  // }
  
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }
  if(loading){
    return <h1>Loading...</h1>
  }
  if (error){
    return <h1>There was an error: {error}</h1>
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        {/* two ways to do the same thing 2nd one is most oftenly used  */}
        {/* <Link className='van-type luxury' to="?type=luxury">luxury</Link>
        <Link className='van-type rugged' to="?type=rugged">rugged</Link>
        <Link className='van-type simple' to="?type=simple">simple</Link> */}

        {/* <button  className='van-type  luxury' onClick={() => setSearchParams({type:'luxury'})} >luxury</button>
        <button  className='van-type  rugged' onClick={() => setSearchParams({type: 'rugged'})}>rugged</button>
        <button  className='van-type  simple' onClick={() => setSearchParams({type: 'simple'})}>simple</button>
        <button  className='van-type' onClick={() => setSearchParams({})}>clear</button>
         */}
      
        {/* <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div> */}
      <div>
        <button className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>
        <button className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}  onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
        <button className={`van-type  luxury ${typeFilter === 'luxury' ? 'selected' : ''}`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
        {typeFilter ? <button onClick={() => handleFilterChange("type", null)}>Clear</button> : null}
      </div>


      </div>


      <div className="van-list">
        {vanData}
      </div>
      
    </div>
  )
}

export default Vans