import { Typography } from "@mui/material";
import styled from "styled-components";

import SupabaseLogo from "../images/supabase-logo.svg";

const BlogEntryFooter = () => {
    return (
        <StyledBlogEntryFooter>
            <div 
                className="supabase-wrapper"
                onClick={() => window.open("https://supabase.com")}
            >
                <Typography variant="caption">Made with</Typography>
                <div className="supabase-logo" />
            </div>
        </StyledBlogEntryFooter>
    );
};

export default BlogEntryFooter;

const StyledBlogEntryFooter = styled.div`
    grid-area: footer;

    background-color: r;
    margin: 10rem 0 2rem 0;

    display: grid;

    div.supabase-wrapper {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto;

        align-items: center;

        span {
            justify-self: end;
            font-size: 13px;
        }

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }

        grid-gap: .75rem;
        
        div.supabase-logo {
            background-image: url(${SupabaseLogo});
            background-size: contain;
            background-repeat: no-repeat;

            width: 25px;
            height: 20px;

            justify-self: start;
        }
    }
    
`