const express = require("express");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const mongoose = require("mongoose");
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Your app listening on port ${PORT}!`));
