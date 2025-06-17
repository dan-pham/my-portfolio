"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons (you'll need to install these or use an icon library)
import {
	FaLinkedin,
	FaGithub,
	FaEnvelope,
	FaCode,
	FaMobileAlt,
	FaLaptopCode,
} from "react-icons/fa";

export default function Home() {
	const [activeSection, setActiveSection] = useState("about");
	const [selectedProject, setSelectedProject] = useState<{
		name: string;
		description: string;
		images: string[];
		technologies: string[];
		details: string[];
	} | null>(null);

	const skills = {
		iOS: ["Swift", "SwiftUI", "UIKit", "CoreData", "Bluetooth Low Energy"],
		"Full-Stack": ["React", "Next.js", "MongoDB", "PostgreSQL", "Node.js"],
		Tools: ["Xcode", "VS Code", "Git", "Figma", "Firebase"],
	};

	const experiences = [
		{
			company: "Springboard",
			title: "Full-Stack Developer / Software Engineering Student",
			period: "Sep 2024 - Present",
			projects: [
				{
					name: "Full-Stack Portfolio Project",
					description: "Comprehensive web application demonstrating full-stack development skills",
					technologies: ["React", "Node.js", "PostgreSQL", "Jest"],
					images: ["/projects/springboard/project1-1.png", "/projects/springboard/project1-2.png"],
					details: [
						"Developed a full-stack application with 80% test coverage",
						"Implemented responsive design and user authentication",
						"Utilized modern web development best practices",
					],
				},
			],
		},
		{
			company: "ActingConnects",
			title: "Software Engineer, Team Lead",
			period: "Jul 2024 - Present",
			projects: [
				{
					name: "Cross-Platform Talent Management App",
					description: "Mobile application for actors to manage auditions and portfolios",
					technologies: ["Swift", "SwiftUI", "Firebase", "React Native"],
					images: ["/projects/actingconnects/app1-1.png", "/projects/actingconnects/app1-2.png"],
					details: [
						"Led cross-functional team of 7 engineers and designers",
						"Designed wireframes and high-fidelity prototypes",
						"Implemented real-time data validation and user authentication",
						"Developed modular, maintainable iOS and cross-platform app components",
					],
				},
			],
		},
		{
			company: "Destroke",
			title: "Software Engineer, iOS",
			period: "May 2020 - Aug 2023",
			projects: [
				{
					name: "Stroke Monitoring Clinical App",
					description: "Advanced iOS application for comprehensive stroke assessment",
					technologies: ["Swift", "UIKit", "SwiftUI", "Firebase", "Computer Vision"],
					images: [
						"/projects/destroke/app1-1.png",
						"/projects/destroke/app1-2.png",
						"/projects/destroke/app1-3.png",
					],
					details: [
						"Developed health-focused iOS app for stroke monitoring",
						"Integrated advanced frameworks like speech recognition and computer vision",
						"Implemented Firebase backend services for data management",
						"Achieved 75% NIH Stroke Scale task assessment accuracy",
						"Increased patient confidence in stroke detection by 60%",
					],
				},
			],
		},
		{
			company: "Hike Intel",
			title: "Software Engineer, iOS",
			period: "May 2020 - Feb 2021",
			projects: [
				{
					name: "Hiking Trail Navigation App",
					description: "Real-time trail navigation and condition tracking iOS application",
					technologies: ["Swift", "UIKit", "Firebase", "MapKit", "Core Data"],
					images: ["/projects/hikeintel/app1-1.png", "/projects/hikeintel/app1-2.png"],
					details: [
						"Developed iOS app for trail navigation with real-time updates",
						"Integrated third-party APIs for dynamic map data",
						"Optimized app for offline use with Core Data",
						"Achieved 1,200 daily active users within two months of App Store launch",
					],
				},
			],
		},
	];

	const projects = [
		{
			name: "Stroke Monitoring App",
			description: "Clinical iOS app for comprehensive stroke assessment",
			technologies: ["Swift", "UIKit", "Firebase"],
			image: "/projects/stroke-app.png",
		},
		{
			name: "Hiking Trail Navigator",
			description: "Real-time trail navigation and condition tracking",
			technologies: ["Swift", "Firebase", "MapKit"],
			image: "/projects/hiking-app.png",
		},
		{
			name: "Math Practice App",
			description: "Interactive digital flashcards for math learning",
			technologies: ["Swift", "UIKit", "Lottie"],
			image: "/projects/math-app.png",
		},
	];

	const openProjectModal = (project: any) => {
		setSelectedProject(project);
	};

	const closeProjectModal = () => {
		setSelectedProject(null);
	};

	return (
		<main className="container mx-auto px-4 md:px-8 lg:px-16 animate-fade-in">
			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center text-center">
				<div>
					<h1 className="text-5xl font-bold mb-4 text-gray-900">Dan Pham</h1>
					<h2 className="text-3xl text-gray-600 mb-6">Software Engineer | iOS & Web Developer</h2>
					<p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
						Building impactful software solutions that solve real-world problems
					</p>

					<div className="flex justify-center mt-8 space-x-6 text-gray-600">
						<a href="https://linkedin.com/in/dan-pham-01" target="_blank" rel="noopener noreferrer">
							<FaLinkedin className="text-3xl hover:text-blue-500 transition" />
						</a>
						<a href="https://github.com/dan-pham" target="_blank" rel="noopener noreferrer">
							<FaGithub className="text-3xl hover:text-gray-800 transition" />
						</a>
						<a href="mailto:phamdan.sj@gmail.com">
							<FaEnvelope className="text-3xl hover:text-red-500 transition" />
						</a>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-16 animate-slide-up">
				<h2 className="section-title">My Skills</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{Object.entries(skills).map(([category, skillList]) => (
						<div key={category} className="bg-white p-6 rounded-lg shadow-custom hover-lift">
							<h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
							<ul className="space-y-2">
								{skillList.map((skill) => (
									<li key={skill} className="flex items-center text-gray-600">
										<span className="mr-2 text-primary-500">•</span>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* Experience Section with Embedded Projects */}
			<section id="experience" className="py-16">
				<h2 className="section-title">Professional Experience</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift">
							<h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
							<p className="text-gray-600 mb-4">
								{exp.company} | {exp.period}
							</p>

							{exp.projects &&
								exp.projects.map((project, projIndex) => (
									<div key={projIndex} className="mb-4 p-4 bg-gray-50 rounded-lg">
										<h4 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h4>
										<p className="text-gray-600 mb-3">{project.description}</p>

										<div className="flex flex-wrap gap-2 mb-3">
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
												>
													{tech}
												</span>
											))}
										</div>

										<ul className="list-disc list-inside text-gray-700">
											{project.details.map((detail, detailIndex) => (
												<li key={detailIndex}>{detail}</li>
											))}
										</ul>

										<button
											onClick={() => openProjectModal(project)}
											className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
										>
											View Project Details
										</button>
									</div>
								))}
						</div>
					))}
				</div>
			</section>

			{/* Project Modal */}
			{selectedProject && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
					onClick={closeProjectModal}
				>
					<div
						className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
						<p className="text-gray-600 mb-6">{selectedProject.description}</p>

						<div className="grid md:grid-cols-2 gap-4 mb-6">
							{selectedProject.images.map((img, index) => (
								<Image
									key={index}
									src={img}
									alt={`${selectedProject.name} Image ${index + 1}`}
									width={400}
									height={300}
									className="w-full h-auto"
								/>
							))}
						</div>

						<button
							onClick={closeProjectModal}
							className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
