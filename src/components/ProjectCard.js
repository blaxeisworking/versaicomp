import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css';

function ProjectCard({ title, description, img }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? 'animate-slide-up' : ''}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"  
        className="project-image"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View All Our Projects</button>
    </div>
  );
}

export default ProjectCard;
