const express = require('express');
const multer = require('multer'); // Import multer
const cors = require('cors');

const app = express();

app.use(cors());

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storing
  }
});

const upload = multer({ storage: storage }); // Initialize multer with the configured storage

// Route for handling file uploads
app.post('/images', upload.single('image'), (req, res) => {
  // Access uploaded file details from req.file
  const imagePath = req.file.path;
  
  // Handle the uploaded file as needed
  
  res.send('File uploaded successfully');
});

const PORT = 6110;
app.listen(PORT, () => console.log(`COMICCON SERVER is running on PORT ${PORT}`));
