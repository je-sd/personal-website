import { Link, Typography } from "@mui/material";
import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <Typography variant="caption" className="imprint">Jan Etschel Softwaredesign (JESd), Richard-Wagner-Str. 69, 91522 Ansbach</Typography>
            <Typography variant="caption" className="contact">Contact:</Typography>
            <Link variant="caption" className="mail" underline="none" style={{ color: "#702963"}} href="mailto:mail@janetschel.com">mail@janetschel.com</Link>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.div`
    grid-area: footer;
    align-self: end;

    background-color: #212121;
    padding: 1rem;

    .imprint, .contact {
        color: rgba(255, 255, 255, .2)
    }

    display: grid;
    grid-template-rows: auto auto;
    grid-temaplte-columns: auto auto;
    grid-template-areas: "address address" "contact mail";

    grid-gap: 0 .25rem;

    .imprint {
        grid-area: address;
        justify-self: center;
    }

    .contact {
        grid-area: contact;
        justify-self: end;
    }

    .mail {
        grid-area: mail;
        justify-self: start;
    }

    background: none;
`