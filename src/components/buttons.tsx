import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Info, InfoIcon } from 'lucide-react';

export function MoreInfo({ url }: { url: string }) {
	return (
		<Button
			asChild
			variant="outline"
			className="transition-opacity duration-200 border border-secondary hover:bg-secondary/80 text-gray-300 hover:text-white opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 motion-reduce:opacity-100 bg-transparent"
			style={{
				textShadow: 'rgba(252, 204, 0, 0.3) 1px 0 5px',
			}}
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<InfoIcon className="size-5 mr-2" />
				<span className="sr-only">Más info</span>
				Detalles
			</a>
		</Button>
	);
}

export function ProjectInfo({ url }: { url: string }) {
	return (
		<Button
			size="sm"
			variant="outline"
			className="bg-primary-900/90 border-primary-900/90 text-white hover:bg-accent hover:text-primary-950 shadow-lg"
			asChild
		>
			<a href={url} rel="noopener noreferrer">
				<Info className="size-4 mr-2" />
				Más info
			</a>
		</Button>
	);
}

export function ProjectDemo({ url }: { url: string }) {
	return (
		<Button
      size="sm"
      variant="outline"
			className="bg-primary-900/90 border-primary-900/90 border text-white hover:bg-accent hover:text-primary-950 shadow-lg"
			asChild
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<ExternalLink className="size-4 mr-2" />
				Demo
			</a>
		</Button>
	);
}

export function DemoButton({ url }: { url: string }) {
  return (
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-gray-900 font-semibold px-6 py-3"
      asChild
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-4 w-4 mr-2" />
        Ver sitio en vivo
      </a>
    </Button>)
}
