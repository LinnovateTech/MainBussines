import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectStyle'
import ProjectCard from '../Cards/ProjetoCard'
import { projects } from '../../data/constants'

const Projects = ({ modalState, setModalState }) => {
    const [toggle] = useState("all");

    const filteredProjects = toggle === 'all' 
      ? projects 
      : projects.filter((item) => item.category === toggle);

    return (
        <Container id='projetos'>
            <Wrapper>
                <Title>Projetos</Title>
                <Desc>Alguns dos projetos realizados pela nossa empresa.</Desc>
                <CardContainer>
                    {filteredProjects.map((project) => (
                        <ProjectCard 
                          key={project.id}
                          project={project} 
                          setModalState={setModalState} 
                        />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;