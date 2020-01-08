import React from 'react';

import '../styles/components/skill.scss';

const SkillChart = () => {
  return (
    <div id="skills">
      <ul id="skills-list">
        <li><p>HTML - 90%</p><span className="bar"><span className="html"></span></span></li>
        <li><p>CSS - 70%</p><span className="bar"><span className="css"></span></span></li>
        <li><p>JAVASCRIPT - 90%</p><span className="bar"><span className="javascript"></span></span></li>
        <li><p>REACT - 80%</p><span className="bar"><span className="react"></span></span></li>
        <li><p>REDUX - 50%</p><span className="bar"><span className="redux"></span></span></li>
        <li><p>RUBY ON RAILS - 90%</p><span className="bar"><span className="ruby"></span></span></li>
        <li><p>C# ASP.NET - 90%</p><span className="bar"><span className="aspdotnet"></span></span></li>
        <li><p>JQUERY - 80%</p><span className="bar"><span className="jquery"></span></span></li>
        <li><p>NODEJS - 50%</p><span className="bar"><span className="nodejs"></span></span></li>
        <li><p>GRAPHQL - 60%</p><span className="bar"><span className="graphql"></span></span></li>
      </ul>
    </div>
  );
};
// html, css, js, react, redux, ruby, rails, jquery, sql, nosql, nodejs, graphql
export default SkillChart;