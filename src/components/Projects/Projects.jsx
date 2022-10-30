import {useState } from 'react';

import Title from 'components/Title/Title';
import Pagination from 'components/Pagination/Pagination';

import { 
    ProjectsComponent, 
    ProjectsContent,
    ProjectsItem, 
    ProjectsImg,
    ProjectsLink, 
    ProjectsTitle,
} from './Projects.styled';

import projects from './projects-list';


const Projects = props => {
    const perPage = 5;
    const [key, setKey] = useState(0);
    
    return <ProjectsComponent>
        
        <Title>Projects</Title>
        
        <ProjectsContent>
            {projects.slice(key*perPage,(key*perPage)+perPage).map(project => <ProjectsItem key={Math.random()}>
                <ProjectsImg src={project.image} alt={projects.image} />
                <ProjectsTitle>
                    {project.title}
                </ProjectsTitle>
                <ProjectsLink href={project.link} target="_blank">
                    See More
                </ProjectsLink>
            </ProjectsItem>)}
        </ProjectsContent>
        <Pagination count={Math.ceil(projects.length / perPage)} handleClick={setKey} selected={key}></Pagination>
    </ProjectsComponent>
}

export default Projects;