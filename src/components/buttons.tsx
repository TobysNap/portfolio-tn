import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Info, InfoIcon } from 'lucide-react';

export function MoreInfo({ url }: { url: string }) {
	return (
		<Button
			asChild
			variant="outline"
			className="text-gray-300 transition-opacity duration-200 bg-transparent border opacity-0 border-secondary hover:bg-secondary/80 hover:text-white group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 motion-reduce:opacity-100"
			style={{
				textShadow: 'rgba(252, 204, 0, 0.3) 1px 0 5px',
			}}
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<InfoIcon className="mr-2 size-5" />
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
			className="border-2 border-secondary text-secondary hover:bg-secondary/30 hover:border-secondary/80 rounded-none glassmorphism-dark font-bold bg-transparent"
			asChild
		>
			<a href={url} rel="noopener noreferrer">
				<Info className="mr-2 size-4" />
				Más info
			</a>
		</Button>
	);
}

export function ProjectDemo({ url }: { url: string }) {
	return (
		<Button
			size="sm"
			className="font-bold rounded-none shadow-lg bg-primary text-background hover:bg-primary/90"
			asChild
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<ExternalLink className="mr-2 size-4" />
				Demo
			</a>
		</Button>
	);
}

export function DemoButton({ url }: { url: string }) {
	return (
		<Button
			size="lg"
			className="px-6 py-3 font-semibold text-gray-900 bg-accent hover:bg-accent/90"
			asChild
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<ExternalLink className="w-4 h-4 mr-2" />
				Visitar
			</a>
		</Button>
	);
}
