'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const routes = [
	{ href: '#experience', label: 'Experiencia' },
	{ href: '#projects', label: 'Proyectos' },
	{ href: '#about', label: 'Sobre mí' },
	{ href: '#contact', label: 'Contacto' },
];

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<nav className="flex items-center justify-between w-full">
			<a
				href="/"
				className="text-text font-bold text-xl tracking-tighter hover:text-accent transition-colors"
			>
				TN
			</a>
			<div className="hidden md:flex items-center space-x-6">
				{routes.map((route) => (
					<a
						key={route.href}
						href={route.href}
						className="text-text hover:text-accent transition-colors"
					>
						{route.label}
					</a>
				))}
			</div>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild className="md:hidden">
					<Button variant="ghost" size="icon" className="text-text">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="bg-background border-primary">
					<div className="flex flex-col space-y-6 mt-6">
						{routes.map((route) => (
							<a
								key={route.href}
								href={route.href}
								onClick={() => setIsOpen(false)}
								className="text-text hover:text-accent transition-colors"
							>
								{route.label}
							</a>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
