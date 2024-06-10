import styled from "styled-components";
import Header from "./Header";
import { Typography } from "@mui/material";

const Home = () => {
    return(
        <StyledHome>
            <Header />
            <Typography variant="caption">
                Bei Fragen, Interessere oder Einholung von Angeboten kontaktieren Sie bitte <strong>mail@janetschel.com</strong>
            </Typography>

            <Typography style={{ marginTop: "10rem" }}>github.com/je-sd</Typography>
            <Typography>github.com/janetschel</Typography>

            <Typography variant="h5" style={{ marginTop: "5rem", marginBottom: "1rem" }}>Projekte</Typography>
            <a 
                target='_blank'
                rel='noopener noreferrer' 
                href="https://www.ansbach-grizzlies.com"
            >
                ansbach-grizzlies.com
            </a> 
            
            <br />
            <br />
            
            <Typography variant="caption">...uvm interne Projekte</Typography>

        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    background-color: #e2f3f9;
    height: 100vh;
`;
