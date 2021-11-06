const express = require("express");
const router = express.Router();
const { gfs, upload } = require("../db");

router.get('/:filename', (req, res) => {
  gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
     if(!files || files.length === 0){
        return res.status(404).json({
           message: "Could not find file"
        });
     }
     const readstream = gfs.createReadStream({
        filename: files[0].filename
     })
     res.set('Content-Type', files[0].contentType);
     return readstream.pipe(res);
  });
});

router.get('/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
     if(!files || files.length === 0){
        return res.status(404).json({
           message: "Could not find files"
        });
     }
     return res.json(files);
  });
});

router.post('/', upload, (req, res) => {
  if (req.file) {
     return res.json({
        success: true,
        file: req.file
     });
  }
   res.send({ success: false });
});

router.delete('/:id', (req, res) => {
  gfs.remove({ _id: req.params.id }, (err) => {
     if (err) {
       return res.status(500).json({ success: false });
     }
     return res.json({ success: true });
  })
});
