function doGet(theUrl){
	$.getJSON(theUrl, 
    function(data, textStatus, jqXHR) {
        alert(data);
    }
)
}