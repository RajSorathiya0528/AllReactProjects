import React, {useState, useEffect} from "react";
import { Container, Postform } from "../componentes";
import storageService from "../Appwrite/Storageconfig";
import dbService from "../Appwrite/DBconfig";
import { useNavigate, useParams } from "react-router-dom";

function Editpost () {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            dbService.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <Postform post= {post}/>
            </Container>
        </div>
    ) : null
}

export default Editpost