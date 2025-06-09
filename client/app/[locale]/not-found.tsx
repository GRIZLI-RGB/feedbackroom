import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NotFoundPage() {
	const t = useTranslations("pages.notFound");

	return (
		<div className="min-h-screen bg-white text-gray-800 flex flex-col">
			<main className="flex-grow flex items-center justify-center py-10 px-6">
				<div className="container mx-auto px-6 text-center">
					<div className="max-w-2xl mx-auto">
						<h1 className="text-8xl md:text-9xl font-bold text-gray-300 mb-6">
							404
						</h1>

						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							{t("title")}
						</h2>

						<p className="text-lg text-gray-600 mb-10">
							{t("description")}
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="/"
								className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
							>
								{t("goHome")}
								<ArrowRightIcon className="ml-2 h-5 w-5" />
							</Link>

							<Link
								href="/dashboard"
								className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
							>
								{t("goDashboard")}
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
