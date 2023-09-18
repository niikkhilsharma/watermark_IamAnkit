import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import ImageController from '@/components/ImageController';
import axios, { all } from 'axios';

const Edit = () => {
	const router = useRouter();
	const allImgUrl = [];

	const imgUrl = router.query.imgUrl;
	const formData = new FormData();

	try {
		const imagesUrl = JSON.parse(imgUrl);
		Object.entries(imagesUrl).forEach(([key, value]) => {
			allImgUrl.push(value);
		});

		// for (const values of allImgUrl) {
		// 	const index = 1;
		// 	console.log(values);
		// 	fetch(values)
		// 		.then(async response => await response.blob())
		// 		.then(blob => {
		// 			formData.append(index, blob);
		// 		});
		// 	i++;
		// }
		allImgUrl.forEach((values, index) => {
			console.log(index);
			fetch(values)
				.then(async response => await response.blob())
				.then(blob => {
					formData.append(index, blob);
				});
		});
	} catch (error) {
		// console.log('error', error);
	}

	async function watermarkImage() {
		try {
			const res = await axios.post('/api/image/watermark', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				responseType: 'blob',
			});

			const blob = new Blob([res.data], { type: 'application/pdf' });
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = 'watermarked.pdf';
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			console.log('Blob size:', blob.size);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<div>
			<Head>
				<style type='text/css' rel='stylesheet' href='//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css'></style>
			</Head>

			<div className='flex max-lg:flex-wrap w-full justify-center p-10'>
				<div className='carousel carousel-center max-sm:max-w-md p-4 space-x-4 bg-neutral rounded-box'>
					{allImgUrl.map((imgUrl, index) => (
						<div className='carousel-item' key={index}>
							<Image src={imgUrl} width={100} height={100} alt='img' style={{ width: 'auto', height: 'auto' }} />
						</div>
					))}
				</div>

				<ImageController watermarkImage={watermarkImage} />
			</div>
		</div>
	);
};

export default Edit;
