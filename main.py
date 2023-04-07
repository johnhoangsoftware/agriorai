from flask import Flask, render_template

app = Flask(__name__)

@app.route("/<lat>/<lon>")
def index( lat, lon ):
    return render_template("index.html", lat=lat, lon=lon) 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000,debug=True)