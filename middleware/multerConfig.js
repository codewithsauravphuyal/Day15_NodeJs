const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../storage')); // Ensure storage directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to avoid name conflicts
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