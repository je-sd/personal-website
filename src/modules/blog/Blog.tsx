import { Typography } from "@mui/material";
import styled from "styled-components";
import Header from "../Header";
import BlogPostPreview from "./BlogPostPreview";

const Blog = () => {
    return (
        <StyledBlog>
            <Header onBlog onBlogPost={false}/>

            <div className="blog-wrapper">
                <Typography variant="h4" className="blog">blog</Typography>
                <Typography className="colorful" variant="h4">.</Typography>

                <div className="previews">
                    <BlogPostPreview id={1}/>
                    <BlogPostPreview id={2}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={3}/>
                    <BlogPostPreview id={4}/>
                </div>
            </div>
        </StyledBlog>
    );
};

export default Blog;

const StyledBlog = styled.div`
    display: grid;

    position: relative;
    z-index: 1;

    margin-bottom: 5rem;

    grid-template-rows: 4rem auto;
    grid-template-areas: "menu" "blog-wrapper";

    div.blog-wrapper {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto;

        grid-template-areas: "blog-header point" "prev prev";

        grid-area: blog-wrapper;
        grid-gap: 5rem 0;
    }

    h4 {
        font-weight: 700
    }

    h4.blog {
        justify-self: end;
    }

    h4.colorful {
        justify-self: start;
    }

    div.previews {
        grid-area: prev;

        display: grid;
        grid-template-columns: auto auto;
        padding: 0 4rem;
        grid-gap: 5rem 10rem;
        
        :nth-of-type(even) {
            justify-self: start;
        }

        :nth-of-type(odd) {
            justify-self: end;
        }
    }
`