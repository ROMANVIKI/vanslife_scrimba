import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'


const VanDetails = () => {
  const {id} = useParams()
  const [van, setVan] = useState(null)
  
  const location = useLocation()

  const search = location.state?.search || ""


  useEffect(()=> {
    fetch(`http://localhost:8000/api/van/${id}`)
    .then(res => res.json())
    .then(data => setVan(data))
  }, [id])
  
  //van type came from the van.jsx by passing the state with the current typefilter
  
  const currentVanType = location.state ? location.state.type : ''


  return (
    <div className='van-detail-container'>
                  <Link
                to={`/vans/?${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>{currentVanType ? `Back to ${currentVanType} vans`: "Back to all vans"}</span></Link>
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