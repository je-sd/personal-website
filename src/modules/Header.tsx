import { Typography } from "@mui/material";
import styled from "styled-components";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

import { useNavigate } from "react-router-dom";

interface HeaderProps {
    onBlog: boolean,
    onBlogPost: boolean,
}

const Header = ({ onBlog, onBlogPost } : HeaderProps) => {
    const navigate = useNavigate();

    return (
        <StyledHeader className="header-component">
            {
                !onBlog ? 
                    <LibraryBooksIcon className="blog" style={{fill: "rgba(255, 255, 255, 0.25)"}} onClick={() => navigate("/blog")}/>
                :
                    <ReplyAllIcon className="blog" style={{fill: "rgba(255, 255, 255, 0.25)"}} onClick={() => onBlogPost ? navigate("/blog") : navigate("/sd")}/>
            }
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    grid-area: menu;
    z-index: 1;
    
    align-self: start;

    display: grid;

    .blog {
        padding: 1.25rem;

        &:hover {
            cursor: pointer;
        }
    }
`;


