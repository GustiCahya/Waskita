const path = require('path');
const crypto = require('crypto');
const mongoose = require("mongoose");
const Fawn = require('fawn');
const Grid = require('gridfs-stream');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');

// init mongoose
const mongoURI = "mongodb://localhost:27017/Waskita";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
// init Fawn
Fawn.init(mongoURI);
// Declare gfs
let gfs;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  // initialize gfs
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('Uploads');
});
// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'Uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage }).single('file');

module.exports = {
  gfs,
  upload
};
