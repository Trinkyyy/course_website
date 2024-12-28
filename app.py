from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database_name']
collection = db['your_collection_name']

@app.route('/')
def index():
    return render_template('signup.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        # Extract form data
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        gender = request.form['mygender']
        dob = request.form['dob']
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']

        # Insert into MongoDB
        data = {
            'firstname': firstname,
            'lastname': lastname,
            'gender': gender,
            'dob': dob,
            'email': email,
            'username': username,
            'password': password
        }
        collection.insert_one(data)

        return redirect(url_for('confirmation'))

@app.route('/confirmation')
def confirmation():
    # Retrieve the last inserted document from MongoDB
    user_data = collection.find_one(sort=[('_id', -1)])

    # Extract user information from the document
    firstname = user_data['firstname']
    lastname = user_data['lastname']
    gender = user_data['gender']
    dob = user_data['dob']
    email = user_data['email']
    username = user_data['username']
    password = user_data['password']

    return render_template('confirmation.html', 
                           firstname=firstname, 
                           lastname=lastname, 
                           gender=gender, 
                           dob=dob, 
                           email=email, 
                           username=username, 
                           password=password)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
