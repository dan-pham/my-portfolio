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
	FaQuoteRight,
	FaComments,
	FaUsers,
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
		{ id: "learn", label: "Projects", icon: FaCode },
		{ id: "about", label: "About", icon: FaUser },
	];

	// Missing Skills Section
	const skills = {
		iOS: ["Swift", "SwiftUI", "UIKit", "CoreData", "Bluetooth Low Energy"],
		"Full-Stack": ["React", "Next.js", "MongoDB", "PostgreSQL", "Node.js"],
		Tools: ["Xcode", "VS Code", "Git", "Figma", "Firebase", "Cursor"],
	};

	const experiences = [
		{
			company: "ActingConnects",
			title: "Software Engineer, Team Lead",
			period: "Jul 2024 - Present",
			highlight: "Leading cross-functional development of talent management platform",
			projects: [
				{
					name: "Cross-Platform Talent Management App",
					description:
						"Mobile application revolutionizing how actors manage auditions, portfolios, and career opportunities",
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
					description:
						"Revolutionary iOS application leveraging Apple's frameworks for comprehensive stroke assessment and early detection",
					technologies: [
						"Swift",
						"UIKit",
						"SwiftUI",
						"Firebase",
						"Computer Vision",
						"Speech Recognition",
					],
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
					description:
						"Real-time trail navigation and condition tracking iOS application connecting NYC hiking community",
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
		{
			company: "Paul The Tutor's Education Center",
			title: "iOS Developer",
			period: "Nov 2020 - Feb 2021",
			highlight: "Freelance project creating educational app for young learners",
			projects: [
				{
					name: "Math Practice iOS App",
					description:
						"Interactive educational app designed to help younger users with basic math problems through engaging digital flashcards",
					technologies: ["Swift", "UIKit", "Lottie", "CocoaPods", "Unit Testing"],
					images: ["/projects/paulthetutor/app1-1.png", "/projects/paulthetutor/app1-2.png"],
					details: [
						"Developed interactive math practice iOS app using Swift and UIKit for digital flashcards",
						"Achieved 80% unit and integration test coverage, ensuring reliable app performance",
						"Integrated Lottie animation API using CocoaPods to enhance interactivity and visual appeal",
						"Implemented playful colors and positive encouragement to improve user experience",
						"Added answer display feature for incorrect problems to facilitate learning from mistakes",
						"Designed to motivate young users and alleviate monotony of traditional pen-and-paper worksheets",
					],
				},
			],
		},
	];

	const learningProjects = [
		{
			name: "My Wellness Journey",
			description:
				"Full-stack health platform combining government APIs with AI for personalized wellness recommendations",
			problem:
				"Complex health information is difficult for users to understand and apply to their personal wellness goals",
			solution:
				"Built AI-powered platform integrating MyHealthFinder and MedlinePlus APIs with OpenAI for tailored health insights",
			technologies: ["Next.js", "React", "TypeScript", "MongoDB", "OpenAI API", "Tailwind CSS"],
			achievements: [
				"Integrated multiple government health APIs with AI-powered personalization",
				"Implemented JWT authentication and secure user profiles with MongoDB",
				"Built responsive design with real-time notifications and caching optimization",
				"Deployed full-stack application with comprehensive testing suite",
			],
			image: "/projects/my-wellness-journey.png",
			link: "https://my-wellness-journey.vercel.app/",
			github: "https://github.com/dan-pham/My-Wellness-Journey",
			category: "Springboard Project",
			status: "live",
		},
		{
			name: "Recollections",
			description: "Memory organization app available on the App Store for iPhone, iPad, and macOS",
			problem:
				"People struggle to organize and revisit meaningful memories across different media types",
			solution:
				"Built comprehensive memory management system with local storage, privacy-first design, and cross-platform support",
			technologies: ["Swift", "UIKit", "SwiftUI", "Core Data", "CloudKit"],
			achievements: [
				"Successfully published first app to App Store with universal device support",
				"Implemented privacy-first architecture with local-only data storage",
				"Built intuitive photo management with captions and note-taking features",
				"Planned: UI/UX redesign and AI-powered writing style analysis",
			],
			image: "/projects/recollections.png",
			link: "#",
			github: "https://github.com/dan-pham/Recollections",
			category: "iOS App Store",
			status: "published",
		},
		{
			name: "High Word",
			description:
				"Wordle-inspired word puzzle game with unique alphabetical ordering challenge mechanics",
			problem:
				"Wordle's popularity sparked interest in word games, but lacked variety in challenge types",
			solution:
				"Created unique 6-word alphabetical puzzle mechanic requiring strategic word placement and validation",
			technologies: ["Swift", "SwiftUI", "Game Logic"],
			achievements: [
				"Built complex game logic with alphabetical ordering validation algorithms",
				"Designed intuitive game interface with visual feedback and error handling",
				"Implemented daily puzzle system with word validation and progress tracking",
			],
			image: "/projects/high-word.png",
			link: "#",
			github: "https://github.com/dan-pham/High-Word",
			category: "iOS Game",
			status: "completed",
		},
		{
			name: "AR Experience App",
			description:
				"Interactive AR application showcasing RealityKit and ARKit integration (In Development)",
			problem:
				"Need to demonstrate practical application of AR certification knowledge in a portfolio project",
			solution:
				"Planning AR app combining object recognition, 3D anchoring, and interactive experiences using Apple's AR frameworks",
			technologies: ["Swift", "RealityKit", "ARKit", "Reality Composer"],
			achievements: [
				"Planned: Integration of RealityKit and ARKit frameworks for immersive experiences",
				"Planned: 3D object anchoring with real-world interaction capabilities",
				"Planned: Cross-platform AR content creation using Reality Composer",
			],
			image: "/projects/ar-placeholder.png",
			link: "#",
			github: "#",
			category: "AR Development",
			status: "planned",
		},
	];

	const currentlyReading = [
		{
			title: "System Design Interview",
			author: "Alex Xu",
			status: "Currently Reading",
			notes:
				"Deep diving into scalable system architecture patterns. Particularly interested in how to design systems that can handle millions of users.",
			category: "Technical",
		},
		{
			title: "The Pragmatic Programmer",
			author: "David Thomas & Andrew Hunt",
			status: "Recently Completed",
			notes:
				"Timeless principles for software craftsmanship. The concept of 'DRY' and thinking about code as a living document really resonated with me.",
			category: "Technical",
		},
	];

	const booksRead = [
		{
			title: "Clean Code",
			author: "Robert Martin",
			keyTakeaway:
				"Writing code that humans can read is just as important as code that computers can execute.",
			rating: 5,
			category: "Technical",
		},
		{
			title: "Atomic Habits",
			author: "James Clear",
			keyTakeaway:
				"Small, consistent improvements compound over time. I apply this to learning new programming concepts daily.",
			rating: 5,
			category: "Personal Development",
		},
		{
			title: "The Lean Startup",
			author: "Eric Ries",
			keyTakeaway:
				"Build-measure-learn cycles are crucial for product development. Validated learning over vanity metrics.",
			rating: 4,
			category: "Business",
		},
		{
			title: "Designing Data-Intensive Applications",
			author: "Martin Kleppmann",
			keyTakeaway:
				"Understanding the trade-offs in distributed systems design. Consistency, availability, and partition tolerance.",
			rating: 5,
			category: "Technical",
		},
	];

	const testimonials = [
		{
			quote:
				"Dan is <strong style='color: #2D5A27'>smart, friendly, and possesses a great sense of humor</strong>, making him <strong>fun to collaborate with</strong>.",
			author: "Matt",
			role: "UX Designer, Hike Intel",
		},
		{
			quote:
				"Dan is an <strong style='color: #2D5A27'>outstanding developer and leader</strong> with <strong>great communication skills</strong>.",
			author: "Tim",
			role: "Founder, Hike Intel",
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
					<div className="space-y-12">
						{/* Hero Section - More Compact */}
						<section className="min-h-[70vh] flex items-center justify-center text-center relative overflow-hidden">
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60"></div>

							{/* Floating elements for visual interest */}
							<div className="absolute top-20 left-10 w-20 h-20 bg-gray-200 rounded-full opacity-20 animate-pulse"></div>
							<div className="absolute bottom-32 right-16 w-16 h-16 bg-gray-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
							<div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gray-200 rounded-full opacity-25 animate-pulse delay-500"></div>

							<div className="relative z-10 max-w-4xl mx-auto px-4">
								<div className="mb-6">
									{/* Professional Headshot */}
									<div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
										<div className="text-center">
											<FaUser className="text-3xl text-gray-400 mb-1" />
											<span className="text-xs text-gray-500">Professional Photo</span>
										</div>
									</div>

									<h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
										<span style={{ color: "#5A827E" }}>Dan Pham</span>
									</h1>
									<h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
										iOS Developer Turned Full-Stack Engineer
									</h2>
									<div className="flex justify-center items-center text-gray-500 mb-4">
										<FaMapMarkerAlt className="mr-2" />
										<span>San Jose, CA</span>
									</div>
								</div>

								<div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-6 max-w-3xl mx-auto">
									<p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
										I bridge front-end craft with full-stack execution, bringing 5+ years of iOS
										expertise to cross-platform development. My strength lies in{" "}
										<strong style={{ color: "#2D5A27" }}>
											shipping user-centered products that feel good and work well
										</strong>
										—from leading teams of 7 engineers to building healthcare apps used in clinical
										trials.
									</p>

									<div className="grid md:grid-cols-3 gap-4 text-sm">
										<div className="text-center">
											<FaMobileAlt className="text-2xl text-gray-400 mx-auto mb-2" />
											<h3 className="font-semibold text-gray-800 mb-1">Mobile Expertise</h3>
											<p className="text-gray-600">
												5+ years iOS development with App Store launches
											</p>
										</div>
										<div className="text-center">
											<FaCode style={{ color: "#5A827E" }} className="text-2xl mx-auto mb-2" />
											<h3 className="font-semibold text-gray-800 mb-1">Technical Leadership</h3>
											<p className="text-gray-600">
												Led teams, mentored developers, 95% sprint completion
											</p>
										</div>
										<div className="text-center">
											<FaLaptopCode className="text-2xl text-gray-400 mx-auto mb-2" />
											<h3 className="font-semibold text-gray-800 mb-1">Full-Stack Growth</h3>
											<p className="text-gray-600">Expanding to React, Node.js, modern web stack</p>
										</div>
									</div>
								</div>

								<div className="flex justify-center mt-6 space-x-6 text-gray-600">
									<a
										href="https://linkedin.com/in/dan-pham-01"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex flex-col items-center transition-colors duration-300"
										onMouseEnter={(e) => (e.currentTarget.style.color = "#5A827E")}
										onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
									>
										<FaLinkedin className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300" />
										<span className="text-xs">LinkedIn</span>
									</a>
									<a
										href="https://github.com/dan-pham"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex flex-col items-center hover:text-gray-800 transition-colors duration-300"
									>
										<FaGithub className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300" />
										<span className="text-xs">GitHub</span>
									</a>
									<a
										href="mailto:phamdan.sj@gmail.com"
										className="group flex flex-col items-center hover:text-red-500 transition-colors duration-300"
									>
										<FaEnvelope className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300" />
										<span className="text-xs">Email</span>
									</a>
								</div>
							</div>
						</section>

						{/* Compact Testimonials */}
						<section className="py-8 bg-gray-50">
							<div className="container mx-auto px-4">
								<h2 className="text-xl font-bold text-center mb-6 text-gray-800">
									What Colleagues Say
								</h2>
								<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
									{testimonials.map((testimonial, index) => (
										<div
											key={index}
											className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
										>
											<div className="flex items-start mb-3">
												<FaQuoteLeft
													style={{ color: "#5A827E" }}
													className="text-sm mr-2 mt-1 flex-shrink-0"
												/>
												<p
													className="text-gray-700 text-sm italic leading-relaxed"
													dangerouslySetInnerHTML={{ __html: testimonial.quote }}
												></p>
												<FaQuoteRight
													style={{ color: "#5A827E" }}
													className="text-sm mr-2 mt-1 flex-shrink-0"
												/>
											</div>
											<div className="border-t pt-3">
												<p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
												<p className="text-gray-600 text-xs">{testimonial.role}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Complete Professional Experience - Visual Resume */}
						<section className="py-12 bg-white">
							<div className="container mx-auto px-4">
								<h2 className="section-title">Professional Experience</h2>
								<p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
									Complete work history showcasing technical leadership, cross-platform development,
									and measurable impact across healthcare, entertainment, and outdoor technology
									sectors.
								</p>
								<div className="space-y-10 max-w-6xl mx-auto">
									{experiences.map((exp, index) => (
										<div key={index} className="bg-gray-50 rounded-lg p-6 hover-lift">
											<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
												<div className="lg:w-1/3">
													<div className="flex items-center mb-3">
														{/* Company Logo Placeholder */}
														<div className="w-12 h-12 bg-gray-200 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
															<span className="text-xs text-gray-500 font-medium">LOGO</span>
														</div>
														<div>
															<h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
															<p style={{ color: "#2D5A27" }} className="text-lg font-medium">
																{exp.company}
															</p>
														</div>
													</div>
													<div className="flex items-center text-gray-500 mb-3">
														<FaCalendarAlt className="mr-2" />
														<span className="font-medium">{exp.period}</span>
													</div>
													{exp.highlight && (
														<div
															className="bg-white border-l-4 p-3 rounded"
															style={{ borderLeftColor: "#5A827E" }}
														>
															<p
																style={{ color: "#2D5A27" }}
																className="font-medium text-sm italic"
															>
																{exp.highlight}
															</p>
														</div>
													)}
												</div>

												<div className="lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
													{exp.projects &&
														exp.projects.map((project, projIndex) => (
															<div
																key={projIndex}
																className="bg-white rounded-lg p-5 shadow-sm border border-gray-200"
															>
																<div className="flex items-start justify-between mb-3">
																	<div className="flex-1">
																		<h4 className="text-lg font-semibold text-gray-800 mb-2">
																			{project.name}
																		</h4>
																		<p className="text-gray-600 mb-3 leading-relaxed text-sm">
																			{project.description}
																		</p>
																	</div>
																	<button
																		onClick={() => openProjectModal(project)}
																		style={{ backgroundColor: "#5A827E" }}
																		className="text-white px-3 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity duration-300 flex items-center ml-4"
																	>
																		<FaExternalLinkAlt className="mr-1" />
																		Details
																	</button>
																</div>

																<div className="grid md:grid-cols-2 gap-4 mb-3">
																	<div>
																		<h5 className="font-semibold text-gray-800 mb-2 text-xs">
																			Key Achievements:
																		</h5>
																		<ul className="space-y-1">
																			{project.details.slice(0, 3).map((detail, detailIndex) => (
																				<li
																					key={detailIndex}
																					className="flex items-start text-xs text-gray-700"
																				>
																					<span
																						style={{ backgroundColor: "#2D5A27" }}
																						className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
																					></span>
																					{detail}
																				</li>
																			))}
																		</ul>
																	</div>
																	<div>
																		<h5 className="font-semibold text-gray-800 mb-2 text-xs">
																			Technologies Used:
																		</h5>
																		<div className="flex flex-wrap gap-1">
																			{project.technologies.map((tech) => (
																				<span
																					key={tech}
																					className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
																				>
																					{tech}
																				</span>
																			))}
																		</div>
																	</div>
																</div>

																{/* Placeholder for screenshots/videos */}
																<div className="bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300">
																	<div className="text-center text-gray-500">
																		<FaMobileAlt className="text-2xl mx-auto mb-1" />
																		<p className="text-xs font-medium">
																			{project.name} Screenshots
																		</p>
																		<p className="text-xs">
																			{project.technologies.includes("Swift") ||
																			project.technologies.includes("SwiftUI")
																				? "iPhone app screenshots & demo video"
																				: project.technologies.includes("React") ||
																				  project.technologies.includes("Next.js")
																				? "Web app screenshots & live demo"
																				: "Project screenshots & demo content"}
																		</p>
																	</div>
																</div>
															</div>
														))}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Call to Action */}
						<section className="py-12 bg-white border-t border-gray-200">
							<div className="container mx-auto px-4 text-center">
								<h2 className="text-2xl font-bold mb-3 text-gray-900">
									Ready to Build Something Great?
								</h2>
								<p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
									I'm looking for my next opportunity to contribute to a team that values
									craftsmanship, user experience, and technical excellence.
								</p>
								<div className="space-x-4">
									<a
										href="mailto:phamdan.sj@gmail.com"
										style={{ backgroundColor: "#5A827E" }}
										className="text-white px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity duration-300 inline-block"
									>
										Get In Touch
									</a>
									<button
										onClick={() => setActiveTab("about")}
										className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base font-semibold hover:border-gray-400 hover:text-gray-900 transition-colors duration-300"
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
						<div className="text-center mb-16">
							<h1 className="text-4xl font-bold mb-4 text-gray-900">Projects & Learning</h1>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
								Side projects, technical exploration, and continuous skill development that
								demonstrate my passion for building and learning in the tech space.
							</p>
						</div>

						{/* Side Projects - Top Priority */}
						<section className="mb-16">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Side Projects</h2>
							<p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
								Personal projects that showcase my exploration of new technologies and commitment to
								continuous learning outside of work.
							</p>
							<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
								{learningProjects.map((project, index) => (
									<div
										key={index}
										className="bg-white rounded-lg shadow-md hover-lift overflow-hidden border border-gray-200"
									>
										<div className="bg-gray-50 h-48 flex items-center justify-center">
											<FaMobileAlt className="text-4xl text-gray-400" />
										</div>
										<div className="p-6">
											<div className="flex items-center justify-between mb-3">
												<h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
												<div className="flex items-center gap-2">
													{project.status === "live" && (
														<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
															Live
														</span>
													)}
													{project.status === "published" && (
														<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
															App Store
														</span>
													)}
													{project.status === "planned" && (
														<span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
															In Development
														</span>
													)}
													<span
														style={{ backgroundColor: "#2D5A27", color: "white" }}
														className="px-2 py-1 rounded text-xs font-medium"
													>
														{project.category}
													</span>
												</div>
											</div>

											<p className="text-gray-600 mb-3 text-sm">{project.description}</p>

											<div className="mb-4">
												<div className="mb-2">
													<span className="text-xs font-semibold text-gray-700">Problem:</span>
													<p className="text-xs text-gray-600 mt-1">{project.problem}</p>
												</div>
												<div className="mb-3">
													<span className="text-xs font-semibold text-gray-700">Solution:</span>
													<p className="text-xs text-gray-600 mt-1">{project.solution}</p>
												</div>
											</div>

											<div className="mb-4">
												<span className="text-xs font-semibold text-gray-700 mb-2 block">
													Key Achievements:
												</span>
												<ul className="space-y-1">
													{project.achievements.slice(0, 2).map((achievement, i) => (
														<li key={i} className="flex items-start text-xs text-gray-600">
															<span
																style={{ backgroundColor: "#2D5A27" }}
																className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
															></span>
															{achievement}
														</li>
													))}
												</ul>
											</div>

											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
													>
														{tech}
													</span>
												))}
											</div>

											<div className="flex gap-2 pt-2 border-t border-gray-100">
												{project.link && project.link !== "#" && (
													<a
														href={project.link}
														target="_blank"
														rel="noopener noreferrer"
														style={{ backgroundColor: "#5A827E" }}
														className="text-white px-3 py-2 rounded text-xs font-medium hover:opacity-90 transition-opacity duration-300 flex items-center"
													>
														<FaExternalLinkAlt className="mr-1" />
														Live Demo
													</a>
												)}
												{project.github && project.github !== "#" && (
													<a
														href={project.github}
														target="_blank"
														rel="noopener noreferrer"
														className="border border-gray-300 text-gray-700 px-3 py-2 rounded text-xs font-medium hover:border-gray-400 hover:text-gray-900 transition-colors duration-300 flex items-center"
													>
														<FaGithub className="mr-1" />
														Code
													</a>
												)}
												{project.status === "planned" && (
													<span className="text-gray-500 px-3 py-2 text-xs italic">
														Coming Soon
													</span>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Certifications & Achievements */}
						<section className="mb-16 bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
								Technical Credentials & Research
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<div className="bg-white p-6 rounded-lg shadow-sm">
									<h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
										<span
											style={{ backgroundColor: "#2D5A27" }}
											className="w-3 h-3 rounded-full mr-3"
										></span>
										Technical Certifications
									</h3>
									<ul className="space-y-4">
										<li className="border-l-2 pl-4" style={{ borderLeftColor: "#2D5A27" }}>
											<div className="flex items-start justify-between mb-2">
												<div>
													<strong className="text-gray-800">
														Core Foundations of Bluetooth Low Energy
													</strong>
													<p className="text-gray-600 text-sm">
														Novel Bits Developer Academy • 2024
													</p>
												</div>
												<a
													href="https://academy.novelbits.io/course-certificates/12D280707-12D3636A8-2F3149C/"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													<FaExternalLinkAlt />
												</a>
											</div>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Learning Focus:</strong> Comprehensive study of BLE technology from
												high-level architecture to low-level protocol implementation
											</p>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Key Skills:</strong> BLE stack understanding, peripheral/central
												roles, GATT services, and iOS Core Bluetooth integration
											</p>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
													IoT Integration
												</span>
												<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
													Protocol Design
												</span>
												<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
													Core Bluetooth
												</span>
											</div>
										</li>
										<li className="border-l-2 pl-4" style={{ borderLeftColor: "#2D5A27" }}>
											<div className="flex items-start justify-between mb-2">
												<div>
													<strong className="text-gray-800">
														AR for iOS Developers: RealityKit and Reality Composer
													</strong>
													<p className="text-gray-600 text-sm">LinkedIn Learning • August 2023</p>
												</div>
												<a
													href="https://www.linkedin.com/learning/certificates/e06c936dfa278428788406b42685786d57eecb8812c25da667a978a5e94bd6e7"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													<FaExternalLinkAlt />
												</a>
											</div>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Learning Focus:</strong> Building interactive AR experiences using
												Apple's RealityKit framework and Reality Composer tool
											</p>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Key Skills:</strong> 3D content creation, AR object anchoring,
												image/object detection, and cross-platform AR development
											</p>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
													RealityKit
												</span>
												<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
													3D Development
												</span>
												<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
													AR Experiences
												</span>
											</div>
										</li>
										<li className="border-l-2 pl-4" style={{ borderLeftColor: "#2D5A27" }}>
											<div className="flex items-start justify-between mb-2">
												<div>
													<strong className="text-gray-800">Learning ARKit for Developers</strong>
													<p className="text-gray-600 text-sm">LinkedIn Learning • August 2023</p>
												</div>
												<a
													href="https://www.linkedin.com/learning/certificates/5968d80287959caaabbe23a484a27f6747d9b09dc905f3d4a757f2b3fb811adf"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													<FaExternalLinkAlt />
												</a>
											</div>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Learning Focus:</strong> Project-based course creating AR
												applications using ARKit and SpriteKit frameworks
											</p>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Key Skills:</strong> ARKit fundamentals, 3D anchoring, SpriteKit
												integration, and practical AR game development
											</p>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
													ARKit
												</span>
												<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
													SpriteKit
												</span>
												<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
													Game Development
												</span>
											</div>
										</li>
									</ul>
								</div>

								<div className="bg-white p-6 rounded-lg shadow-sm">
									<h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
										<span
											style={{ backgroundColor: "#5A827E" }}
											className="w-3 h-3 rounded-full mr-3"
										></span>
										Research & Development Projects
									</h3>
									<ul className="space-y-4">
										<li className="border-l-2 pl-4" style={{ borderLeftColor: "#5A827E" }}>
											<div className="flex items-start justify-between mb-2">
												<div>
													<strong className="text-gray-800">
														Mobile Health Application for Stroke Detection
													</strong>
													<p className="text-gray-600 text-sm">Heliyon Journal (Elsevier) • 2023</p>
												</div>
												<a
													href="https://www.sciencedirect.com/science/article/pii/S2405844023056013"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													<FaExternalLinkAlt />
												</a>
											</div>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Technical Contribution:</strong> Developed iOS app using Swift,
												Computer Vision, and Speech Recognition frameworks for clinical stroke
												assessment
											</p>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Impact:</strong> Implemented 12 of 16 NIH Stroke Scale tasks
												optimized for mobile assessment, validated through 28-day clinical study
												with 25 stroke patients
											</p>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
													Speech Recognition
												</span>
												<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
													Computer Vision
												</span>
												<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
													Healthcare Tech
												</span>
											</div>
										</li>
										<li className="border-l-2 pl-4" style={{ borderLeftColor: "#5A827E" }}>
											<div className="flex items-start justify-between mb-2">
												<div>
													<strong className="text-gray-800">
														Cross-Platform Student Engagement System
													</strong>
													<p className="text-gray-600 text-sm">IEEE MIPRO Conference • 2020</p>
												</div>
												<a
													href="https://ieeexplore.ieee.org/abstract/document/9245224"
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													<FaExternalLinkAlt />
												</a>
											</div>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Technical Contribution:</strong> Developed iOS application as part
												of cross-platform team, collaborating on shared business logic and design
												systems
											</p>
											<p className="text-gray-700 text-sm mb-2">
												<strong>Impact:</strong> Built MVP replacing Google Forms workflow,
												demonstrating streamlined event submission for SJSU engineering students
											</p>
											<div className="flex flex-wrap gap-2 mt-2">
												<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
													Cross-Platform
												</span>
												<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
													iOS Development
												</span>
												<span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
													EdTech
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Call to Action */}
						<section className="bg-white rounded-lg p-8 max-w-4xl mx-auto text-center border border-gray-200">
							<h2 className="text-2xl font-bold mb-4 text-gray-900">
								Interested in Collaborating?
							</h2>
							<p className="text-lg mb-6 leading-relaxed text-gray-600">
								I'm always excited to discuss new projects, share technical insights, or explore
								opportunities to work together on meaningful software solutions.
							</p>
							<div className="space-x-4">
								<a
									href="mailto:phamdan.sj@gmail.com?subject=Project Collaboration"
									style={{ backgroundColor: "#5A827E" }}
									className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 inline-block"
								>
									Start a Conversation
								</a>
								<a
									href="https://github.com/dan-pham"
									target="_blank"
									rel="noopener noreferrer"
									className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-colors duration-300 inline-block"
								>
									View My GitHub
								</a>
							</div>
						</section>
					</div>
				);

			case "about":
				return (
					<div className="py-16 max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<h1 className="text-4xl font-bold mb-4 text-gray-900">About Dan Pham</h1>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
								From iOS specialist to full-stack engineer, here's the story behind the code, the
								experiences that shaped my approach, and what drives me to build great software.
							</p>
						</div>

						{/* Personal Photos Section */}
						<div className="grid md:grid-cols-3 gap-6 mb-16">
							<div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center border border-gray-200">
								<div className="text-center">
									<FaMapMarkerAlt className="text-4xl text-gray-400 mb-2 mx-auto" />
									<span className="text-gray-700 font-medium">Hiking in Bay Area</span>
									<p className="text-xs text-gray-500 mt-1">Nature photos from trails</p>
								</div>
							</div>
							<div
								style={{ backgroundColor: "#5A827E" }}
								className="h-64 rounded-lg flex items-center justify-center"
							>
								<div className="text-center">
									<FaUsers className="text-4xl text-white mb-2 mx-auto" />
									<span className="text-white font-medium">Team Collaboration</span>
									<p className="text-xs text-white opacity-80 mt-1">Working with colleagues</p>
								</div>
							</div>
							<div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center border border-gray-200">
								<div className="text-center">
									<FaCode className="text-4xl text-gray-400 mb-2 mx-auto" />
									<span className="text-gray-700 font-medium">Conference & Learning</span>
									<p className="text-xs text-gray-500 mt-1">Tech events & workshops</p>
								</div>
							</div>
						</div>

						{/* Personal Story */}
						<section className="mb-16">
							<div className="bg-white rounded-lg p-8 shadow-md">
								<h2 className="text-2xl font-semibold mb-6 text-gray-800">My Journey in Tech</h2>
								<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
									<p>
										My journey into software engineering started with curiosity about how mobile
										apps work. What began as tinkering with iOS development in college evolved into
										a 5+ year career building production apps that real people use and depend on.
									</p>
									<p>
										<strong>The turning point came at Destroke</strong>, where I wasn't just
										building another app—I was creating a tool that could help detect strokes and
										potentially save lives. Working directly with medical professionals and seeing
										our app used in clinical trials taught me that great software isn't just about
										clean code; it's about understanding the human impact of what we build.
									</p>
									<p>
										<strong>Leading the team at ActingConnects</strong> opened my eyes to the bigger
										picture of product development. Managing 7 engineers, coordinating with
										designers, and making technical decisions that affected the entire product
										roadmap showed me how much I enjoy the intersection of technology and
										leadership.
									</p>
									<p>
										<strong>Now, I'm expanding into full-stack development</strong> because I want
										to understand the complete product lifecycle. My iOS background gives me a deep
										appreciation for user experience, and I'm bringing that same attention to detail
										to web development, backend architecture, and system design.
									</p>
								</div>
							</div>
						</section>

						{/* Currently Reading */}
						<section className="mb-16 bg-white rounded-lg p-8 shadow-md">
							<h2 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
								<FaBook style={{ color: "#2D5A27" }} className="mr-3" />
								Currently Reading & Recently Completed
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								{currentlyReading.map((book, index) => (
									<div
										key={index}
										style={{ borderLeftColor: "#2D5A27" }}
										className="border-l-4 pl-6"
									>
										<div className="flex items-start justify-between mb-3">
											<div>
												<h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
												<p className="text-gray-600">by {book.author}</p>
											</div>
											<span
												className={`px-3 py-1 rounded-full text-sm font-medium text-white`}
												style={{
													backgroundColor:
														book.status === "Currently Reading" ? "#2D5A27" : "#5A827E",
												}}
											>
												{book.status}
											</span>
										</div>
										<p className="text-gray-700 leading-relaxed italic">"{book.notes}"</p>
									</div>
								))}
							</div>
						</section>

						{/* Values & Approach */}
						<section className="mb-16 bg-gray-50 rounded-lg p-8">
							<h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
								My Engineering Values
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#2D5A27" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											User-Centered Development
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											Every technical decision should ultimately improve the user experience. I've
											seen how thoughtful UX in mobile apps translates to better engagement and user
											satisfaction.
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#5A827E" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											Code as Communication
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											Clean, readable code is essential for team collaboration. I write code that
											tells a story and makes it easy for future developers (including myself) to
											understand and extend.
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#2D5A27" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											Continuous Improvement
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											Technology evolves rapidly, and so should we. I'm always learning new
											patterns, frameworks, and approaches that can make our products better and our
											team more effective.
										</p>
									</div>
								</div>
								<div className="space-y-6">
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#5A827E" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											Cross-Functional Collaboration
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											Great products come from great teamwork. I enjoy working closely with
											designers, product managers, and other engineers to solve complex problems
											together.
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#2D5A27" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											Mentorship & Knowledge Sharing
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											I believe in lifting others up. Whether it's code reviews, pair programming,
											or technical discussions, I'm always happy to share knowledge and learn from
											others.
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-2 flex items-center">
											<span
												style={{ backgroundColor: "#5A827E" }}
												className="w-3 h-3 rounded-full mr-3"
											></span>
											Impact-Driven Development
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											I'm motivated by building software that makes a real difference, whether it's
											helping stroke patients, connecting hiking communities, or empowering actors
											in their careers.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Fun Facts & Personal Interests */}
						<section className="mb-16">
							<h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
								Beyond the Code
							</h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								<div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
									<FaMapMarkerAlt className="text-3xl text-gray-400 mb-3 mx-auto" />
									<h3 className="font-semibold text-gray-800 mb-2">Hiking Enthusiast</h3>
									<p className="text-gray-600 text-sm">
										Building Hike Intel made me fall in love with exploring Bay Area trails. There's
										something about debugging code in nature that just works.
									</p>
								</div>
								<div style={{ backgroundColor: "#5A827E" }} className="p-6 rounded-lg text-center">
									<FaBook className="text-3xl text-white mb-3 mx-auto" />
									<h3 className="font-semibold text-white mb-2">Published Researcher</h3>
									<p className="text-white text-sm">
										Co-authored research in Heliyon journal on mobile health applications. Academic
										rigor meets practical application.
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
									<FaUsers className="text-3xl text-gray-400 mb-3 mx-auto" />
									<h3 className="font-semibold text-gray-800 mb-2">Mentorship Focus</h3>
									<p className="text-gray-600 text-sm">
										I've mentored engineering interns and junior developers. Teaching others helps
										me learn too.
									</p>
								</div>
								<div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
									<FaLaptopCode style={{ color: "#2D5A27" }} className="text-3xl mb-3 mx-auto" />
									<h3 className="font-semibold text-gray-800 mb-2">Future-Minded</h3>
									<p className="text-gray-600 text-sm">
										Currently exploring AI/ML applications and attending conferences like Snowflake
										Dev Day to stay ahead of the curve.
									</p>
								</div>
							</div>
						</section>

						{/* What I'm Looking For */}
						<section className="mb-16 bg-white border border-gray-200 rounded-lg p-8">
							<h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
								What I'm Looking For
							</h2>
							<div className="max-w-4xl mx-auto">
								<p className="text-lg mb-6 text-center leading-relaxed text-gray-600">
									I'm seeking a role where I can contribute my mobile expertise while growing my
									full-stack skills, ideally with a team that values both technical excellence and
									user impact.
								</p>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="text-center">
										<h3 style={{ color: "#2D5A27" }} className="font-semibold mb-2">
											Team Culture
										</h3>
										<p className="text-sm text-gray-600">
											Collaborative, learning-focused environment where everyone's ideas are valued
										</p>
									</div>
									<div className="text-center">
										<h3 style={{ color: "#2D5A27" }} className="font-semibold mb-2">
											Growth Opportunities
										</h3>
										<p className="text-sm text-gray-600">
											Chance to expand full-stack skills while leveraging mobile expertise
										</p>
									</div>
									<div className="text-center">
										<h3 style={{ color: "#2D5A27" }} className="font-semibold mb-2">
											Meaningful Impact
										</h3>
										<p className="text-sm text-gray-600">
											Building products that solve real problems for real people
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Contact Section */}
						<section className="text-center">
							<h2 className="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h2>
							<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
								I'm always interested in connecting with fellow engineers, discussing technology, or
								exploring new opportunities. Feel free to reach out!
							</p>
							<div className="flex justify-center space-x-6">
								<a
									href="mailto:phamdan.sj@gmail.com"
									style={{ backgroundColor: "#5A827E" }}
									className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center"
								>
									<FaEnvelope className="mr-2" />
									Email Me
								</a>
								<a
									href="https://linkedin.com/in/dan-pham-01"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center"
								>
									<FaLinkedin className="mr-2" />
									LinkedIn
								</a>
								<a
									href="https://github.com/dan-pham"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center"
								>
									<FaGithub className="mr-2" />
									GitHub
								</a>
							</div>
						</section>
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
											? "border-b-2 bg-opacity-10"
											: "text-gray-600 hover:bg-gray-50"
									}`}
									style={{
										color: activeTab === tab.id ? "#5A827E" : "#6B7280",
										borderBottomColor: activeTab === tab.id ? "#5A827E" : "transparent",
										backgroundColor: activeTab === tab.id ? "#B9D4AA" : "transparent",
									}}
									onMouseEnter={(e) => {
										if (activeTab !== tab.id) {
											e.currentTarget.style.color = "#5A827E";
										}
									}}
									onMouseLeave={(e) => {
										if (activeTab !== tab.id) {
											e.currentTarget.style.color = "#6B7280";
										}
									}}
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
			<div className="container mx-auto px-4 md:px-8 lg:px-16">{renderTabContent()}</div>

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
							style={{ backgroundColor: "#5A827E" }}
							className="mt-4 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
