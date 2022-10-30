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
    
    const [key, setKey] = useState(0);
    
    let new_projects = projects.slice(key*5,(key*5)+5);
    return <ProjectsComponent>
        
        <Title>Projects</Title>
        
        <ProjectsContent>
            {new_projects.map(project => <ProjectsItem key={Math.random()}>
                <ProjectsImg src={project.image} alt={projects.image} />
                <ProjectsTitle>
                    {project.title}
                </ProjectsTitle>
                <ProjectsLink href={project.link} target="_blank">
                    See More
                </ProjectsLink>
            </ProjectsItem>)}
        </ProjectsContent>
        <Pagination count={Math.ceil(projects.length / 5)} handleClick={setKey} selected={key}></Pagination>
    </ProjectsComponent>
}

export default Projects;