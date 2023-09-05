import Image from 'next/image';
import React from 'react';
import { GoChevronRight } from 'react-icons/go';

const Heropage2 = () => {
	return (
		<div className='p-4 dark:bg-gray-800 dark:text-gray-100 w-full'>
			<div className='container'>
				<h1 className='text-4xl font-bold text-center'>Most Popular Tools</h1>
				<p className='text-center my-5 m-auto'>
					Protect Your Digital Assets with Precision: PDF and Image Watermarking Made Effortless!
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-5xl m-auto'>
					<div className='bg-gray-100 min-w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
					<div className='bg-gray-100 w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
					<div className='bg-gray-100 w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
					<div className='bg-gray-100 w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
					<div className='bg-gray-100 w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
					<div className='bg-gray-100 w-[20rem] h-32 flex items-start p-2 py-3 gap-1 tools-card'>
						<div className='mr-3'>
							<Image src={'/icons/word.svg'} width={60} height={60} alt='word' />
						</div>
						<div className='w-10/12 pt-1'>
							<h4 className='font-bold'>PDF to Word</h4>
							<p className='text-sm w-10/12 font-medium'>Convert PDFs to editable word document</p>
						</div>
						<div className='w-2/12'>
							<GoChevronRight className='text-2xl' />
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<button className='px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 shadow-md'>
						Get Premium
					</button>
				</div>
			</div>
		</div>
	);
};

export default Heropage2;
