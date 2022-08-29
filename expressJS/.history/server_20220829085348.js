const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```jsx
app.get('/home', (req, res) => {
		console.log('Home')
		res.send('Hello, world!')
})
```