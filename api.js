export async function getVans() {
    
    try{

        const accessToken = localStorage.getItem('access_token')
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
    }catch(error){
        localStorage.clear()
        console.log(error)
    }

    

}



