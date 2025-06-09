import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Link } from "i18n/navigation";

export default function Logo({ className }: { className?: string }) {
	return (
		<Link
			href="/"
			className={clsx("inline-flex items-center space-x-3", className)}
		>
			<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
				<ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-white" />
			</div>
			<span className="text-xl font-bold text-blue-600">
				FeedbackRoom
			</span>
		</Link>
	);
}
