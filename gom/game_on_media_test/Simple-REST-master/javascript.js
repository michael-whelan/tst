function getAirportInfo(val){
  getData('GET',fxml_url+"enroute(KLAX,6,ga,0)",displayAirportInfo);
 // get(val,6,"ga",0);
 //sendData("sdfg");
}


function get(air,num,filt,off){
  $.ajax({
       type: 'GET',
       url: fxml_url + 'enroute', 
       data: { 'airport': air, 'howMany':num,'filter':filt, 'offset':off},
       success : function(result) {
                       alert('Failed to decode route: ' + result.error);

         if (result.error) {
               alert('Failed to decode route: ' + result.error);
               return;
           }
                   console.log(result);

       },
       error: function(data, text) { alert('Failed to decode route: ' + data); },
       dataType: 'jsonp',
       jsonp: 'jsonp_callback',
       xhrFields: { withCredentials: true }
   });
}

function getData(method,theUrl,callBack){
  console.log(theUrl);
  //return true;
  var xhr = new XMLHttpRequest();
  var response;
  xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        response =xhr.responseText;
        console.log(response);
         //callBack(JSON.parse(response));
        
      }
  }
  xhr.open(method, theUrl, true);
  xhr.send(null);
}



function displayAirportInfo(json){
  var obj = json[0];
  console.log(obj);
}
 





function createJson(){
	var name = document.getElementById("newName").value;
	var price = document.getElementById("newPrice").value;
	var desc = document.getElementById("newDescription").value;

	
	return {"airport": "BHD","howMany": 6,"filter": "ga","offset": 0};	
	
}



function sendData(method) {
  var params = createJson();
var http = new XMLHttpRequest();
var url = fxml_url +"Enroute";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
    console.log(JSON.parse(http.responseText));
}
http.send(params);
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
/*
* Used to initialize the table. This will create the different headings 
*/
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
