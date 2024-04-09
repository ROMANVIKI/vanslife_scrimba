export async function getVans() {
    
    const accessToken = localStorage.getItem('access_token')

    console.log(accessToken)
    
    const headers = {
        'Authorization' : `Bearer ${accessToken}`
    }


    const res = await fetch('http://localhost:8000/api/vans', {headers})
    if(!res.ok) {
        throw{
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
        
    }
    const data = await res.json()
    return data
}



