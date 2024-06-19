from creational.singleton.python.singleton import Database

db = Database()
db2 = Database()

if id(db) == id(db2):
    print("Singleton works!")
