import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface BlogPostPreviewProps {
    id: number,
    copyright: string,
    heading: string,
    content: string,
}

const BlogPostPreview = ({id, heading, copyright, content} : BlogPostPreviewProps) => {
    const navigate = useNavigate();

    return (
        <StyledBlogPostPreview onClick={() => navigate(`/blog/${id}`)}>
            <Typography variant="h6" className="heading">{heading}</Typography>
            <Typography variant="caption" className="caption">{copyright}</Typography>
            <Typography>{content}</Typography>
        </StyledBlogPostPreview>
    );
};

export default BlogPostPreview;

const StyledBlogPostPreview = styled.div`
    h6.heading {
        font-weight: 700;
        transition: color .1s ease-in;
    }

    .caption {
        color: rgba(255, 255, 255, .2);
        margin-top: -2rem;
    }
        
    h6, p, span, .caption {
        justify-self: center !important;
    }

    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    grid-gap: 2rem;

    padding: 2rem;

    max-width: 30rem;

    border: 1px solid #212121;
    border-radius: 2rem;

    &:hover {
        cursor: pointer;

        h6 {
            text-decoration: underline;
            color: #702963;
        }
    }

`