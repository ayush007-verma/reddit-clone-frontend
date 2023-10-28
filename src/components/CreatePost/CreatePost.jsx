import { useNavigate } from "react-router-dom"
import "./../../css/Register.css"
import { useState  } from "react"

import axios from 'axios'

const CreatePost = () => {
    const navigate = useNavigate()
    const [createPost, setCreatePost] = useState({})

    const [postTitle , setPostTitle] = useState("")
    const [postContent , setPostContent] = useState("")
    const [postUrl , setPostUrl] = useState("")


    const getRequestServer = async (e) => {
        e.preventDefault()

        createPost.postTitle = postTitle
        createPost.postContent = postContent
        createPost.postUrl = postUrl
        createPost.subredditId = 1;
        createPost.isDraft = true

        console.log("post request to create post ",createPost)

        console.log("***********************")

        await  axios.post("http://localhost:8080/api/create", createPost).then((res)=>console.log(res))
            .catch((err)=>console.log(err))

        navigate("/")

    }

    return (
        <main> 
            <form>
                <div className="headings">
                    <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                    </img>
                    <h2> &nbsp; Create Reddit Post </h2>
                </div>

                <input type="text" name="postTitle" onChange={(e)=>setPostTitle(e.target.value)} placeholder="Post Title..." />
                <input type="text" name="postContent" onChange={(e)=>setPostContent(e.target.value)}  placeholder="Post Content" />
                <input type="url" name="imageUrl" onChange={(e)=>setPostUrl(e.target.value)}  placeholder="Post URL..." />

                <button type="submit" onClick={(e) => getRequestServer(e)}> Register..</button>
            </form>
        </main>
    )
}

export default CreatePost