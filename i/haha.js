
var aVideo=document.getElementById('video');  
        var aCanvas=document.getElementById('canvas');  
        var ctx=aCanvas.getContext('2d');  
          
        navigator.getUserMedia  = navigator.getUserMedia ||  
                          navigator.webkitGetUserMedia ||  
                          navigator.mozGetUserMedia ||  
                          navigator.msGetUserMedia;  
        navigator.getUserMedia({video:true}, gotStream, noStream);  
          
        function gotStream(stream) {  
            video.src = URL.createObjectURL(stream);  
            video.onerror = function () {  
              stream.stop();  
            };  
            stream.onended = noStream;  
            video.onloadedmetadata = function () {  
              alert('摄像头成功打开！');  
            };  
        }  
        function noStream(err) {  
            alert(err);  
      }  
      document.getElementById("snap").addEventListener("click", function() {  
          
        ctx.drawImage(aVideo, 0, 0, 1024, 768);  
    });  