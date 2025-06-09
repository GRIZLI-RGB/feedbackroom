import { X } from "lucide-react";
import {
	Modal as ResponsiveModal,
	ModalProps as ResponsiveModalProps,
} from "react-responsive-modal";

import "react-responsive-modal/styles.css";

interface CustomModalProps extends ResponsiveModalProps {
	children: React.ReactNode;
}

export default function Modal(props: CustomModalProps) {
	return (
		<ResponsiveModal
			center
			classNames={{
				overlay: "backdrop-blur-sm bg-black/50",
				modal: "rounded-2xl p-0 max-w-2xl w-full",
			}}
			closeIcon={<X size={24} className="text-gray-500" />}
			{...props}
		>
			{props.children}
		</ResponsiveModal>
	);
}
