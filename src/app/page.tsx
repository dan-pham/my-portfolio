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
	FaHome,
	FaUser,
	FaBook,
	FaMapMarkerAlt,
	FaCalendarAlt,
	FaExternalLinkAlt,
	FaQuoteLeft,
	FaComments,
} from "react-icons/fa";

export default function Home() {
	const [activeTab, setActiveTab] = useState("home");
	const [selectedProject, setSelectedProject] = useState<{
		name: string;
		description: string;
		images: string[];
		technologies: string[];
		details: string[];
	} | null>(null);

	// Navigation tabs
	const tabs = [
		{ id: "home", label: "Home", icon: FaHome },
		{ id: "learn", label: "Learn", icon: FaBook },
		{ id: "about", label: "About", icon: FaUser },
	];

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

	const learningProjects = [
		{
			name: "High Word",
			description: "A spin-off of the viral word game Wordle with 6-word alphabetical challenges",
			technologies: ["Swift", "SwiftUI", "Firebase"],
			image: "/projects/high-word.png",
			link: "#",
			category: "Side Project"
		},
		{
			name: "Recollections",
			description: "Memory organization app available on the App Store for iPhone and iPad",
			technologies: ["Swift", "UIKit", "Core Data"],
			image: "/projects/recollections.png",
			link: "#",
			category: "Side Project"
		},
		{
			name: "AnimeTracker",
			description: "Track your anime watching progress with authentication and API integration",
			technologies: ["Swift", "Firebase", "REST APIs"],
			image: "/projects/anime-tracker.png",
			link: "#",
			category: "Side Project"
		},
	];

	const currentlyReading = [
		{
			title: "System Design Interview",
			author: "Alex Xu",
			status: "Currently Reading",
			notes: "Deep diving into scalable system architecture patterns. Particularly interested in how to design systems that can handle millions of users.",
			category: "Technical"
		},
		{
			title: "The Pragmatic Programmer",
			author: "David Thomas & Andrew Hunt",
			status: "Recently Completed",
			notes: "Timeless principles for software craftsmanship. The concept of 'DRY' and thinking about code as a living document really resonated with me.",
			category: "Technical"
		},
	];

	const booksRead = [
		{
			title: "Clean Code",
			author: "Robert Martin",
			keyTakeaway: "Writing code that humans can read is just as important as code that computers can execute.",
			rating: 5,
			category: "Technical"
		},
		{
			title: "Atomic Habits",
			author: "James Clear",
			keyTakeaway: "Small, consistent improvements compound over time. I apply this to learning new programming concepts daily.",
			rating: 5,
			category: "Personal Development"
		},
		{
			title: "The Lean Startup",
			author: "Eric Ries",
			keyTakeaway: "Build-measure-learn cycles are crucial for product development. Validated learning over vanity metrics.",
			rating: 4,
			category: "Business"
		},
		{
			title: "Designing Data-Intensive Applications",
			author: "Martin Kleppmann",
			keyTakeaway: "Understanding the trade-offs in distributed systems design. Consistency, availability, and partition tolerance.",
			rating: 5,
			category: "Technical"
		},
	];

	const testimonials = [
		{
			quote: "Smart, friendly, and possessing a great sense of humor, Dan is fun to collaborate with and I have truly enjoyed knowing him. If offered the opportunity to use his skills in any line of work, he will surely make a very substantial, positive impact.",
			author: "Matt Cutler",
			role: "Chief Experience Officer, Hike Intel",
		},
		{
			quote: "Dan is an outstanding developer and leader... Our app has just launched on the App Store and is crash- and bug-free and it's all because of him. His communication skills are great, too—he communicates complex concepts in a very clear way.",
			author: "Tim Luby",
			role: "Designer, Hike Intel",
		},
	];

	const openProjectModal = (project: any) => {
		setSelectedProject(project);
	};

	const closeProjectModal = () => {
		setSelectedProject(null);
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case "home":
				return (
					<div className="space-y-16">
						{/* Hero Section */}
						<section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-60"></div>
							
							{/* Floating elements for visual interest */}
							<div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
							<div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
							<div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse delay-500"></div>
							
							<div className="relative z-10 max-w-5xl mx-auto px-4">
								<div className="mb-8">
									<h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
										<span className="text-blue-600">Dan Pham</span>
									</h1>
									<h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
										iOS Developer Turned Full-Stack Engineer
									</h2>
									<div className="flex justify-center items-center text-gray-500 mb-6">
										<FaMapMarkerAlt className="mr-2" />
										<span>San Jose, CA</span>
									</div>
								</div>
								
								<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 max-w-4xl mx-auto">
									<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
										I started my career building polished, high-performance iOS apps for startups—often owning features end-to-end in fast-moving environments. Over time, I grew curious about the bigger picture: how products are architected, scaled, and delivered across platforms.
									</p>
									<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
										My strength lies in <strong className="text-blue-600">bridging front-end craft with full-stack execution</strong>—shipping user-centered products that feel good and work well.
									</p>
									
									<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
										<span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
											5+ Years iOS Development
										</span>
										<span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
											Published Research Author
										</span>
										<span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
											Cross-Platform Builder
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
							</div>
						</section>

						{/* Key Projects Summary - New Section */}
						<section className="py-16 bg-white">
							<div className="container mx-auto px-4">
								<h2 className="section-title">Key Projects</h2>
								<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
									<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover-lift">
										<h3 className="text-xl font-semibold mb-2 text-gray-800">Clinical Stroke Detection App</h3>
										<p className="text-sm text-gray-600 mb-3">iOS • Swift • Computer Vision</p>
										<p className="text-gray-700 text-sm mb-3">Published research validating 75% accuracy in clinical trials with 60+ patients</p>
										<div className="flex items-center text-blue-600 text-sm font-medium">
											<FaExternalLinkAlt className="mr-1" />
											<span>Published in Heliyon Journal</span>
										</div>
									</div>
									
									<div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg hover-lift">
										<h3 className="text-xl font-semibold mb-2 text-gray-800">Cross-Platform Talent App</h3>
										<p className="text-sm text-gray-600 mb-3">Swift • React Native • Firebase</p>
										<p className="text-gray-700 text-sm mb-3">Led team of 7 to 95% sprint completion, reduced dev iterations by 40%</p>
										<div className="flex items-center text-green-600 text-sm font-medium">
											<FaExternalLinkAlt className="mr-1" />
											<span>Team Leadership • Mentoring</span>
										</div>
									</div>
									
									<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg hover-lift">
										<h3 className="text-xl font-semibold mb-2 text-gray-800">Hiking Community Platform</h3>
										<p className="text-sm text-gray-600 mb-3">iOS • MapKit • Core Data</p>
										<p className="text-gray-700 text-sm mb-3">1,200 DAU within 2 months, 70% reduction in data usage</p>
										<div className="flex items-center text-purple-600 text-sm font-medium">
											<FaExternalLinkAlt className="mr-1" />
											<span>App Store Success</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Skills Section */}
						<section className="py-16 bg-gray-50">
							<div className="container mx-auto px-4">
								<h2 className="section-title">Core Technical Skills</h2>
								<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
									<div className="bg-white p-6 rounded-lg hover-lift shadow-sm">
										<h3 className="text-xl font-semibold mb-4 text-gray-800 text-center flex items-center justify-center">
											<FaMobileAlt className="mr-2 text-blue-600" />
											Mobile Development
										</h3>
										<div className="space-y-2">
											<div className="flex justify-between items-center">
												<span className="text-gray-700">Swift/SwiftUI</span>
												<span className="text-sm text-gray-500">5+ years</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">iOS Frameworks</span>
												<span className="text-sm text-gray-500">Expert</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">React Native</span>
												<span className="text-sm text-gray-500">2+ years</span>
											</div>
										</div>
									</div>
									
									<div className="bg-white p-6 rounded-lg hover-lift shadow-sm">
										<h3 className="text-xl font-semibold mb-4 text-gray-800 text-center flex items-center justify-center">
											<FaLaptopCode className="mr-2 text-green-600" />
											Full-Stack Web
										</h3>
										<div className="space-y-2">
											<div className="flex justify-between items-center">
												<span className="text-gray-700">React/Next.js</span>
												<span className="text-sm text-gray-500">Learning</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">Node.js</span>
												<span className="text-sm text-gray-500">Learning</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">PostgreSQL</span>
												<span className="text-sm text-gray-500">Learning</span>
											</div>
										</div>
									</div>
									
									<div className="bg-white p-6 rounded-lg hover-lift shadow-sm">
										<h3 className="text-xl font-semibold mb-4 text-gray-800 text-center flex items-center justify-center">
											<FaCode className="mr-2 text-purple-600" />
											Technical Leadership
										</h3>
										<div className="space-y-2">
											<div className="flex justify-between items-center">
												<span className="text-gray-700">Team Leadership</span>
												<span className="text-sm text-gray-500">2+ years</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">Mentoring</span>
												<span className="text-sm text-gray-500">Active</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-gray-700">System Design</span>
												<span className="text-sm text-gray-500">Growing</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Professional Experience */}
						<section className="py-16 bg-gray-50">
							<div className="container mx-auto px-4">
								<h2 className="section-title">Professional Experience</h2>
								<div className="max-w-5xl mx-auto space-y-8">
									{experiences.map((exp, index) => (
										<div key={index} className="bg-white rounded-lg shadow-md p-6 hover-lift">
											<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
												<div>
													<h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
													<p className="text-lg text-blue-600 font-medium">{exp.company}</p>
												</div>
												<div className="flex items-center text-gray-500 mt-2 md:mt-0">
													<FaCalendarAlt className="mr-2" />
													<span>{exp.period}</span>
												</div>
											</div>
											
											{exp.highlight && (
												<p className="text-blue-600 font-medium mb-4 italic bg-blue-50 p-3 rounded">
													{exp.highlight}
												</p>
											)}

											{exp.projects && exp.projects.map((project, projIndex) => (
												<div key={projIndex} className="border-l-4 border-blue-500 pl-6">
													<h4 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h4>
													<p className="text-gray-600 mb-3">{project.description}</p>

													<div className="flex flex-wrap gap-2 mb-3">
														{project.technologies.map((tech) => (
															<span
																key={tech}
																className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
															>
																{tech}
															</span>
														))}
													</div>

													<ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
														{project.details.slice(0, 3).map((detail, detailIndex) => (
															<li key={detailIndex} className="text-sm">{detail}</li>
														))}
													</ul>

													{project.details.length > 3 && (
														<button
															onClick={() => openProjectModal(project)}
															className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
														>
															View Full Details <FaExternalLinkAlt className="ml-1" />
														</button>
													)}
												</div>
											))}
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Continuous Learning */}
						<section className="py-16 bg-white">
							<div className="container mx-auto px-4">
								<h2 className="section-title">Continuous Learning</h2>
								<div className="max-w-4xl mx-auto">
									<div className="text-center mb-8">
										<p className="text-lg text-gray-600 leading-relaxed">
											Currently completing an intensive full-stack engineering bootcamp with Springboard, expanding my skills 
											in JavaScript, React, Node.js, and PostgreSQL.
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
														<strong>AI/ML Exploration</strong> - Attending Snowflake Dev Day, exploring LLMs
													</div>
												</li>
												<li className="flex items-start">
													<span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
													<div>
														<strong>Industry Engagement</strong> - Active in tech meetups and conferences
													</div>
												</li>
											</ul>
										</div>
										
										<div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
											<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
												<FaCode className="mr-3 text-green-600" />
												Certifications & Publications
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
														<strong>Published Research</strong> - Heliyon journal on clinical feasibility
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* Testimonials */}
						<section className="py-16 bg-gray-50">
							<div className="container mx-auto px-4">
								<h2 className="section-title">What Colleagues Say</h2>
								<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
									{testimonials.map((testimonial, index) => (
										<div key={index} className="bg-white p-6 rounded-lg shadow-md">
											<p className="text-gray-700 mb-4 italic text-lg">"{testimonial.quote}"</p>
											<div className="border-t pt-4">
												<p className="font-semibold text-gray-800">{testimonial.author}</p>
												<p className="text-gray-600">{testimonial.role}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Call to Action */}
						<section className="py-16 bg-blue-600 text-white">
							<div className="container mx-auto px-4 text-center">
								<h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
								<p className="text-xl mb-8 max-w-2xl mx-auto">
									I'm passionate about creating user-centered products that make a real impact. 
									Ready to bring my full-stack skills to your team.
								</p>
								<div className="space-x-4">
									<a 
										href="mailto:phamdan.sj@gmail.com"
										className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
									>
										Get In Touch
									</a>
									<button 
										onClick={() => setActiveTab('about')}
										className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
									>
										Learn More About Me
									</button>
								</div>
							</div>
						</section>
					</div>
				);

			case "learn":
				return (
					<div className="py-16">
						<h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Continuous Learning</h1>
						<p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
							Beyond formal work, I'm constantly exploring new technologies, building side projects, and diving deep into books that shape how I think about software and leadership.
						</p>

						{/* Currently Reading/Learning */}
						<section className="mb-16 bg-white rounded-lg p-8 shadow-md max-w-5xl mx-auto">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
								<FaBook className="mr-3 text-blue-600" />
								Currently Reading & Learning
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								{currentlyReading.map((book, index) => (
									<div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
										<div className="flex items-start justify-between mb-3">
											<div>
												<h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
												<p className="text-gray-600">by {book.author}</p>
											</div>
											<span className={`px-3 py-1 rounded-full text-sm font-medium ${
												book.status === "Currently Reading" 
													? "bg-green-100 text-green-800" 
													: "bg-blue-100 text-blue-800"
											}`}>
												{book.status}
											</span>
										</div>
										<p className="text-gray-700 text-sm leading-relaxed">{book.notes}</p>
									</div>
								))}
							</div>
						</section>

						{/* Side Projects */}
						<section className="mb-16">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Side Projects</h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
								{learningProjects.map((project, index) => (
									<div key={index} className="bg-white rounded-lg shadow-md hover-lift overflow-hidden">
										<div className="h-48 bg-gray-200 flex items-center justify-center">
											<FaMobileAlt className="text-4xl text-gray-400" />
										</div>
										<div className="p-6">
											<div className="flex items-center justify-between mb-2">
												<h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
												<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
													{project.category}
												</span>
											</div>
											<p className="text-gray-600 mb-4">{project.description}</p>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Books I've Read */}
						<section className="mb-16 bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Books That Shaped My Thinking</h2>
							<div className="grid md:grid-cols-2 gap-6">
								{booksRead.map((book, index) => (
									<div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
										<div className="flex items-start justify-between mb-3">
											<div>
												<h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
												<p className="text-gray-600 text-sm">by {book.author}</p>
											</div>
											<div className="flex items-center">
												<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">
													{book.category}
												</span>
												<div className="flex">
													{[...Array(book.rating)].map((_, i) => (
														<span key={i} className="text-yellow-400">★</span>
													))}
												</div>
											</div>
										</div>
										<div className="flex items-start">
											<FaQuoteLeft className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
											<p className="text-gray-700 text-sm italic">{book.keyTakeaway}</p>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Discussion Invitation */}
						<section className="bg-blue-600 text-white rounded-lg p-8 max-w-4xl mx-auto text-center">
							<FaComments className="text-4xl mb-4 mx-auto" />
							<h2 className="text-2xl font-bold mb-4">Let's Talk Books & Learning</h2>
							<p className="text-lg mb-6 leading-relaxed">
								I love discussing ideas from books, sharing recommendations, and hearing different perspectives. 
								Whether it's technical architecture, team leadership, or product strategy—I'm always eager to learn from others.
							</p>
							<div className="space-x-4">
								<a 
									href="mailto:phamdan.sj@gmail.com?subject=Book Discussion"
									className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
								>
									Start a Book Discussion
								</a>
								<a 
									href="https://linkedin.com/in/dan-pham-01" 
									target="_blank" 
									rel="noopener noreferrer"
									className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-block"
								>
									Connect on LinkedIn
								</a>
							</div>
						</section>
					</div>
				);

			case "about":
				return (
					<div className="py-16 max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Get to Know Me</h1>
						
						{/* Personal Photos Section */}
						<div className="grid md:grid-cols-3 gap-6 mb-12">
							<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
								<span className="text-gray-500">Photo: Hiking/Outdoors</span>
							</div>
							<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
								<span className="text-gray-500">Photo: Coding/Workshop</span>
							</div>
							<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
								<span className="text-gray-500">Photo: Personal/Fun</span>
							</div>
						</div>

						{/* Personal Story */}
						<div className="bg-white rounded-lg p-8 shadow-md mb-8">
							<h2 className="text-2xl font-semibold mb-6 text-gray-800">My Journey</h2>
							<div className="prose prose-lg max-w-none text-gray-700">
								<p className="mb-4">
									My strength lies in bridging front-end craft with full-stack execution—shipping user-centered products that feel good and work well. I believe the best solutions come from understanding the entire technology stack, not just one piece of it.
								</p>
								<p className="mb-4">
									When I'm not coding, you'll find me exploring new hiking trails (inspired by my work on Hike Intel!), attending tech meetups, or diving deep into emerging technologies like AI and machine learning. I'm passionate about building software that makes a real impact on people's lives.
								</p>
								<p>
									I love collaborating with cross-functional teams and believe that great software comes from great communication. Whether I'm mentoring junior developers or working with designers and product managers, I aim to create an environment where everyone can do their best work.
								</p>
							</div>
						</div>

						{/* Fun Facts */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
							<h2 className="text-2xl font-semibold mb-6 text-gray-800">Fun Facts</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold text-gray-800 mb-2">🏔️ Hiking Enthusiast</h3>
									<p className="text-gray-600">Building the Hike Intel app made me fall in love with hiking. I've explored trails across the Bay Area and NYC.</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800 mb-2">📚 Published Researcher</h3>
									<p className="text-gray-600">Co-authored research in the Heliyon journal on mobile health applications and clinical feasibility studies.</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800 mb-2">🎯 Mentorship Focus</h3>
									<p className="text-gray-600">I've mentored multiple engineering interns and love helping others grow their technical skills.</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800 mb-2">🔮 Future-Minded</h3>
									<p className="text-gray-600">Currently exploring AI/ML applications and attending conferences like Snowflake Dev Day to stay ahead of the curve.</p>
								</div>
							</div>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<main className="min-h-screen bg-gray-50">
			{/* Tab Navigation */}
			<nav className="sticky top-0 bg-white shadow-md z-50">
				<div className="container mx-auto px-4">
					<div className="flex justify-center space-x-1">
						{tabs.map((tab) => {
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
										activeTab === tab.id
											? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
											: "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
									}`}
								>
									<Icon className="mr-2" />
									{tab.label}
								</button>
							);
						})}
					</div>
				</div>
			</nav>

			{/* Tab Content */}
			<div className="container mx-auto px-4 md:px-8 lg:px-16">
				{renderTabContent()}
			</div>

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
