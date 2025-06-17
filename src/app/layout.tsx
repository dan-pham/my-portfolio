import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter"
});

export const metadata: Metadata = {
	title: "Dan Pham - Software Engineer",
	description: "Portfolio of Dan Pham, iOS and Full-Stack Developer",
	keywords: ["Software Engineer", "iOS Developer", "Full-Stack Developer", "React", "Swift"],
	openGraph: {
		title: "Dan Pham - Software Engineer Portfolio",
		description: "Showcasing innovative software solutions and technical expertise",
		type: "website",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth`}>
			<body className="bg-gray-50 text-gray-900 font-sans antialiased">
				<div className="min-h-screen flex flex-col">{children}</div>
			</body>
		</html>
	);
}
