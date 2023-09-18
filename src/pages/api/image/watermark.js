import { createRouter } from 'next-connect';
import { NextResponse } from 'next/server';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: 'uploads/',
	filename: function (req, file, cb) {
		console.log(file.mimetype);
		cb(null, file.fieldname + '.' + file.mimetype.split('/')[1]);
	},
});

const upload = multer({ storage: storage });
const router = createRouter();

router.use(upload.any());
router.post(async (req, res) => {
	const file = req.files;
	console.log(file);
	res.status(200).json({ message: 'success' });
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
