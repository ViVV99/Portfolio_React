import React from 'react';
import ProjectCard from '../ProjectCard';

import './index.scss';

function Home() {
  return (
    <>
      <div id="main-home">
        <section className="main-title-box">
          <h1>
            I'm Vitor Villa Verde and hello! I am a self-taught web developer,
            and right now, a college student, and I've worked in many projects
            in the last years. If you need someone to make a good looking
            website, you've come to the right place!
          </h1>

          <h2>Take a look at the projects I'd participate: </h2>
        </section>

        <section id="projects">
          <ProjectCard title="Lorem ipsum"></ProjectCard>
          <ProjectCard
            title="Lorem ipsum, dolor sit amet consectetur."
            projectDescription="Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. 
            In ipsa natus rerum deserunt ut voluptatibus
            quod facilis ducimus qui aliquid distinctio explicabo,
            quas dicta."
          ></ProjectCard>
          <ProjectCard title="Lorem ipsum, dolor sit amet consectetur."></ProjectCard>
          <ProjectCard title="Lorem ipsum, dolor sit amet consectetur."></ProjectCard>
          <ProjectCard title="Lorem ipsum, dolor sit amet consectetur."></ProjectCard>
        </section>
      </div>
    </>
  );
}

export default Home;
