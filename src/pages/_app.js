import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
	const [toggleTools, setToggleTools] = useState(false);

	return (
		<main className='flex flex-col justify-center items-center dark:bg-gray-800 dark:text-gray-100'>
			<Navbar toggleTools={toggleTools} setToggleTools={setToggleTools} />
			<Component {...pageProps} toggleTools={toggleTools} />
			<Footer toggleTools={toggleTools} />
		</main>
	);
}
