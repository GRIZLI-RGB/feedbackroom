import { AnimatedGridPattern } from "@components/magicui/animated-grid-pattern";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className={`min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-12`}
		>
			<div className="fixed left-0 right-0 top-0 bottom-0">
				<AnimatedGridPattern
					width={64}
					height={64}
					numSquares={180}
					maxOpacity={0.5}
					strokeDasharray={4}
					duration={2}
					repeatDelay={1.5}
					className="absolute inset-0 -z-10 w-full h-full text-white/10"
				/>
			</div>

			<div className="z-10 relative">{children}</div>
		</div>
	);
}
