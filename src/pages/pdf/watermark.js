import React, { useState, useEffect } from 'react'; // Combine the imports
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';

const watermark = () => {
	const router = useRouter();

	async function handleChange(e) {
		const pdfBlob = new Blob([e.target.files[0]], { type: 'application/pdf' });
		const pdfUrl = URL.createObjectURL(pdfBlob);
		console.log('pdfUrl', pdfUrl);

		router.push(`/pdf/watermark-edit?pdfUrl=${pdfUrl}`);
		// document.querySelector('embed').src = pdfUrl;
	}
	useEffect(() => {
		localStorage.setItem('reload', 'nikhil');
	}, []);

	return (
		<>
			<div className='relative w-full -mb-10'>
				<div className='min-h-[90vh] h-[90vh] max-h-[90vh] bg-[#16191c] overflow-hidden flex justify-center items-center w-full'>
					<div className='w-[140vh] h-[140vh] bg-[#19212a] rounded-full p-20 flex justify-center items-center'>
						<div className='w-[100vh] h-[100vh] flex bg-[#1d2835] justify-center items-center rounded-full p-20'>
							<div className='w-[65vh] h-[65vh] flex justify-center bg-[#1e3044] items-center rounded-full p-20'>
								<label htmlFor='file-upload' className='file-label'>
									<div className='w-[37vh] h-[37vh] flex justify-center items-center rounded-full p-2 relative z-10 overflow-visible bg-white flex-col px-8 cursor-pointer'>
										<Image src={'/icons/folder.svg'} width={100} height={100} alt='img' />
										<h2 className='text-xl text-center my-4 font-bold text-black'>Click here to upload your PDf</h2>
										<div className='text-black inline z-10'>
											<form action='#'>
												Or, <span className='underline'>browse to upload</span>
												<input
													type='file'
													accept='.pdf'
													id='file-upload'
													name='pdf'
													className='hidden'
													onChange={e => handleChange(e)}
												/>
											</form>
										</div>
										<div className='h-[40vh] w-[40vh] border-white border-dashed border-4 rounded-full absolute animate-spin-slow'></div>
									</div>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-10 sm:bottom-16 md:bottom-10 lg:bottom-12 w-full text-white px-2'>
					<h1 className='text-4xl sm:text-6xl md:text-7xl text-center font-bold'>Click Me. It’s online.</h1>
					<p className='text-center sm:text-2xl md:text-4xl px-8 sm:p-0 text-xl mt-4'>
						Upload your pdf here and let us do the Magic.
					</p>
				</div>
			</div>
			{/* <embed src='' type='application/pdf' width={'100%'} height={'600px'} /> */}
		</>
	);
};

export default watermark;
