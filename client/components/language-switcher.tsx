"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { Locale, useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "i18n/navigation";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function LanguageSwitcher() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	const locale = useLocale();

	const handleChangeLanguage = () => {
		const nextLocale: Locale = locale === "ru" ? "en" : "ru";

		startTransition(() => {
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			router.replace({ pathname, params }, { locale: nextLocale });
		});
	};

	return (
		<button
			disabled={isPending}
			onClick={handleChangeLanguage}
			className={clsx(
				"text-gray-500 hover:text-blue-600 transition-colors flex items-center",
				isPending && "transition-opacity [&:disabled]:opacity-30"
			)}
		>
			<GlobeAltIcon className="h-5 w-5 mr-1" />
			{locale === "ru" ? "Русский" : "English"}
		</button>
	);
}
