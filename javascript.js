function doPost(theUrl){
	//var obj = createJson();
	var http = new XMLHttpRequest();
	var params = createJson();
	http.open("POST", theUrl, false);
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
	form.style.display="none";
}

function displaySingleProd(json){
	console.log(json);
	//prodHolder
	
}

function logResp(json){
	console.log(json);
}

function doGet(endPoint,theUrl,callBack){
	var xhr = new XMLHttpRequest();
	var response;
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        response =xhr.responseText;
			if(endPoint=="DELETE"){
				console.log(response);
			}else{
				callBack(JSON.parse(response));
			}
	    }
	}
	console.log(endPoint, theUrl);
	xhr.open(endPoint, theUrl, true);
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
