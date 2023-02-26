from course import get_courses, all_courses
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/allcourses")
def allcourses():
    data = all_courses()
    return data


@app.route("/course", methods=["POST"])
def getcourses():
    if request.method == "POST":
        data = request.get_json()
        unwantedDays = data["unwantedDays"]
        unwantedTimes = data["unwantedTimes"]
        courses = data["courses"]
        sameTimes = data["sameTimes"]

        data_courses = get_courses(courses, unwantedTimes, unwantedDays, sameTimes)
        return data_courses


if __name__ == "__main__":
    app.run(debug=True)
