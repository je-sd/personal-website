import styled from "styled-components";
import JESd_logo from "../images/logo_wide.png";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <Logo />
                
            </StyledHeader>
            <Marquee style={{ 
                    backgroundColor: "#2e2e2e",
                    height: "1.5rem",
                    color: "white",
                    padding: "5px",
            }}>
                Jan Etschel Softwaredesign -- 
                JESd -- 
                Ihr Ansprechpartner rund um IT-Lösungen aller Art -- 
                Konzeption, Entwicklung und Betreeung von Softwareprojekten, Websiten, Apps, Spielen, oder welche Idee Sie sonst auch immer haben sollten -- 
                Kontakt unter mail@janetschel.com oder auf GitHub unter /je-sd -- 
            </Marquee>
        </>
    );
};

export default Header;

const StyledHeader = styled.div`
    width: 100vw;
    height: 10rem;
    background-color: #e2f3f9;
    color: red;

    display: grid;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    background-image: url(${JESd_logo});
    background-size: contain;
    background-repeat: no-repeat;

    height: 100%;
    width: 25rem;
`;
