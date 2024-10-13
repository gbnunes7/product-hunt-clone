"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MotionPage = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const variants = {
		initial: { opacity: 0, y: 0 },
		enter: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -50 },
	};

	return (
		<motion.div
			key={pathname}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

export default MotionPage;
