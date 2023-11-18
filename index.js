import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();
// const favicon = require('serve-favicon');

// function ignoreFavicon(req, res, next) {
//     if (req.CONNECTION_URL.includes('favicon.ico')) {
//         res.writeHead(200, {'Content-Type': 'image/x-icon'} );
//         res.end("favicon not sought")
//       console.log("favicon not sought")
//     }
//     next();
//   }

// app.use(ignoreFavicon);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/posts', postRoutes)

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://michaelndriscoll81:Gn94kXm8JGjVN424@cluster1.ic7h7be.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, {  })
// useNewUrlParser: true, useUnifiedTopology: true
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);