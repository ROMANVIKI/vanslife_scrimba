import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const HostVanDetail = () => {
  const {id} = useParams()
  const [van, setVan] = useState([])

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  
  useEffect(() => {
    fetch(`http://localhost:8000/api/van/${id}`)
    .then(res => res.json())
    .then(data => setVan(data))
  }, [])
  return (
    <section>
      <Link
          to="../vans"
          className="back-button"
            >&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail-layout-container">
        <div className='host-van-detail'>
          <img src={van.imageUrl}  />
          <div className='host-van-detail-info-text'>
            <i>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}</h4>
          </div>
        </div>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to=".">details</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to="pricing">pricing</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} to="photos">photos</NavLink>
      </nav>
                

      <Outlet context={{van}}/>
    </section>
  )
}

export default HostVanDetail