import React, {useEffect, useState} from "react";
import parse from 'html-react-parser';
import { request } from 'graphql-request';
import SuperSecretCredentials from "./superSecretCredentials";
import regeneratorRuntime from 'regenerator-runtime';

function GrabPost () {
    const [posts, setPosts] = useState(null);

    
    useEffect(()=>{
        let key = SuperSecretCredentials();
        const fetchPosts = async () => {
            const newPosts = await request(
                key,
                `
                {
                    posts {
                        title
                        urlSlug
                        content{html}
                    }
                }
                `
            );
            setPosts(newPosts.posts);
        };
        fetchPosts();
    }, []);

    return(
        <>
        {posts
        ? 
        <>
        <h1>{posts[0].title}</h1>
        {parse(posts[0].content.html)}
        </>
        : <h1>Loading....</h1>
        }
        </>
    )

};

export default GrabPost;