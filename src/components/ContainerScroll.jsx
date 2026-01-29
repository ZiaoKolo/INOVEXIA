import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

// ensure `motion` is referenced to satisfy some linters that don't detect JSX usage
void motion;

export const ContainerScroll = ({ titleComponent, children, heightClass = 'h-[50rem] md:h-[70rem]' }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef });
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const scaleDimensions = () => (isMobile ? [0.95, 1] : [1.05, 1]);

	const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
	const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<div className={`${heightClass} flex items-center justify-center relative p-4 md:p-12`} ref={containerRef}>
			<div className="w-full py-8 md:py-20 relative" style={{ perspective: '1000px' }}>
				{titleComponent && (
					<motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center mb-6">
						{titleComponent}
					</motion.div>
				)}

				<motion.div
					style={{ rotateX: rotate, scale, translateY: translate }}
					className="max-w-7xl mx-auto bg-transparent"
				>
					{children}
				</motion.div>
			</div>
		</div>
	);
};

export default ContainerScroll;
