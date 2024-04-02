import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VanDetails = () => {
  const {id} = useParams()
  const [van, setVan] = useState(null)
  
  useEffect(()=> {
    fetch(`http://localhost:8000/api/van/${id}`)
    .then(res => res.json())
    .then(data => setVan(data))
  }, [id])
  console.log(van)
  return (
    <div className='van-detail-container'>
        {van ? (
            <div className='van-detail'>
                <img src={van.imageUrl} alt="" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className='link-button'>Rent this van</button>
            </div>
        ): <h2>Loadind...</h2> }
    </div>
  )
}

export default VanDetails