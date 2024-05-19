const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.options('*', cors());

const staticPath = path.join(__dirname, 'iis_copy');
app.use(express.static(staticPath));

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
