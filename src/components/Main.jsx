
import postData from './../data/demoPost.json'
import { useState, useEffect } from "react"
import axios from 'axios'

import './../css/Main.css'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate()

    const [postInfo, setPostInfo] = useState([])
    const [responsePost, setResponsePosts] = useState([])
    
    
    useEffect(() => setPostInfo(postData), [])


    useEffect(() => {
        axios.get("http://localhost:8080/api/posts").then((res) => {
            console.log(res)
            setResponsePosts(res.data)
        }).catch((err) => console.log(err))
    }, [])

    const handleNavigationPostId = (postId) => {
        navigate(`/posts/${postId}`)
    }

    return (
        <main>
            <div className="CreatePostSection">
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <input placeholder="Create Post" onClick={()=> navigate("/submit") } />
                <div className='createPostOptions'>
                    <a><i className="fa-solid fa-image"></i></a>
                    <a><i className="fa-solid fa-link"></i></a>
                </div>
            </div>

            <section>
                <div className="PostsSection">
                {
                        responsePost.map((post, key) => {
                            return (
                                <div key={key} className='postsSectionContainer'>
                                    <section className='votingSection'>
                                        <button ><i className="fa-solid fa-arrow-up"></i></button>
                                        {post.voteCount}
                                        <button><i className="fa-solid fa-arrow-down"></i></button>
                                    </section>
                                    <section className="post">
                                        <h3> {"aakash@chopra"} </h3>
                                        <h1 > {post.postTitle} </h1>
                                        <h4> {post.postContent} </h4>
                                        <img src={post.postUrl } alt="Reddit Logo">
                                        </img>

                                        <div className="postButtons">
                                            <button onClick={()=>{handleNavigationPostId(post.id)}}>Comments</button>
                                            <button>Save</button>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                    }
                    {/* {
                        postInfo.map((post, key) => {
                            return (
                                <div key={key} className='postsSectionContainer'>
                                    <section className='votingSection'>
                                        <button ><i className="fa-solid fa-arrow-up"></i></button>
                                        {post.votes}
                                        <button><i className="fa-solid fa-arrow-down"></i></button>
                                    </section>
                                    <section className="post">
                                        <h3> {post.username} </h3>
                                        <h1 > {post.title} </h1>
                                        <h4> {post.excerpt} </h4>
                                        <img src={post.imageLink} alt="Reddit Logo">
                                        </img>

                                        <div className="postButtons">
                                            <button>Comments</button>
                                            <button>Save</button>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                    } */}
                </div>
            </section>



        </main>
    )
}

export default Main