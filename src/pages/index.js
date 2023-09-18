import Image from 'next/image';
import { Inter } from 'next/font/google';
import Heropage from '@/components/Heropage';
import Heropage2 from '@/components/Heropage2';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Premium from '@/components/Premium';
import FAQ from '@/components/FAQ';
import Price from '@/components/Price';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ toggleTools }) {
	return (
		<div className={`container ${toggleTools && 'opacity-40'}`}>
			<Heropage />
			<Heropage2 />
			<Features />
			<Reviews />
			{/* <Premium /> */}
			<Price />
			<FAQ />
		</div>
	);
}
