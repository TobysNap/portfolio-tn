import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

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
	return (
		<Carousel className="w-full">
			<CarouselContent>
				{imgs.map((item) => (
					<CarouselItem key={item.image.src}>
						<div className="relative overflow-hidden rounded-xl bg-primary-800/70 backdrop-blur-sm shadow-lg">
							<div className="relative h-[350px] md:h-[500px]">
								<img
									src={item.image.src || '/placeholder.svg'}
									alt={item.alt}
									className="w-full h-full object-contain"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

								<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
									<p className="text-sm opacity-90 leading-relaxed">
										{item.caption}
									</p>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
