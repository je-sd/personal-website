import { Typography } from "@mui/material";
import styled from "styled-components";
import Header from "../Header";
import { useParams } from "react-router-dom";
import Markdown from 'react-markdown'

const BlogPost = () => {
    const params = useParams();
    const markdown = '# Hi, *Pluto!*\n ## Placeholder'

    return (
        <StyledBlogPost>
            <Header onBlog onBlogPost/>
            <div className="content">
                <Typography variant="h4">How to use Node.JS to bundle webserver</Typography>
                <Typography variant="caption" className="credits">from jan etschel published 2320-23-23</Typography>
                <Markdown className="blogpost-content">{markdown}</Markdown>
            </div>
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

    display: grid;
    grid-template-rows: 4rem auto;
    grid-template-areas: "menu" "content";
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