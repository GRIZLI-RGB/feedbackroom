"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "motion/react";
import CountUp from "react-countup";
import {
	ChatBubbleBottomCenterTextIcon,
	ArrowUpRightIcon,
	PuzzlePieceIcon,
	LinkIcon,
	CogIcon,
	ChevronDownIcon,
	AdjustmentsHorizontalIcon,
	ArrowTrendingUpIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

import LanguageSwitcher from "@components/language-switcher";
import Logo from "@components/logo";

export default function Home() {
	const t = useTranslations("landing");

	const projectsData = [
		{
			id: 1,
			name: "Product Feedback v2.0",
			isPublic: true,
			lastUpdated: "2 hours ago",
			responseCount: 128,
			tags: ["UX Research", "Beta", "High Priority"],
			teamMembers: [
				{ initials: "JD", color: "bg-blue-200 text-blue-800" },
				{ initials: "AS", color: "bg-green-200 text-green-800" },
				{ initials: "MP", color: "bg-purple-200 text-purple-800" },
				{ initials: "TW", color: "bg-yellow-200 text-yellow-800" },
			],
		},
		{
			id: 2,
			name: "Internal Team Satisfaction",
			isPublic: false,
			lastUpdated: "1 week ago",
			responseCount: 24,
			tags: ["HR", "Confidential"],
			teamMembers: [
				{ initials: "HR", color: "bg-red-200 text-red-800" },
				{ initials: "CEO", color: "bg-indigo-200 text-indigo-800" },
			],
		},
		{
			id: 3,
			name: "Feature Voting Portal",
			isPublic: true,
			lastUpdated: "Just now",
			responseCount: 356,
			tags: ["Roadmap", "Voting"],
			teamMembers: [
				{ initials: "PM", color: "bg-pink-200 text-pink-800" },
				{ initials: "DEV", color: "bg-gray-200 text-gray-800" },
				{ initials: "CS", color: "bg-teal-200 text-teal-800" },
			],
		},
	];

	// Stats data
	const stats = [
		{ value: 89, label: "Client satisfaction", suffix: "%" },
		{ value: 24, label: "Average response time", suffix: "h" },
		{ value: 5000, label: "Active feedback boards" },
	];

	const useCases = [
		{
			title: "Product Teams",
			description: "Get real user feedback on new features",
			icon: PuzzlePieceIcon,
			color: "bg-blue-100 text-blue-600",
		},
		{
			title: "Startups",
			description: "Validate your MVP with target audience",
			icon: ArrowUpRightIcon,
			color: "bg-purple-100 text-purple-600",
		},
		{
			title: "HR Teams",
			description: "Collect anonymous employee feedback",
			icon: ChatBubbleBottomCenterTextIcon,
			color: "bg-teal-100 text-teal-600",
		},
	];

	return (
		<div className="min-h-screen bg-white text-gray-800">
			{/* Header */}
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: "spring", stiffness: 300 }}
				className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
			>
				<div className="container mx-auto px-6 pt-3 pb-3.5 flex justify-between items-center">
					<Logo />

					<div className="flex items-center space-x-4">
						<LanguageSwitcher />

						<Link
							href="/dashboard"
							className="relative group px-4 py-2.5 font-medium"
						>
							<span className="relative z-10 flex items-center text-blue-600 group-hover:text-blue-700">
								Dashboard
								<ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</span>
							<span className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
						</Link>
					</div>
				</div>
			</motion.header>

			{/* Hero Section */}
			<section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
				<div className="container mx-auto px-6">
					<div className="flex flex-col lg:flex-row items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="lg:w-1/2 mb-12 lg:mb-0"
						>
							<div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
								New Feature: Embedded Widgets
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
								Collect{" "}
								<span className="text-blue-600">
									Honest Feedback
								</span>{" "}
								for Your Product
							</h1>
							<p className="text-lg text-gray-600 mb-10">
								Create feedback boards, share with your
								audience, and get actionable insights to improve
								your product or service.
							</p>
							<div className="flex flex-wrap gap-4">
								<button>
									<Link
										href="/dashboard"
										className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
									>
										Create Feedback Board
										<ArrowUpRightIcon className="ml-2 h-5 w-5" />
									</Link>
								</button>

								<button>
									<a
										href="#integrations"
										className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
									>
										See Integration Options
									</a>
								</button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="lg:w-1/2 lg:pl-12"
						>
							<div className="relative">
								{/* Шаг 1 */}
								<div className="bg-white p-5 rounded-xl border-2 border-blue-200 shadow-sm z-10 relative">
									<div className="flex items-start">
										<div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
											1
										</div>
										<div>
											<h4 className="font-medium text-gray-900">
												Create board
											</h4>
											<p className="text-gray-600 text-sm">
												Name your project and customize
											</p>
										</div>
									</div>
								</div>

								{/* Шаг 2 */}
								<div className="bg-white p-5 rounded-xl border-2 border-gray-200 mt-4 ml-8 relative z-0">
									<div className="flex items-start">
										<div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
											2
										</div>
										<div>
											<h4 className="font-medium text-gray-900">
												Share link
											</h4>
											<p className="text-gray-600 text-sm">
												Send to customers or embed
											</p>
										</div>
									</div>
								</div>

								{/* Шаг 3 */}
								<div className="bg-white p-5 rounded-xl border-2 border-gray-200 mt-4 ml-16 relative z-0">
									<div className="flex items-start">
										<div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
											3
										</div>
										<div>
											<h4 className="font-medium text-gray-900">
												Get insights
											</h4>
											<p className="text-gray-600 text-sm">
												Analyze feedback in dashboard
											</p>
										</div>
									</div>
								</div>

								<div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-100/30 rounded-full -z-10"></div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.02 }}
								className="group relative overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="relative bg-white p-8 rounded-xl border-2 border-gray-200 group-hover:border-blue-400 transition-all h-full">
									<div className="flex items-end space-x-2 mb-2">
										<div className="text-4xl md:text-5xl font-bold text-blue-600">
											<CountUp
												end={stat.value}
												duration={3}
												suffix={stat.suffix || ""}
											/>
										</div>
										{index === 0 && (
											<div className="text-blue-400 mb-1.5">
												<ArrowTrendingUpIcon className="h-8 w-8" />
											</div>
										)}
									</div>
									<div className="text-gray-600">
										{stat.label}
									</div>
									<div className="absolute bottom-4 right-4 text-blue-100 group-hover:text-blue-200 transition-colors text-7xl font-bold -z-10">
										{index + 1}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Use Cases */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Who Uses{" "}
							<span className="text-blue-600">FeedbackRoom</span>?
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Trusted by teams across industries to collect honest
							feedback
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{useCases.map((useCase, index) => {
							const Icon = useCase.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									whileHover={{ y: -3 }}
									className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all"
								>
									<div
										className={`w-12 h-12 ${useCase.color} rounded-lg flex items-center justify-center mb-6`}
									>
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="text-xl font-semibold mb-3">
										{useCase.title}
									</h3>
									<p className="text-gray-600">
										{useCase.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Dashboard Preview */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="flex flex-col lg:flex-row items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Powerful{" "}
								<span className="text-blue-600">Dashboard</span>
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Manage all your feedback boards in one place.
								Create projects, track responses, and analyze
								feedback trends.
							</p>
							<ul className="space-y-4">
								{[
									"Create unlimited feedback boards",
									"Set up custom questions",
									"View analytics and metrics",
									"Export data to CSV",
									"Team collaboration features",
								].map((item, index) => (
									<li
										key={index}
										className="flex items-start"
									>
										<div className="flex-shrink-0 mt-1">
											<div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
											</div>
										</div>
										<span className="ml-3 text-gray-700">
											{item}
										</span>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden relative">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-30"></div>
								<div className="relative z-10">
									{/* Header */}
									<div className="flex items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
										<div className="flex space-x-2 mr-3">
											<div className="w-3 h-3 rounded-full bg-red-500"></div>
											<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
											<div className="w-3 h-3 rounded-full bg-green-500"></div>
										</div>
										<div className="text-sm text-gray-500">
											Dashboard • My Projects
										</div>
									</div>

									{/* Content */}
									<div className="p-6">
										<div className="flex items-center justify-between mb-6">
											<h3 className="font-medium text-gray-800">
												Your Feedback Boards
											</h3>
											<div className="flex items-center space-x-2">
												<div className="relative">
													<button className="flex items-center space-x-1.5 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
														<span className="text-gray-600">
															Recent
														</span>
														<ChevronDownIcon className="pt-0.5 w-3.5 text-gray-500" />
													</button>
													{/* Dropdown would go here */}
												</div>
												<button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
													<AdjustmentsHorizontalIcon className="h-5 w-5" />
												</button>
											</div>
										</div>
										{/* Projects List */}
										<div className="space-y-4">
											{projectsData.map((project) => (
												<div
													key={project.id}
													className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors group"
												>
													<div className="flex items-start justify-between">
														<div className="flex-1 min-w-0">
															<div className="flex items-center space-x-2">
																<h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
																	{
																		project.name
																	}
																</h4>
																{project.isPublic ? (
																	<span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 rounded">
																		Public
																	</span>
																) : (
																	<span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded">
																		Private
																	</span>
																)}
															</div>
															<p className="text-sm text-gray-500 mt-1">
																Last updated{" "}
																{
																	project.lastUpdated
																}
															</p>
														</div>
														<div className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2">
															<ArrowUpRightIcon className="h-5 w-5" />
														</div>
													</div>

													<div className="mt-3 flex items-center justify-between">
														<div className="text-sm text-gray-600">
															<span className="font-medium">
																{
																	project.responseCount
																}
															</span>{" "}
															responses
														</div>
														<div className="flex items-center space-x-2">
															{project.tags
																.length > 0 && (
																<div className="flex space-x-1">
																	{project.tags
																		.slice(
																			0,
																			2
																		)
																		.map(
																			(
																				tag
																			) => (
																				<span
																					key={
																						tag
																					}
																					className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded"
																				>
																					{
																						tag
																					}
																				</span>
																			)
																		)}
																	{project
																		.tags
																		.length >
																		2 && (
																		<span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded">
																			+
																			{project
																				.tags
																				.length -
																				2}
																		</span>
																	)}
																</div>
															)}
															<div className="flex -space-x-2">
																{project.teamMembers
																	.slice(0, 3)
																	.map(
																		(
																			member,
																			i
																		) => (
																			<div
																				key={
																					i
																				}
																				className={`w-6 h-6 rounded-full ${member.color} border-2 border-white flex items-center justify-center text-xs font-medium`}
																			>
																				{
																					member.initials
																				}
																			</div>
																		)
																	)}
																{project
																	.teamMembers
																	.length >
																	3 && (
																	<div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs text-blue-600">
																		+
																		{project
																			.teamMembers
																			.length -
																			3}
																	</div>
																)}
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Integrations */}
			<section id="integrations" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Seamless{" "}
							<span className="text-blue-600">Integrations</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Multiple ways to collect feedback from your audience
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{/* Embed Widget */}
						<div className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-colors flex flex-col">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<PuzzlePieceIcon className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold mb-3">
								Embed Widget
							</h3>
							<p className="text-gray-600 mb-6">
								Just paste the desired iframe
							</p>

							<div className="mt-auto bg-gray-100 p-3 rounded-md font-mono text-sm text-gray-700 truncate">
								&lt;iframe src={'"'}
								feedbackroom.pro/embed/your-project-id{'"'}
								/&gt;
							</div>
						</div>

						{/* Shareable Link */}
						<div className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-colors flex flex-col">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<LinkIcon className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold mb-3">
								Shareable Link
							</h3>
							<p className="text-gray-600 mb-6">
								Send a simple URL to your customers
							</p>
							<div className="mt-auto bg-gray-100 p-3 rounded-md text-sm text-blue-600 break-all">
								feedbackroom.pro/your-product
							</div>
						</div>

						{/* Coming Soon: API */}
						<div className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors flex flex-col relative">
							<div className="absolute top-4 right-4 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
								Coming Soon
							</div>
							<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
								<CogIcon className="h-6 w-6 text-gray-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-500">
								API Integration
							</h3>
							<p className="text-gray-400 mb-6">
								Connect with your existing tools
							</p>
							<div className="mt-auto bg-gray-100 p-3 rounded-md font-mono text-sm text-gray-400">
								POST /api/v1/feedback
							</div>
						</div>
					</div>

					{/* Additional Integration Options */}
					<div className="mt-16 bg-white rounded-xl border-2 border-gray-200 p-8 max-w-4xl mx-auto">
						<div className="flex flex-col md:flex-row items-center justify-between">
							<div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
								<h3 className="text-xl font-semibold mb-3">
									Need a custom solution?
								</h3>
								<p className="text-gray-600">
									We can build a custom integration for your
									specific workflow and tools.
								</p>
							</div>
							<div>
								<a
									target="_blank"
									href="https://t.me/hackman_prog"
									className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors w-full md:w-auto"
								>
									Contact Sales
									<ArrowUpRightIcon className="ml-2 h-4 w-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
				<div className="container mx-auto px-6 text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Get Better Feedback?
						</h2>
						<p className="text-xl text-blue-100 mb-10">
							Start collecting honest feedback from your users
							today
						</p>
						<div className="relative inline-block group">
							<div className="absolute inset-0 bg-white/20 rounded-lg group-hover:animate-wave transition-all duration-300"></div>
							<Link
								href="/dashboard"
								className="relative inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
							>
								Create Your First Board
								<ArrowUpRightIcon className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 bg-white border-t border-gray-200">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
						<div>
							<Logo className="mb-4" />
							<p className="text-gray-500">
								{t("footer.description")}
							</p>
						</div>

						{[
							{
								title: "Company",
								items: [
									{
										text: "Cases",
										link: "#cases",
										target: undefined,
									},
									{
										text: "Integrations",
										link: "#integrations",
										target: undefined,
									},
								],
							},
							{
								title: "Legal",
								items: [
									{
										text: "Privacy policy",
										link: "/privacy-policy",
										target: "_blank",
									},
									{
										text: "Terms of use",
										link: "/terms-of-use",
										target: "_blank",
									},
								],
							},
						].map((category) => (
							<div key={category.title}>
								<h3 className="text-lg font-semibold text-gray-800 mb-4">
									{category.title}
								</h3>
								<ul className="space-y-3">
									{category.items.map((item) => (
										<li key={item.text}>
											<a
												target={item.target}
												href={item.link}
												className="text-gray-500 hover:text-blue-600 transition-colors"
											>
												{item.text}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-500 mb-4 md:mb-0">
							© {new Date().getFullYear()} FeedbackRoom. All
							rights reserved.
						</div>
						<div className="flex space-x-6">
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
