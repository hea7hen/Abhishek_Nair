
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
  index: number;
  createdAt: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  className,
  index,
  createdAt
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group border border-gray-200 hover:border-gray-400 transition-all duration-300",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-xs text-gray-500">{createdAt}</span>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 border border-gray-200 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-6">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-black transition-colors text-sm uppercase tracking-wider"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-black transition-colors text-sm uppercase tracking-wider"
            >
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
