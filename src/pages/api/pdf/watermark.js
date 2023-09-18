import { createRouter } from 'next-connect';
import { NextResponse } from 'next/server';
import multer from 'multer';
import fs from 'fs';
import { PDFDocument, rgb, degrees } from 'pdf-lib';

const storage = multer.diskStorage({
	destination: 'public/uploads/',
	filename: function (req, file, cb) {
		cb(null, file.originalname + '.pdf');
	},
});

const upload = multer({ storage: storage });
const router = createRouter();

router.use(upload.any());
router.post(async (req, res) => {
	const file = req.files[0];
	const pdfBuffer = fs.readFileSync(file.destination + file.filename);
	const pdfDoc = await PDFDocument.load(pdfBuffer);

	// Add a text watermark to each page
	const watermarkText = 'Nikhil Sharma';

	const pages = pdfDoc.getPages();
	for (const page of pages) {
		const { width, height } = page.getSize();
		const fontSize = 48;

		// Create a text annotation for the watermark
		const textAnnotation = page.drawText(watermarkText, {
			// x: width / 2 - (watermarkText.length * fontSize) / 3,
			// y: height / 2,
			x: 100,
			y: 100,
			size: fontSize,
			color: rgb(0, 0, 0), // Watermark color
			rotate: degrees(30),
		});

		// Optionally, you can rotate the watermark
	}

	// Save the watermarked PDF to a buffer
	const modifiedPdfBuffer = await pdfDoc.save();
	fs.unlink(file.destination + file.filename, err => {
		if (err) {
			console.error(err);
		} else {
			console.log('File Deleted');
		}
	});

	// Send the modified PDF as a response
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'inline; filename=watermarked.pdf');
	res.end(modifiedPdfBuffer); // Use res.end() to send the binary data
});

export default router.handler({
	onError: (err, req, event) => {
		console.error(err.stack);
		return new NextResponse('Something broke!', {
			status: err.statusCode || 500,
		});
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};
