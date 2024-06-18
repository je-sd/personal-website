import { Typography } from "@mui/material";
import styled from "styled-components";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


const Header = () => {
    return (
        <StyledHeader>
            <LibraryBooksIcon className="blog"/>
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


