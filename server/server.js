/* eslint-disable no-console */
const app = require('./index.js');

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(process.env));
