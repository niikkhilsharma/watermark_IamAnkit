import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Controller from '@/components/Controller';

const Edit = () => {
	const router = useRouter();
	const pdfUrl = router.query.pdfUrl;

	useEffect(() => {
		document.querySelector('embed').src = pdfUrl;
	}, []);

	return (
		<div className='w-full flex justify-center items-start p-4 py-8'>
			<Head>
				<style type='text/css' rel='stylesheet' href='//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css'></style>
			</Head>
			<div className='flex max-lg:flex-wrap w-full justify-center'>
				<embed type='application/pdf' width={800} height={500} title='PDF' />
				<Controller pdfUrl={pdfUrl} />
			</div>
		</div>
	);
};

export default Edit;
