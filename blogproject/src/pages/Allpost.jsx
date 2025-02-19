import React, {useState, useEffect} from "react";
import { Container, Postcard } from "../componentes";
import dbService from "../Appwrite/DBconfig";
import storageService from "../Appwrite/Storageconfig";

function Allpost () {
    const [posts, setPost] = useState([]);
    useEffect(() => {}, [])
    dbService.getPosts([]).then((posts) => {
        if(posts){
            setPost(posts.documents)
        }
    })
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key = {post.$id} className="p-2 w-1/4">
                            <Postcard post = {post} />
                        </div>   
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Allpost