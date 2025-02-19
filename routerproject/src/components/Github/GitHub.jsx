import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'


function Github() {
    const data = useLoaderData()
    //const [data,setData] = useState([])
    //useEffect(() => {
    //  fetch('https://api.github.com/users/RajSorathiya0528')
    //  .then(response => response.json())
    //  .then(data => {
    //      setData(data)
    //  } )
    //},[])
    return(
        <>
            <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
                Github followers: {data.followers}
                <div className='text-left m-4 bg-gray-100 text-black p-4 text-xl'>
                    Username : {data.login}
                    <img src={data.avatar_url} height='200px' width='200px'/>
                </div>
            </div>
        </>
    )
}

export default Github

export const githubinfoloder = async () => {
    const response = await fetch('https://api.github.com/users/RajSorathiya0528')
    return response.json()
}
