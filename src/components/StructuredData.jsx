// components/StructuredData.js
import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shekh Faisal",
    "jobTitle": "Web Developer Intern",
    "worksFor": {
      "@type": "Organization",
      "name": "SkillCraft Technology"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SVGU College"
    },
    "url": "https://shekh-portfolio.netlify.app",
    "sameAs": [
      "https://github.com/shekhfaisal2110",
      "https://www.linkedin.com/in/mohammad-faisal-shekh"
    ],
    "knowsAbout": [
      "React.js",
      "JavaScript",
      "Frontend Development",
      "Web Development"
    ],
    "description": "BCA third-year student and Web Developer Intern specializing in frontend web applications using React.js, and modern web technologies."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
