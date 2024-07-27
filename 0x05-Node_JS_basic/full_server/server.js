import express from 'express';
import routes from './routes'; // ./routes/index.js

const app = express();
const port = 1245;

app.set('../database.csv', process.argv[2] || 'database.csv');

routes(app);

app.listen(port, () => console.log(`Server runningon port ${port}`));

export default app;
