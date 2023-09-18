import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { useRouter } from 'next/router';

export const toggleToolsContext = createContext();

export default function App({ Component, pageProps }) {
	const [toggleTools, setToggleTools] = useState(false);
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', () => {
			setToggleTools(false);
		});
		return () => {
			router.events.off('routeChangeComplete', () => {
				setToggleTools(false);
			});
		};
	}, []);

	return (
		<main className='flex flex-col justify-center items-center dark:bg-gray-800 dark:text-gray-100'>
			<toggleToolsContext.Provider value={{ toggleTools, setToggleTools }}>
				<Navbar />
				<Component {...pageProps} toggleTools={toggleTools} />
				<Footer />
			</toggleToolsContext.Provider>
		</main>
	);
}
