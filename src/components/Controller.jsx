import React from 'react';
import ControlPanel, { Button, Text, Color, Range } from 'react-control-panel';
import axios from 'axios';
import Head from 'next/head';

const Controller = ({ pdfUrl }) => {
	async function handleDownload(e) {
		e.preventDefault();
		let formData = new FormData();

		console.log(pdfUrl);
		try {
			await fetch(pdfUrl)
				.then(async response => await response.blob())
				.then(blob => {
					formData.append('pdf', blob);
				});
		} catch (error) {
			console.log('error');
		}

		try {
			const res = await axios.post('/api/pdf/watermark', formData, {
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
	const initialState = {
		'Font Size': 20,
		text: 'Watermark AI',
		'color hex': '#30b2ba',
	};

	return (
		<div>
			<Head>
				<style type='text/css' rel='stylesheet' href='//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css'></style>
			</Head>
			<ControlPanel
				theme='dark'
				title='Demo Panel'
				initialState={initialState}
				onChange={console.log}
				width={500}
				height={100}
				style={{ marginRight: 30 }}>
				<Range label='Font Size' min={0} max={100} />
				<Text label='text' />
				<Color label='color hex' format='hex' />
				<Button label='gimme an alert' action={() => alert('clicked')} />
				<Button label='Download PDF' action={e => handleDownload(e)} />
			</ControlPanel>
		</div>
	);
};

export default Controller;
