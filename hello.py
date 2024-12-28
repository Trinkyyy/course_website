# print("Welcome to pymongo")
import pymongo 

if __name__=="__main__":
    print("Hello Trupti , Your data is stored.")
    client=pymongo.MongoClient("mongodb://localhost:27017/")
    print(client)
    db= client['trupti']
    collection = db['mysamplecollection']
    # dictionary = {'name':'trupti','marks':90}
    # collection.insert_one(dictionary)

    # insertThese = [
    #     {'name':'dipti','location':'surat','marks':'56'},
    #     {'name':'subh','location':'ahmedabad','marks':'45'},
    #     {'name':'rajni','location':'baroda','marks':'79'},
    #     {'name':'rama','location':'pune','marks':'33'}
    # ]
    # collection.insert_many(insertThese)

    # one = collection.find_one({'name':'trupti'})
    # print(one)

    # allDocs = collection.find({'name' : 'trupti'}, {'name':0})
    # for item in allDocs:
    #     print(item)

    allDocs = collection.find({"name":"trupti", "marks":{"$lte":80}})
    for item in allDocs:
        print(item)
