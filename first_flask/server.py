from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/2')
def another_route():
    return "this is the result of a different route"

@app.route('/test/<int:x>')
def variable_rules(x):
    return str(x)

@app.route('/multiply/<int:x>/<int:y>')
def multiply(x, y):
    return render_template("multiply_result.html", x = x, y = y, result = x * y)

@app.route('/multitable/<int:x>/<int:y>')
def multiplication_table(x, y):
    result = []

    top_row = ['x']
    for j in range(0, y + 1):
        top_row.append(j)

    result.append(top_row)

    for i in range(0, x + 1):
        new_list = [i]
        for j in range(0, y + 1):
            new_list.append(i * j)
        result.append(new_list)

    for row in result:
        print(row)

    return render_template("table.html", x = x, y = y, result = result)

if __name__ == "__main__":
    app.run(debug = True)