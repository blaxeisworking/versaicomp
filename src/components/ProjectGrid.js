import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Leisure & Themed Projects',
    description: 'Designing and building destinations that offer entertainment, recreation, and relaxation in perfect harmony.',
    img: require('../assets/images/image1.jpg'), 
  },
  {
    title: 'Hospitality Projects',
    description: 'Creating luxurious hotels with unmatched hospitality, offering unforgettable getaways.',
    img: require('../assets/images/image2.jpg'), 
  },
  {
    title: 'Museums & Pavilions',
    description: 'Crafting immersive spaces that celebrate heritage and artistry.',
    img: require('../assets/images/image3.jpg'), 
  },
  {
    title: 'Retail',
    description: 'Redefining shopping, dining, and leisure with innovative retail destinations.',
    img: require('../assets/images/image4.jpg'), 
  },
  {
    title: 'Airports',
    description: 'Elevating aviation infrastructure with precision.',
    img: require('../assets/images/image5.jpg'), 
  },
  {
    title: 'Commercial',
    description: 'Creating dynamic workspaces and mixed-use complexes.',
    img: require('../assets/images/image6.jpg'), 
  },
  {
    title: 'Residential',
    description: 'Crafting vibrant communities that redefine modern living.',
    img: require('../assets/images/image7.jpg'), 
  },
  {
    title: 'Oil, Gas & Marine',
    description: 'Delivering innovative, sustainable projects.',
    img: require('../assets/images/image8.jpg'), 
  },
];

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
