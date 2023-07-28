import multer from 'multer';
import { __dirname } from '../utils';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

export const upload = multer({storage: storage});