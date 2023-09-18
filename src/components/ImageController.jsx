import React from 'react';
import axios from 'axios';
import { button, useControls } from 'leva';

const ImageController = ({ watermarkImage }) => {
	const controls = useControls({
		Text: 'Watermark AI',
		['Font Size']: {
			min: 0,
			max: 40,
			value: 4,
			step: 0.1,
			suffix: 'cm',
		},
		Button: button(() => watermarkImage()),
		Color: '#00ff00',
		Transparancy: {
			min: 0,
			max: 40,
			value: 4,
			step: 0.1,
			suffix: 'cm',
		},
		Position: {
			value: 'Center',
			options: [
				'Top Left',
				'Top Center',
				'Top Right',
				'Center Left',
				'Center',
				'Center Right',
				'Bottom Left',
				'Bottom Center',
				'Bottom Right',
			],
		},
	});

	return <div></div>;
};

export default ImageController;
