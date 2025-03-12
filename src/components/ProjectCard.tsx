
import { useState, useRef } from 'react';
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
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  className,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500",
        `animate-slide-up animation-delay-${(index % 5) * 100}`,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex space-x-3">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Preview
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors text-sm"
            >
              <Github className="h-4 w-4 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
      
      {/* Hover effect gradient overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-slate-500/5 to-transparent opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
