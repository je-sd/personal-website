import { Typography } from "@mui/material";
import styled from "styled-components";
import Header from "../Header";

const Blog = () => {
    return (
        <StyledBlog>
            <Header />
        </StyledBlog>
    );
};

export default Blog;

const StyledBlog = styled.div`
    display: grid;

    position: relative;
    z-index: 1;

    grid-template-rows: 2rem auto;
    grid-template-areas: "menu" ".";
`