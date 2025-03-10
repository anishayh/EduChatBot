from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

# Simulated Database (stores user conversations)
users = {}  # Format: {user_key: {"email": "...", "history": [...] }}

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if email in users:
        return jsonify({"error": "User already exists"}), 400

    user_key = str(uuid.uuid4())  # Generate a unique user key
    users[email] = {"password": password, "user_key": user_key, "history": []}

    return jsonify({"message": "User registered successfully", "user_key": user_key})


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    if email not in users or users[email]["password"] != password:
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"message": "Login successful", "user_key": users[email]["user_key"]})


@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_key = data.get("user_key")
    message = data.get("message")

    if not user_key or not message:
        return jsonify({"error": "Missing user_key or message"}), 400

    # Simple bot response (can be replaced with an AI model)
    response_text = "I'm a chatbot. How can I help you?"

    # Store chat history
    for email, user_data in users.items():
        if user_data["user_key"] == user_key:
            user_data["history"].append({"user": message, "bot": response_text})
            break

    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(debug=True)
