import { Typography } from "@mui/material";
import styled from "styled-components";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <LibraryBooksIcon className="blog" style={{fill: "rgba(255, 255, 255, 0.25)"}} onClick={() => navigate("/blog")}/>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    grid-area: menu;
    
    align-self: start;

    display: grid;

    .blog {
        padding: 1.25rem;

        &:hover {
            cursor: pointer;
        }
    }
`;


