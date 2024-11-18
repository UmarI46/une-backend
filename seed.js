const mongoose = require('mongoose')
const { mongoDatabase } = require("./db");
require("dotenv").config();
const deck = require("./models/deck.model.js"); //refers to already set database schema