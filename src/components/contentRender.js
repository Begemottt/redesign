import React, {useEffect, useState} from "react";
import anime from "animejs";
import parse from 'html-react-parser';
import { request } from 'graphql-request';
import { public_key } from "./superSecretCredentials";
import regeneratorRuntime from 'regenerator-runtime';


function ContentRender (data) {
    const [content, setContent] = useState(null);
    
    useEffect(()=>{
        let key = public_key;
        const fetchContent = async () => {
            const newContent = await request(
                key,
                `
                {
                    posts(where: {urlSlug: "`+ data.url_slug +`"}) {
                      title
                      urlSlug
                      author
                      updatedAt
                      page
                      category
                      content {
                        html
                      }
                    }
                  }
                `
            );
            setContent(newContent.posts);
        };
        fetchContent();
    }, []);

    return(
        <>
        {content != null &&
        <article className='content' id={data.url_slug}>
            <section className="header">
                <div className='header_background'></div>
                <div className='title_container'>
                    <h1>{content[0].title}</h1>
                </div>
                <div className='byline_container'>
                    <span className="small">By {content[0].author} - Posted {content[0].updatedAt.slice(0, 10)}</span>
                </div>
            </section>
            <section className='body'>
                {parse(content[0].content.html)}
            </section>
        </article>
        }
        </>
        
    )
}

export default ContentRender;