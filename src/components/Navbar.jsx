import Image from 'next/image';
import { React, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IconContext } from 'react-icons';

const Navbar = ({ toggleTools, setToggleTools }) => {
	console.log(toggleTools);
	return (
		<>
			<header className='py-2 dark:bg-gray-800 dark:text-gray-100 w-full flex justify-center items-center'>
				<div className='w-full flex justify-between h-16 mx-auto border-gray-800 dark:border-gray-100 border-b-2'>
					<div className='flex'>
						<a rel='noopener noreferrer' href='#' aria-label='Back to homepage' className='flex items-center p-2'>
							<Image src={'/icons/logo2.png'} width={100} height={100} alt='logo' />
						</a>
						<div className='my-auto'>
							<ul className='items-stretch hidden space-x-3 lg:flex'>
								<li className={`flex ${toggleTools && 'text-blue-600'}`} onClick={e => setToggleTools(!toggleTools)}>
									<a rel='noopener noreferrer' href='#' className='flex items-center px-4 -mb-1 dark:border-transparent'>
										<Image src={'/icons/dot.svg'} width={100} height={100} alt='dot' className='w-7 h-7 mr-2' />
										Tools
										<IoMdArrowDropdown className={`ml-2 ${toggleTools && 'rotate-180 text-blue-600'}`} />
									</a>
								</li>
								<li className='flex'>
									<a
										rel='noopener noreferrer'
										href='#'
										className='flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400'>
										Watermark
									</a>
								</li>
								<li className='flex'>
									<a rel='noopener noreferrer' href='#' className='flex items-center px-4 -mb-1 dark:border-transparent'>
										Compress
									</a>
								</li>
								<li className='flex'>
									<a rel='noopener noreferrer' href='#' className='flex items-center px-4 -mb-1 dark:border-transparent'>
										Convert
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='flex items-center md:space-x-4'>
						<div>
							<ul className='items-stretch hidden space-x-3 lg:flex'>
								<li className='flex'>
									<a
										rel='noopener noreferrer'
										href='#'
										className='flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400'>
										How-tos
									</a>
								</li>
								<li className='flex'>
									<a rel='noopener noreferrer' href='#' className='flex items-center px-4 -mb-1 dark:border-transparent'>
										Pricing
									</a>
								</li>
								<li className='flex'>
									<a rel='noopener noreferrer' href='#' className='flex items-center px-4 -mb-1 dark:border-transparent'>
										Support
									</a>
								</li>
							</ul>
						</div>
						<button
							type='button'
							className='hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900'>
							Log in
						</button>
					</div>
					<button title='Open menu' type='button' className='p-4 lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='w-6 h-6 dark:text-gray-100'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
					</button>
				</div>
				{toggleTools && (
					<aside className='absolute z-10 top-20 p-6 w-60 dark:bg-gray-900 dark:text-gray-100 bg-white sm:w-full m-auto container'>
						<nav className='space-y-8 sm:space-y-0 text-sm w-full grid grid-cols-4'>
							<div className='space-y-2'>
								<h2 className='text-sm font-semibold tracki uppercase dark:text-gray-400'>Getting Started</h2>
								<div className='flex flex-col space-y-1'>
									<a rel='noopener noreferrer' href='#'>
										Installation
									</a>
									<a rel='noopener noreferrer' href='#'>
										Plugins
									</a>
									<a rel='noopener noreferrer' href='#'>
										Migrations
									</a>
									<a rel='noopener noreferrer' href='#'>
										Appearance
									</a>
									<a rel='noopener noreferrer' href='#'>
										Mamba UI
									</a>
								</div>
							</div>
							<div className='space-y-2'>
								<h2 className='text-sm font-semibold tracki uppercase dark:text-gray-400'>Dashboard</h2>
								<div className='flex flex-col space-y-1'>
									<a rel='noopener noreferrer' href='#'>
										Header
									</a>
									<a rel='noopener noreferrer' href='#'>
										Drawer
									</a>
									<a rel='noopener noreferrer' href='#'>
										Page Title
									</a>
									<a rel='noopener noreferrer' href='#'>
										Menus
									</a>
									<a rel='noopener noreferrer' href='#'>
										Sidebar
									</a>
									<a rel='noopener noreferrer' href='#'>
										Footer
									</a>
								</div>
							</div>
							<div className='space-y-2'>
								<h2 className='text-sm font-semibold tracki uppercase dark:text-gray-400'>Pages</h2>
								<div className='flex flex-col space-y-1'>
									<a rel='noopener noreferrer' href='#'>
										Homepage
									</a>
									<a rel='noopener noreferrer' href='#'>
										Users
									</a>
									<a rel='noopener noreferrer' href='#'>
										Tools
									</a>
									<a rel='noopener noreferrer' href='#'>
										Settings
									</a>
								</div>
							</div>
							<div className='space-y-2'>
								<h2 className='text-sm font-semibold tracki uppercase dark:text-gray-400'>Misc</h2>
								<div className='flex flex-col space-y-1'>
									<a rel='noopener noreferrer' href='#'>
										Tutorials
									</a>
									<a rel='noopener noreferrer' href='#'>
										Changelog
									</a>
								</div>
							</div>
						</nav>
					</aside>
				)}
			</header>
		</>
	);
};

export default Navbar;
