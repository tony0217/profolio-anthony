'use client'

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon, RightArrowIcon } from "@/components/icons";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";

import Profile from '@/public/profile.jpeg'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-8 animate-fadeIn">
			<Avatar isBordered color="warning" className="w-24 h-24 hover:scale-125 transition-transform duration-300 ease-in-out" src={Profile.src} />
			<div className="inline-block max-w-lg text-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out">
				<h1 className={title({ color: "foreground", size: "lg" })}>Anthony Henriquez&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4", color: 'yellow' })}>
					Full-Stack Developer
				</h2>
			</div>
			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.linkedin}
					className={`${buttonStyles({ color: "primary", radius: "full", variant: "shadow" })} transform hover:animate-bounce hover:scale-110 transition-transform duration-300 ease-in-out`}
				>
					<LinkedInIcon size={18} />
					LinkedIn
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={`${buttonStyles({ variant: "bordered", radius: "full" })} transform hover:animate-bounce hover:scale-110 transition-transform duration-300 ease-in-out`}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>
			<div className="mt-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
				<Card className="max-w-5xl p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[#4D4D4D] hover:via-gray-400 hover:to-[#999999] hover:text-lg hover:text-black">
					<CardBody className="text-sm md:text-md py-6 text-white transition-colors duration-300 ease-in-out hover:text-black">
						Ingeniero de software especializado en desarrollo web, con enfoque en Node.js, JavaScript, TypeScript, Angular y React. Destaco en la creación de soluciones eficaces y aprendo rápidamente en entornos cambiantes. Puedo desempeñar varios roles, desde backend sólidos hasta interfaces frontend atractivas. Busco constantemente la excelencia técnica y la mejora continua.
					</CardBody>
				</Card>
			</div>
			<div className="flex mt-2 items-center">
				<Button className="bg-gradient-to-r from-[#999999] to-[#4D4D4D] hover:from-[#4D4D4D] hover:to-[#999999] font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-125 hover:animate-pulse">
					Go to Projects 
					<RightArrowIcon/>
				</Button>
			</div>
		</section>
	);
}


