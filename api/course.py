from collections import defaultdict
import json
import itertools


def get_courses(my_lectures, unwanted_times, unwanted_days, same_times):
    courses_list = []
    with open("./courses.json", "r+", encoding="UTF-8") as f:
        courses = json.load(f)
        coursex_list = []
        for course in courses:
            if course["uni_code"] not in my_lectures:
                continue

            unwanted_time = False
            for day in course["gunler_ayrintili"]:
                if unwanted_time:
                    break
                if course["gunler_ayrintili"][day] == []:
                    continue
                if day in unwanted_days:
                    unwanted_time = True
                    break
                for time in course["gunler_ayrintili"][day]:
                    if time["baslangicSaat"] in unwanted_times:
                        unwanted_time = True
                        break
            if unwanted_time:
                continue

            if same_times:
                courses_list.append(course)
            else:
                coursex = course.copy()
                for key in list(coursex):
                    if key != "uni_code" and key != "gunler_ayrintili":
                        del coursex[key]
                if coursex not in coursex_list:
                    coursex_list.append(coursex)
                    courses_list.append(course)

    uni_codes = []
    for course in courses_list:
        if course["uni_code"] not in uni_codes:
            uni_codes.append(course["uni_code"])
    for my_lecture in my_lectures:
        if my_lecture not in uni_codes:
            return []

    print("Wanted Courses:", len(courses_list))
    if len(courses_list) > 130:
        return list(range(0, 5020))

    class_numbers = {}
    for course in courses_list:
        if course["uni_code"] not in class_numbers:
            class_numbers[course["uni_code"]] = []
        class_numbers[course["uni_code"]].append(course)

    course_list = list(class_numbers.values())
    combinations = list(itertools.product(*course_list))

    print("All Combinations:", len(combinations))
    if len(combinations) > 250000:
        return list(range(0, 5020))

    valid_courses = []
    for combination in combinations:
        courses_times = defaultdict(list)
        conflict = False
        for course in combination:
            for day in course["gunler_ayrintili"]:
                start_time_list = []
                for time in course["gunler_ayrintili"][day]:
                    start_time = time["baslangicSaat"]
                    if start_time in start_time_list:
                        continue
                    else:
                        start_time_list.append(start_time)
                    if start_time in courses_times[day]:
                        conflict = True
                        break
                    courses_times[day].append(start_time)
                if conflict:
                    break
            if conflict:
                break
        if not conflict:
            valid_courses.append(combination)

    print("Final Combinations:", len(valid_courses))
    return valid_courses


def all_courses():
    uni_code_list = []
    all_courses_list = []
    with open("./courses.json", "r+", encoding="UTF-8") as f:
        courses = json.load(f)
        for course in courses:
            if course["uni_code"] not in uni_code_list:
                uni_code_list.append(course["uni_code"])
                all_courses_list.append({"uni_code": course["uni_code"], "dersAdi": course["dersAdi"], "credit": course["credit"]})
    return all_courses_list
