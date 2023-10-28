import { useNavigate } from "react-router-dom"
import "./../../css/Register.css"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import axios from 'axios'

const PostId = () => {
    const navigate = useNavigate()
    let { postId } = useParams();

    const [postById, setPostById] = useState()

    const getPostById = async () => {

        console.log(postId)
        await axios.get(`http://localhost:8080/api/posts/${postId}`)
            .then((res) => { setPostById(res.data); console.log(res) })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        getPostById()
        console.log("useEffect called ......")
    }, [])

    const handleNavigationComments = () => {
        navigate(`/posts/${postId}/comments`)
    }

    return (
        <main>
            {
                postById ?
                    <div className='postsSectionContainer'>
                        <section className='votingSection'>
                            <button ><i className="fa-solid fa-arrow-up"></i></button>
                            {postById.voteCount}
                            <button><i className="fa-solid fa-arrow-down"></i></button>
                        </section>
                        <section className="post">
                            <h3> {"aakash@chopra"} </h3>
                            <h1 > {postById.postTitle} </h1>
                            <h4> {postById.postContent} </h4>
                            <img src={postById.postUrl} alt="Reddit Logo">
                            </img>

                            <div className="postButtons">
                                <button onClick={() => { handleNavigationComments(postById.id) }}>Comments</button>
                                <button>Save</button>
                            </div>
                        </section>
                    </div> : <h1> Loading... </h1>
            }
        </main>
    )
}

export default PostId