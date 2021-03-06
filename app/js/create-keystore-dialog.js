var ipc = require('electron').ipcRenderer;
var fs = require('fs');

var createKeystore = function(){
  var pass = document.getElementById('txtPassword').value;
  var words = document.getElementById('seedWords').value;
  ipc.send('CreateKeystore', words, pass);
}

ipc.on('generate12Words', function(event, words){
    document.getElementById('seedWords').value = words;
});

ipc.on('CreateKeystore-error', function(event, err){
    var out = document.getElementById('output');
    out.innerText = err;
    out.setAttribute('style', 'color:red;');
});

ipc.on('CreateKeystore-success', function(event, data){
    var out = document.getElementById('output');
    out.innerText = data;
    out.setAttribute('style', 'color:green;');
});