import sqlite3

def init():
    conn = sqlite3.connect('db.sqlite3')
    print ("Opened database successfully")

    conn.execute('''CREATE TABLE PRODUCT
           (ID INTEGER PRIMARY KEY AUTOINCREMENT,
           NAME           TEXT     NOT NULL,
           DESCRIPTION   TEXT     NOT NULL,
           PRICE         REAL);''')
    print ("Table created successfully");

    conn.execute("INSERT INTO PRODUCT (NAME,DESCRIPTION,PRICE) \
          VALUES ('Guiness', 'Guinness stout is made from water, barley, roast malt extract, hops, and brewer's yeast. A portion of the barley is roasted to give Guinness its dark colour and characteristic taste. It is pasteurised and filtered. ... Draught Guinness and its canned counterpart contain nitrogen (N2) as well as carbon dioxide.', 4.98 )");


    conn.commit()
    print ("Records created successfully");

    conn.close()
