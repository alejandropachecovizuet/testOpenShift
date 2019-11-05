const express = require('express');
const os = require('os');

const app = express();

app.get('/', function (req, res) {
    let cpus=os.cpus();
    let memoryBytes=os.totalmem();
    let memoryGb=memoryBytes/1024/1024/1024;
    res.send({app:'Hello World Openshift!!!', cpus, memoryBytes, memoryGb});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!!!!!');
});