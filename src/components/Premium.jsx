import Link from 'next/link';
import React from 'react';

const Premium = () => {
	return (
		<section className='py-6 dark:bg-gray-800 dark:text-gray-50 my-10'>
			<div className='container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row'>
				<div className='flex flex-col space-y-4 text-center lg:text-left'>
					<h1 className='text-5xl font-bold leadi'>Get more with Premium</h1>
					<p className='text-lg'>
						Elevate Your Digital Asset Protection to the Next Level with Premium: Discover the Ultimate Ease and Power of PDF
						and Image Watermarking, and Get More Value for Your Investment!
					</p>
				</div>
				<div className='flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end'>
					<div className='flex flex-row'>
						<Link className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900' href={'/price'}>
							Get Premium
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Premium;
