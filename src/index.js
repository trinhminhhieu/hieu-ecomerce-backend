const express = require('express');
const mongoose = require('mongoose');
import path from 'path';
import auth from '../auth';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';


dotenv.config();
const app  = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});


app.use("/api/auth" , auth);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {console.log("Running on localhost:8080")}
	);