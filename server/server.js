const express = require("express");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const { router } = require("./routes/jobsRoutes.js");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/jobs', router);

app.use(notFound);

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
