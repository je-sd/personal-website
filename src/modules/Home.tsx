import styled from "styled-components";
import { Typography } from "@mui/material";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Projects from "./Projects";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    return(
        <StyledHome className="home">
            <MouseTrail strokeColor={"white"}/>
            <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 600" fill="rgba(112, 41, 99, .6)"><path d="M460.3 531c-106.7-3.3-217.2-12.7-315.6-56.5C88 448.7 32.7 394.4 37 327.8c3.2-36 29-64 53.5-88.3C191.8 144.2 332.1 108 465.9 86.2c164-25.2 332-22.5 495.8 2.7 15.7.9 175 34.4 136.2 49.7 73.3 30.4 139 103 86.1 181.7-32.6 46.3-85.7 73.2-135.4 97.6C963 457 870.8 479.5 779 498.6c-104.8 21.1-211.5 35-318.5 32.5Zm28.5-16.5c155.2 2.7 623.7-69.6 687.7-223.9 28.8-82.1-66-134.7-132.5-153a1727.2 1727.2 0 0 0-139-33.7c-6.6-1.8-18.7-1-17.8-10.6-216.3-22.4-493-11.6-689 89.6-56.6 31.2-163.8 103-138.7 178.2 13.4 45.7 52 79.2 94 98.8 105 45.6 222.2 53.2 335.3 54.6Z"></path></svg>

            <Header onBlog={false}/>

            <div className="header">
                <Typography variant="h4" className="bold header-name">JESd.</Typography>            
                <div className="caption">
                    <Typography className="je">Jan Etschel</Typography>
                    <Typography className="sd bold" onClick={() => window.open("https://github.com/je-sd")}>Softwaredesign</Typography>
                </div>
            </div>

            <Projects />

            <Footer />
        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    background-color: #212121;
    height: 100vh;

    position: relative;
    z-index: 1;

    background: none;

    display: grid;
    grid-template-rows: 2rem auto 10rem;
    grid-template-areas: "menu menu" "header projects" "footer footer";
    grid-gap: 0 10rem;
    align-items: center;

    overflow: hidden;

    .circle {
        position: absolute;
        width: 40rem;
        transform: translate(-13rem, -3rem);
        justify-self: center;
    }

    .header { 
        grid-area: header;
        justify-self: end;
    }

    .projects {
        grid-area: projects;
        justify-self: start;
    }

    .bold {
        font-weight: 700;
    }

    h4.header-name {
        margin-bottom: 2.5rem;
        font-size: 48px;
    }

    div.caption {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto;
        grid-gap: 2rem;


        .je {
            justify-self: end;
            font-size: 26px;
        }

        .sd {
            position: relative;
            justify-self: start;
            color: #212121;
            z-index: 1;

            font-size: 26px;
        }

        .sd::after {
            content: " ";
            position: absolute;
            z-index: -1;

            width: 16rem;
            height: 70px;

            background-color: white;
            transform: translate(-15rem, -1rem) rotate(-2deg);
            border-radius: 5px;
        }   

        .sd:hover {
            cursor: pointer;
        }
    }

`;
