const ProjectCard = ({ project }) => (
  <div className="group relative border-l border-white/5 pl-8 py-12 transition-all hover:border-blue-500/50">
    {/* Large Background Number */}
    <span className="absolute -left-4 top-10 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">
      {project.id}
    </span>

    <div className="relative z-10">
      <p className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] mb-2">
        {project.type}
      </p>
      <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 max-w-md font-light leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-[9px] font-mono border border-white/10 text-gray-500 uppercase">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);
export default ProjectCard;