import { Typography } from "@mui/material";
import styled from "styled-components";
import ProjectLink from "./ProjectLink";

const Projects = () => {
    return (
        <StyledProjects className="projects">
            <Typography className="colorful projects-header" variant="h5">
                projects.
            </Typography>

            <ProjectLink name="ansbach-grizzlies.com" link="https://ansbach-grizzlies.com/home" />
            <ProjectLink name="Brainfck visualizer" link="https://brainfuck-visualizer-six.vercel.app" />
            <ProjectLink name="Code pasting" link="https://paste-janetschel-com-5i56le9ja.vercel.app/" />
            <ProjectLink name="Bring API" link="https://github.com/janetschel/bring-api-java" />
            <ProjectLink name="Gasthaus Haaghof" link="https://gasthaus-haaghof.de/home" />
            <ProjectLink name="(my personal GitHub)" link="https://github.com/janetschel" />

            <Typography variant="caption" className="more">and more non-public ones</Typography>
        </StyledProjects>
    );
};

export default Projects;

const StyledProjects = styled.div`
    display: grid;
    grid-template-rows: 3rem repeat(6, auto);

    h5.projects-header {
        font-weight: 700;
    }

    margin-top: 5rem;

    .more {
        margin-top: 2rem;
        color: rgba(255, 255, 255, .2)
    }
`;