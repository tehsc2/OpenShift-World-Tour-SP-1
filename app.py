from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder="./public", static_url_path='')
app.config.from_object(__name__)

port = int(os.getenv('PORT', 8080))

@app.route('/', methods=['GET'])
def main():
    return send_from_directory('public', 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
