const express = require('express');
const os = require('os');

const app = express();

app.get('/', function (req, res) {
    let cpus=os.cpus();
    let totalCpus=cpus.length;
    let memoryBytes=os.totalmem();
    let memoryGb=memoryBytes/1024/1024/1024;
    res.send({app:'Hello Openshift!!!!', cpus, memoryBytes, memoryGb,totalCpus});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!!!!!');
});