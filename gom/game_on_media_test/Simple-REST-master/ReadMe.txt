-Starting the project -> py -m SimpleHTTPServer 8080
						-> py -m server.py

I run this in my bowser (Chrome) with the "Allow-Control-Allow-Origin:*" plugin installed.
I have a number of other plugins I use for testing but that is all that is required to allow this project to run. 

-The "get all items" button will enable the show table button.
- -This initializes the table. This table shows all the IDs, Names, Prices of all beers in DB
- -The Table can be sorted by clicking the headings. Or can be searched using the search bar

- After that you can input an ID. 
- -with an ID in the ID textbox you can use either the "view details" button or the "delete" button
- -If you want to add a product fill in the other 3 text fields. The ID field will be ignored.
- -After a product has been added or removed the table will not auto update. The page needs to be refreshed
