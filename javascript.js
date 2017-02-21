function createJson(){
	var name = document.getElementById("newName").value;
	var price = document.getElementById("newPrice").value;
	var desc = document.getElementById("newDescription").value;

	
	return {"name": [name],"description": [desc],"price": [price]};	
	
}



function sendData(method) {
  var params = createJson();
  var form = document.getElementById("newProductForm");
  form.method = method;
  if(method =="PUT"){
    form.action = form.action+ "/" +document.getElementById("lookUpID").value;
    //return true;
  }
  for(var key in params) {
    if(params.hasOwnProperty(key)) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }
  }
  form.submit();
	form.style.display="none";
}

function displaySingleProd(json){
	var obj = json[0];
  var holder = document.getElementById("prodHolder");
  createLabel("ID:",holder,1);
  createLabel(obj.ID,holder,2);
  createLabel("Name:",holder,1);
	createLabel(obj.NAME,holder,2);
  createLabel("Price:",holder,1);
	createLabel(obj.PRICE,holder,2);
  createLabel("Description:",holder,1);
  createLabel(obj.DESCRIPTION,holder,2);
}


function dynamicBreakline(container, num){
  for (i = 0; i < num;++i){
    var br =  document.createElement('br');
    if(container.className == "faq-row"){
      br.className = "prodQuestion";
    }
    container.appendChild(br);
  }
}

/*
* Creates a label to be added to the sheet
*/
function createLabel(question,parent,num){

  var label = document.createElement('label');
  label.innerHTML = question;
  
  parent.appendChild(label);
  dynamicBreakline(parent, num);
  return true;
}


function logResp(json){
	console.log(json);
}

function getData(method,theUrl,callBack){
	var xhr = new XMLHttpRequest();
	var response;
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
        response =xhr.responseText;
        if(method=="DELETE"){
				  console.log(response);
        }else{
				  callBack(JSON.parse(response));
        }
	    }
	}
	xhr.open(method, theUrl, true);
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
