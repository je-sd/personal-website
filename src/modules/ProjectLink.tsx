import { Link, Typography } from "@mui/material";
import styled from "styled-components";

interface ProjectLinkProps {
    name: string,
    link: string,
}

const ProjectLink = ({name, link} : ProjectLinkProps) => {
    return (
        <Link 
            className="link" 
            underline="none" 
            style={{ cursor: 'pointer' }}

            rel="noopener"
            target="_blank"

            href={link}
        >
            <Typography className="name">{name}</Typography>
        </Link>
    );
};

export default ProjectLink;
