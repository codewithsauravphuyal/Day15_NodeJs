const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// const storage2 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './storage/banner');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const storage3 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './storage/user');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

module.exports = { multer, storage };
// module.exports = { multer, storage, storage2, storage3 };