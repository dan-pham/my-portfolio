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
			highlight: "Expanding skills to become a more versatile engineer",
			projects: [
				{
					name: "Full-Stack Portfolio Project",
					description: "Comprehensive web application demonstrating full-stack development mastery with modern best practices",
					technologies: ["React", "Node.js", "PostgreSQL", "Jest", "Express.js"],
					images: ["/projects/springboard/project1-1.png", "/projects/springboard/project1-2.png"],
					details: [
						"Achieved 80% test coverage using Jest and React Testing Library",
						"Implemented secure user authentication with JWT and bcrypt",
						"Built responsive design serving 500+ concurrent users efficiently",
						"Applied modern development workflows with Git, CI/CD, and code reviews",
					],
				},
			],
		},
		{
			company: "ActingConnects",
			title: "Software Engineer, Team Lead",
			period: "Jul 2024 - Present",
			highlight: "Leading cross-functional development of talent management platform",
			projects: [
				{
					name: "Cross-Platform Talent Management App",
					description: "Mobile application revolutionizing how actors manage auditions, portfolios, and career opportunities",
					technologies: ["Swift", "SwiftUI", "Firebase", "React Native", "Figma"],
					images: ["/projects/actingconnects/app1-1.png", "/projects/actingconnects/app1-2.png"],
					details: [
						"Led cross-functional team of 7 engineers and designers to 95% sprint completion rate",
						"Designed wireframes and high-fidelity prototypes, reducing development iterations by 40%",
						"Implemented real-time data validation reducing user input errors by 65%",
						"Developed modular, maintainable components enabling 3x faster feature development",
						"Mentored junior developers and established code review processes",
					],
				},
			],
		},
		{
			company: "Destroke",
			title: "Software Engineer, iOS",
			period: "May 2020 - Aug 2023",
			highlight: "Built healthcare app that improved patient confidence in stroke detection by 60%",
			projects: [
				{
					name: "Stroke Monitoring Clinical App",
					description: "Revolutionary iOS application leveraging Apple's frameworks for comprehensive stroke assessment and early detection",
					technologies: ["Swift", "UIKit", "SwiftUI", "Firebase", "Computer Vision", "Speech Recognition"],
					images: [
						"/projects/destroke/app1-1.png",
						"/projects/destroke/app1-2.png",
						"/projects/destroke/app1-3.png",
					],
					details: [
						"Developed health-focused iOS app serving 60+ stroke patients in clinical trials",
						"Integrated Apple's Speech Recognition and Computer Vision frameworks for real-time assessment",
						"Achieved 75% accuracy in NIH Stroke Scale task assessment, meeting clinical standards",
						"Increased patient confidence in stroke detection by 60% based on clinical study results",
						"Co-authored published research in Heliyon journal validating app's clinical feasibility",
						"Collaborated with medical professionals to ensure HIPAA compliance and clinical accuracy",
					],
				},
			],
		},
		{
			company: "Hike Intel",
			title: "Software Engineer, iOS",
			period: "May 2020 - Feb 2021",
			highlight: "Achieved 1,200 daily active users within two months of App Store launch",
			projects: [
				{
					name: "Hiking Trail Navigation App",
					description: "Real-time trail navigation and condition tracking iOS application connecting NYC hiking community",
					technologies: ["Swift", "UIKit", "Firebase", "MapKit", "Core Data", "RESTful APIs"],
					images: ["/projects/hikeintel/app1-1.png", "/projects/hikeintel/app1-2.png"],
					details: [
						"Developed iOS app connecting 1,000+ members of the New York hiking community",
						"Integrated third-party APIs for dynamic map data and real-time trail conditions",
						"Optimized app for offline use with Core Data, reducing data usage by 70%",
						"Achieved 1,200 daily active users within two months of App Store launch",
						"Implemented geolocation features with 95% accuracy for trail tracking",
						"Built community features enabling user-generated content and trail reviews",
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
			<section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-60"></div>
				
				{/* Floating elements for visual interest */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
				<div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
				<div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse delay-500"></div>
				
				<div className="relative z-10 max-w-4xl mx-auto px-4">
					<div className="mb-8">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
							Hey, I'm <span className="text-blue-600">Dan Pham</span>
						</h1>
						<h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
							iOS Engineer turned Full-Stack Developer
						</h2>
					</div>
					
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 max-w-3xl mx-auto">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
							I've built mobile apps that helped <strong className="text-blue-600">60+ stroke patients</strong> regain confidence 
							and connected <strong className="text-blue-600">1,000+ hikers</strong> in the NYC community. Now I'm expanding my toolkit 
							through intensive full-stack training because I believe the best solutions come from understanding the entire tech stack.
						</p>
						
						<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
							<span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
								5+ Years iOS Development
							</span>
							<span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
								Published Research Author
							</span>
							<span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
								Cross-Functional Team Leader
							</span>
						</div>
					</div>

					<div className="flex justify-center mt-8 space-x-6 text-gray-600">
						<a 
							href="https://linkedin.com/in/dan-pham-01" 
							target="_blank" 
							rel="noopener noreferrer"
							className="group flex flex-col items-center hover:text-blue-500 transition-colors duration-300"
						>
							<FaLinkedin className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
							<span className="text-sm">LinkedIn</span>
						</a>
						<a 
							href="https://github.com/dan-pham" 
							target="_blank" 
							rel="noopener noreferrer"
							className="group flex flex-col items-center hover:text-gray-800 transition-colors duration-300"
						>
							<FaGithub className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
							<span className="text-sm">GitHub</span>
						</a>
						<a 
							href="mailto:phamdan.sj@gmail.com"
							className="group flex flex-col items-center hover:text-red-500 transition-colors duration-300"
						>
							<FaEnvelope className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" />
							<span className="text-sm">Email</span>
						</a>
					</div>
					
					{/* Call to action */}
					<div className="mt-10">
						<button 
							onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
							className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							See My Impact ↓
						</button>
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

			{/* Continuous Learning Section */}
			<section id="learning" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="section-title">Always Learning, Always Growing</h2>
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<p className="text-lg text-gray-600 leading-relaxed">
								"Beyond app development, I am passionate about improving user experiences and collaborating across teams. 
								Currently, I am completing an intensive full-stack engineering bootcamp with Springboard, expanding my skills 
								in JavaScript, React, Node.js, and PostgreSQL—experience that will allow me to contribute more effectively 
								to evolving technology landscapes."
							</p>
						</div>
						
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
									<FaLaptopCode className="mr-3 text-blue-600" />
									Current Learning
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>Springboard Full-Stack Bootcamp</strong> - JavaScript, React, Node.js, PostgreSQL
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>AI/ML Exploration</strong> - Attending Snowflake Dev Day, exploring LLMs and AI integration
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>Industry Engagement</strong> - Active in tech meetups and developer conferences
										</div>
									</li>
								</ul>
							</div>
							
							<div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
								<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
									<FaCode className="mr-3 text-green-600" />
									Certifications & Learning
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>Bluetooth Low Energy Foundations</strong> - Novel Bits (2024)
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>AR for iOS Developers</strong> - RealityKit and Reality Composer
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<strong>Published Research</strong> - Heliyon journal on Destroke app clinical feasibility
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section with Embedded Projects */}
			<section id="experience" className="py-16">
				<h2 className="section-title">Professional Experience</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift">
							<h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
							<p className="text-gray-600 mb-2">
								{exp.company} | {exp.period}
							</p>
							{exp.highlight && (
								<p className="text-blue-600 font-medium mb-4 italic">
									{exp.highlight}
								</p>
							)}

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
