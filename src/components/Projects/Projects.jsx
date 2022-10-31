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
    const [perPage,setPerPage] = useState(window.innerWidth < 1515 ? window.innerWidth < 1208 ? window.innerWidth <= 414 ? 1 : 3 : 4 : 5);
    const [key, setKey] = useState(0);
    
    window.addEventListener('resize', () => {
        console.log(window.innerWidth);  
        if(window.innerWidth < 1515) {
            setPerPage(4);
        }
        else if(window.innerWidth < 1515) {
            setPerPage(1);
        }
    });

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
        
        {Math.ceil(projects.length / perPage) < 10 && 
            <Pagination count={Math.ceil(projects.length / perPage)} handleClick={setKey} selected={key} />
        }
    </ProjectsComponent>
}

export default Projects;