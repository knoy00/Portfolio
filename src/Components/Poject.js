import React from "react";
import projectsData from "./ProjectsData.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";


import './Project.css';

function ProjectCard({id, title, description, image, icon, link, github}){
    const navigate = useNavigate();

    const handleClick = ( id, title, description, image, icon, link, github) => {
        navigate('/Features', {state: {id, title, description, image, icon, link, github}});
    }
    return(
        <div className="card">
            <div className="project-img">
                <img src={image} alt="Placeholder" />
                
            </div>

            <div className="links">
                <a href={github} target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                <div className="live">
                    <a href={link} target="_blank">Live Demo</a>
                </div>
            </div>
            

            <div className="project-title">
                <h1>{title}</h1>
            </div>

            <div className="project-description">
                <p>{description}</p>
            </div>

            <Link to='/Features'>
                <div className="features">
                    <button>Project Features</button>
                </div>
            </Link>

           
        </div>
    )
}

function Project(){
    const data = projectsData || [];
  const projects = data.map((items, index) => {
    return(
        <ProjectCard
            key={items.id || index} 
            id={items.id} 
            title={items.title}
            description={items.description}
            image={items.image}
            icon={items.icon}
            link = {items.link}
            github = {items.github}
        />
    );
  });

    return(
        <div className="project" id="Project">
            <div className="project-header">
                <h1>Projects</h1>
            </div>

            <div className="project-grid">
                {projects}
            </div>
            
        </div>
    );
};

export default Project;