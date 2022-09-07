import Modal from './modal.js';

const Project = ({
  projectName,
  projectDescription,
  projectImage,
  projectURL,
  title,
  body,
}) => (
  <div className="project">
    <h3 className="project-header">{projectName}</h3>
    <p className="project-body">{projectDescription}</p>
    <img alt="project" className="project-image" src={projectImage} />
    <a target="_blank" rel="noopener noreferrer" href={projectURL}>
      <button className="demo-button btn btn-primary">View Demo</button>
    </a>
    <Modal className="modal-overview" title={title} body={body} />
  </div>
);

export default Project;
