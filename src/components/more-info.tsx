import * as React from 'react';
import { Button } from '@/components/ui/button';
import { InfoIcon } from 'lucide-react';

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
