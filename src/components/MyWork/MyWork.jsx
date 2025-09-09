import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      {/* Title */}
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Projects */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-card" key={index}>
            <img src={work.w_img} alt={work.w_name} />
            <h2>{work.w_name}</h2>
            <p>{work.description}</p>

            {/* Technologies */}
            <div className="mywork-tech">
              {work.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            {/* Live Project Link */}
            {work.link && (
              <a 
                href={work.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mywork-link"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork
