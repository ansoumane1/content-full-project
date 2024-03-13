import { useFetchProjects } from "./fetchProject";

function Projects() {
  const { loading, projects } = useFetchProjects();
  console.log(projects);
  return (
    <section className="projects">
      <div className="title">Projects</div>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              alt={title}
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
