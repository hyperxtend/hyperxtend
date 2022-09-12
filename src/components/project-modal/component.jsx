import Modal from './modal.js';
import './component.css';
import { Button } from 'react-bootstrap';
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
    <img alt="project" className="project-image " src={projectImage} />
    <div className="modal-button-container">
      <a target="_blank" rel="noopener noreferrer" href={projectURL}>
        <Button className="demo-button" variant="outline-dark">
          View Demo
        </Button>
      </a>
      <Modal className="modal-overview" title={title} body={body} />
    </div>
  </div>
);

export default Project;
