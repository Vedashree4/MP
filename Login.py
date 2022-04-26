from flask import Flask,request,render_template
import pickle

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("Login.html")
database={'nachi':'123','james':'aac','karthik':'asdsf'}

@app.route('/form_login',methods=['POST','GET'])
def login():
    name1=request.form['username']
    pwd=request.form['password']
    if name1 not in database:
	    return render_template('Login.html',info='Invalid User')
    else:
        if database[name1]!=pwd:
            return render_template('Login.html',info='Invalid Password')
        else:
	         return render_template('Home.html',name=name1)

if __name__ == '__main__':
    app.run()