import pymongo

# Connect to the MongoDB server (replace the connection string with your own if using MongoDB Atlas)
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["college"]
students_collection = db["students"]

# students = [
#     {"name": "John Doe", "age": 20, "major": "Computer Science"},
#     {"name": "Jane Smith", "age": 22, "major": "Mathematics"},
#     {"name": "Alice Johnson", "age": 19, "major": "Physics"},
#     {"name": "Bob Brown", "age": 21, "major": "Chemistry"}
# ]

# students_collection.insert_many(students)

# print("Database setup complete with sample student records.")

# Retrieve and print all student records
# for student in students_collection.find():
#     print(student)

# # Update a student major
# students_collection.update_one(
#     {"name": "John Doe"},
#     {"$set": {"major": "Software Engineering"}}
# )
# Find a student by name
student = students_collection.find_one({"name": "Jane Smith"})
print(student)


