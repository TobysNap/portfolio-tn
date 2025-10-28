import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

type Image = {
	image: {
		src: string;
		width: number;
		height: number;
		format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif';
	};
	caption: string;
	alt: string;
};

export function Gallery({ imgs }: { imgs: Image[] }) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className="relative glassmorphism backdrop-blur-sm border-2 border-secondary/30 rounded-none p-8 hover:border-primary/50 transition-all">
			<Carousel setApi={setApi} className="w-full">
				<CarouselContent>
					{imgs.map((img, index) => (
						<CarouselItem key={index}>
							{/* Imagen principal del carrusel */}
							<div className="relative aspect-video w-full overflow-hidden rounded-none mb-6">
								<img
									src={img.image.src || '/placeholder.svg'}
									alt={img.alt}
									className="object-cover transition-opacity duration-500"
									sizes="(max-width: 1280px) 100vw, 1280px"
								/>
							</div>

							{/* Caption */}
							<p className="text-text/90 font-medium text-center uppercase tracking-wide text-lg mb-8">
								{img.caption}
							</p>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Controles de navegación */}
				<div className="flex items-center justify-between gap-4">
					{/* Botón anterior */}
					<CarouselPrevious className="static glassmorphism backdrop-blur-sm border-2 border-secondary/30 rounded-none p-3 hover:border-primary hover:bg-primary/10 transition-all group translate-y-0">
						<ChevronLeft className="w-6 h-6 text-text group-hover:text-primary transition-colors" />
					</CarouselPrevious>

					{/* Indicadores de posición (dots) */}
					<div className="flex gap-2">
						{imgs.map((_, index) => (
							<button
								key={index}
								onClick={() => api?.scrollTo(index)}
								className={`w-3 h-3 rounded-none border-2 transition-all ${
									index === current
										? 'bg-primary border-primary scale-110'
										: 'bg-transparent border-secondary/50 hover:border-primary/70'
								}`}
								aria-label={`Ir a imagen ${index + 1}`}
							/>
						))}
					</div>

					{/* Botón siguiente */}
					<CarouselNext className="static glassmorphism backdrop-blur-sm border-2 border-secondary/30 rounded-none p-3 hover:border-primary hover:bg-primary/10 transition-all group translate-y-0">
						<ChevronRight className="w-6 h-6 text-text group-hover:text-primary transition-colors" />
					</CarouselNext>
				</div>
			</Carousel>

			{/* Contador de imágenes */}
			<div className="text-center mt-4 text-text/60 text-sm uppercase tracking-wider">
				{current + 1} / {count}
			</div>
		</div>
	);
}
