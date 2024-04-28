from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "mai chl gya finally"})

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    received_data = data['data']
    print("Received data:", received_data)
    # Process the received data as needed
    return jsonify({"message": "Data received successfully"})

if __name__ == "__main__":
    app.run(debug=True)