import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Vans from './Vans'

const HostVans = () => {
    const [van, setVan] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/api/vans')
        .then(res => res.json())
        .then(data => setVan(data))
    }, [])

    const hostVansEls = van.map(van => (
        <Link 
            className='host-van-link-wrapper'
            to={`/host/van/${van.id}`}
            key={van.id}
        >
        <div className='host-van-single' key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className='host-van-info'>
                <h3>{van.name}</h3>
                <p>${van.price}</p>
            </div>
        </div>

        </Link>
    ))
  return (
    <section>
        <h1 className='host-vans-title'>Your listed vans</h1>
        <div className='host-vans-list'>
            {
                van.length > 0 ? (
                    <section>
                        {hostVansEls}
                    </section>
                ):
                (
                    <h2>Loading....</h2>
                )
            }
        </div>
    </section>
  )
}

export default HostVans