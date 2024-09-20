// src/components/MainContent.js
import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  background-color: #1e1e1e;
  color: #d4d4d4;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const MainContent = () => {
  return (
    <ContentContainer>
      <Section id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Introduce yourself here.</p>
      </Section>
      <Section id="about">
        <h2>About Me</h2>
        <p>Share your background, skills, and interests.</p>
      </Section>
      <Section id="projects">
        <h2>Projects</h2>
        <p>Showcase your work with descriptions and links.</p>
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <p>Provide ways for people to reach out to you.</p>
      </Section>
    </ContentContainer>
  );
};

export default MainContent;
