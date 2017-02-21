-Starting the project -> py -m SimpleHTTPServer 8080

-The "get all products" button will enable the show table button.
- -This initializes the table. This table shows all the IDs, Names, Prices or all products in DB
- -The Table can be sorted by clicking the headings. Or can be searched using the search bar

- After that you can input an ID. 
- -with an ID in the ID textbox you can use either the "view details" button or the "delete" button
- -If you want to add a product fill in the other 3 text fields. The ID field will be ignored.
- -After a product has been added or removed the table will not auto update. The page needs to be refreshed

-Improvements
- -The original plan, or the way I would have done it if it was going to be client facing would be to use
	the table as the editor.
	I would have added Xs to each row, pressing these would drop the row.
	To edit the user would double click the cell and simply edit the text.
	This would require regular asynchronous communication with the server/DB but
	would provide the simplest/ most user friendly front end.
	
	
- Assumptions/Errors
- -Due to the time constraints I made a change to server file which allowed me to use delete
	I did assume that the server was set up generically in the first place, but I aimed for the faster solution.
- -Although the design is functional, I wouldn't call it pretty. This wouldn't be tough to fix with some proper thought
	out CSS/SASS.