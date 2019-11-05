const express = require('express');
const os = require('os');

const app = express();

app.get('/', function (req, res) {
    let cpus=os.cpus();
    let memoryBytes=os.totalmem();
    let memoryGb=memoryBytes/1024/1024/1024;
    let result={app:'Hello World Openshift!!!', cpus, memoryBytes, memoryGb}
    
/*    for (let index = 0; index < cpus.length; index++) {
        const cpu = cpus[index];
        str=str+'\n************'+JSON.stringify(cpu);
        
    }*/
    res.send(result);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});