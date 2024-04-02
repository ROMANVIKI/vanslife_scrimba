import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [arr, setArr] = useState([])
  useEffect(()=> {
    
    fetch('http://localhost:8000/api/vans')
    .then(res => res.json())
    .then(data => setArr(data))
  }, [])
  const vanData = arr.map(van => 
    <div key={van.id} className="van-tile">
      <Link to={`/van/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
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