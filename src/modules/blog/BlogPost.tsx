import { LinearProgress, Typography } from "@mui/material";
import styled from "styled-components";
import Header from "../Header";
import { useParams } from "react-router-dom";
import Markdown from 'react-markdown'
import { useEffect, useState } from "react";
import { BlogPostModel } from "../../api/model/BlogPostModel";
import { Supabase } from "../../api/supabase";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MarkdownRenderer } from "../utils/MarkdownRenderer";

const BlogPost = () => {
    const params = useParams();
    const [blogPost, setBlogpost] = useState<BlogPostModel>();

    useEffect(() => {
        if (blogPost) {
            return;
        }

        const id = +(params.id || 0);
        Supabase.fetchSingleBlogPost(id).then(result => setBlogpost(result));
    }, []);

    return (
        <StyledBlogPost>
            <Header onBlog onBlogPost/>
            
            {
                !blogPost ? <LinearProgress sx={{backgroundColor: '#702963',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#9f388c'
                    }
                }} /> :
                <div className="content">
                    <Typography variant="h4">{blogPost.heading}</Typography>
                    <Typography variant="caption" className="credits">{blogPost.getCopyright()}</Typography>
                    <div className="blogpost-content">
                    <MarkdownRenderer>
                        {blogPost.getContent()}
                    </MarkdownRenderer>
                    </div>
                </div>

            }
        </StyledBlogPost>
    );
};

export default BlogPost;

const StyledBlogPost = styled.div`
    position: relative;
    z-index: 1;

    margin-bottom: 5rem;

    h4 {
        font-weight: 700;
        grid-area: heading;
    }

    .header-component {
        margin-top: -2.1rem;
    }

    display: grid;
    grid-template-rows: .1rem 3rem auto;
    grid-template-areas: "." "menu" "content";
    grid-gap: 2rem;

    div.content {
        padding: 0 2rem;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas: "header" "caption" "blogpost-content";

        grid-area: content;

        h4 {
            margin-bottom: 1rem;
            grid-area: header;

            text-decoration: underline;
            text-decoration-color: #702963;
            text-underline-offset: .5rem;
        }

        .credits {
            margin-bottom: 5rem;
            color: rgba(255, 255, 255, .2)
        }
    
        .blogpost-content {
            grid-area: blogpost-content;

            text-align: start;
            width: 48rem;
            justify-self: center;
        }
    }
`