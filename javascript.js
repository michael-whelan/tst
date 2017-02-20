function doPost(theUrl){
	//var obj = createJson();
	var http = new XMLHttpRequest();
var params = createJson();
http.open("POST", theUrl, false);
console.log(params);
//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/json");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
}

function createJson(){
	var name = document.getElementById("newName").value;
	var price = document.getElementById("newPrice").value;
	var desc = document.getElementById("newDescription").value;

	
	return {"name": [name],"description": [desc],"price": [price]};	
	
}

function newWindow(){
		var win = window.open("", "Title=title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=200, height=200, top="+(screen.height-400)+", left="+(screen.width-840));
		var btn = document.createElement("button");
		win.document.body.appendChild(btn);
}



function post() {
    var params = createJson();
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.getElementById("newProductForm");

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    //document.body.appendChild(form);
    form.submit();
}






function doGet(theUrl){
	var xhr = new XMLHttpRequest();
	var response;
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        response =xhr.responseText;
	        fillTable(JSON.parse(response));
	    }
	}
	xhr.open('GET', theUrl, true);
	xhr.send(null);
}


var summaryDataSet = [];

function fillTable(data){
	//console.log(data);
	summaryDataSet=[];
  columnNames=[];
  columnNames.push("ID","Price","Name");
  
  for(var i = 0; i<data.length; ++i){
    var obj = data[i];
	
    summaryDataSet.push([obj.ID, obj.PRICE, obj.NAME]); 
  }
  document.getElementById("summaryTableBtn").disabled = false;
}



var tableAlive=false;
var init = false;

function displaySummaryTable(){
  if(!init){
    $('#summaryTable').DataTable( {
        data: summaryDataSet,
        columns: [
            { title: columnNames[0] },
            { title: columnNames[1] },
            { title: columnNames[2] }
        ]
    } );
    tableAlive = true;
    init = true;
    document.getElementById("summaryTableBtn").value = "Hide Table";
  }
  else{
    if(tableAlive){
      document.getElementById("summaryTable_wrapper").style = "display:none";
      document.getElementById("summaryTableBtn").value = "Show Table";
    }
    else{
	  document.getElementById("summaryTable_wrapper").style = "display:block";
      document.getElementById("summaryTableBtn").value = "Hide Table";
    }
    tableAlive =!tableAlive;
  }
}
