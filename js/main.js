var myfile = document.getElementById("mainfile"); 
    myfile.addEventListener("change", function(event){ 
        var reader = new FileReader();      
        reader.onload = function(event){
            var contents = event.target.result;     
            document.getElementById('t_area').value = contents;  
        };      
        reader.onerror = function(event){
            console.error("File could not be read! Code " + event.target.error.code);
        };      
        reader.readAsText(myfile.files[0]);        
    }, false);
