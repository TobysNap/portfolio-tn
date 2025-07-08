import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Link2 } from 'lucide-react';

export function Visit({ url }:{ url: string }) {
	return (
		<Button
			asChild
			className="transition-opacity duration-300 bg-accent hover:bg-accent/80 border border-secondary/20 hover:border-gray-300 text-gray-900 font-semibold group-hover:opacity-100 md:group-hover:opacity-100 motion-reduce:opacity-100 motion-safe:md:group-hover:opacity-100 md:opacity-0 md:glow motion-reduce:md:opacity-100"
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Link2 className="size-5 -rotate-45 mr-2" />
				<span className="sr-only">Visitar web</span>
				Visitar
			</a>
		</Button>
	);
}
