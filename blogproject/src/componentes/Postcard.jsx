import React from 'react'
import dbService from '../Appwrite/DBconfig'
import storageService from '../Appwrite/Storageconfig'
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
    return (
        <Link to = {`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4 '>
                    <img src={storageService.getFilePreview(featuredImage)} alt={title} className='rounded-xl ' />
                </div>
                <h2 className='text-xl font-bold text-gray'>{title}</h2>
            </div>
        </Link>
    )
}

export default Postcard