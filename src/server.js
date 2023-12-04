const express = require('express');
const port = 4800;
const app = express();
const path = require('path');



//middleware time
const requestTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  if (day >= 1 && day <= 5 && hours >= 9 && hours <= 17){
    
     next();
} else {
  res.status(403).send('Sorry, this website is only available during working hours (Monday to Friday, from 9 to 17).');
}
}
app.use(requestTime)
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});
app.listen(port, () => {
  console.log("server is running  http://localhost:" + port);
});