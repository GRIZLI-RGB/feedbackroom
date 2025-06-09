import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "i18n/routing";

import "@styles/globals.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const t = await getTranslations({
		locale: params.locale,
		namespace: "metadata",
	});

	return {
		title: t("title"),
		description: t("description"),
		icons: {
			icon: "/favicon.ico",
		},
		metadataBase: new URL("https://feedbackroom.pro"),
		openGraph: {
			title: t("title"),
			description: t("description"),
			url: "https://feedbackroom.pro",
			siteName: "FeedbackRoom",
			images: [
				{
					url: "/og-image.png",
					width: 1200,
					height: 630,
					alt: t("ogImageAlt"),
				},
			],
			locale: params.locale === "ru" ? "ru_RU" : "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: ["/og-image.png"],
		},
	};
}

const inter = Inter({
	subsets: [
		"latin",
		"latin-ext",
		"cyrillic",
		"cyrillic-ext",
		"greek",
		"greek-ext",
	],
	weight: ["300", "400", "500", "600", "700", "800"],
	variable: "--font-inter",
});

export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "ru" }];
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) notFound();

	return (
		<html lang={locale} className={inter.className}>
			<body>
				<NextIntlClientProvider locale={locale}>
					<div className="min-h-screen flex flex-col">{children}</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
