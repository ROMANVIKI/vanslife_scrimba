import React, { useEffect, useState } from 'react'

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */
const Vans = () => {
  const [arr, setArr] = useState([])
  useEffect(()=> {
    
    fetch('http://localhost:8000/api/vans')
    .then(res => res.json())
    .then(data => setArr(data))
  }, [])
  const vanData = arr.map(van => 
    <div key={van.id} className="van-tile">
    <img src={van.imageUrl} />
    <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
    </div>
    <i className={`van-type ${van.type} selected`}>{van.type}</i>
</div>
  )  
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
    <div className="van-list">
        {vanData}
    </div>
</div>
  )
}

export default Vans