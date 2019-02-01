# Creates the XLS files used in this exercise

import random
import datetime
import xlsxwriter

# Load the names data
with open('first_names.txt') as f:
    first_names = f.read().splitlines()
with open('last_names.txt') as f:
    last_names = f.read().splitlines()

# Create 3,000 random student names
students = [ (random.choice(first_names), random.choice(last_names)) for n in range(3000) ]

# Create sign out sheets from this day forward
day = datetime.date(2015, 9, 1)
while day < datetime.date.today():

    # Set up our spreadsheet
    workbook = xlsxwriter.Workbook(f'{day.strftime("%m-%d-%Y")}.xlsx')
    worksheet = workbook.add_worksheet("Sign outs")
    worksheet.write(0, 0, "First Name")
    worksheet.write(0, 1, "Last Name")
    worksheet.write(0, 2, "Time")
    row = 1

    # Up to 30 students sign out each day
    for n in range(random.randint(1,30)):

        # Pick a student and creaet a random time
        student = random.choice(students)
        first = student[0]
        last = student[1]
        hours = random.randint(8,13)
        if hours > 12:
            hours -= 12
            suffix = "PM"
        else:
            suffix = "AM"
        minutes = random.randint(0,59)

        # Put it in the spreadsheet
        worksheet.write(row, 0, first) 
        worksheet.write(row, 1, last) 
        worksheet.write(row, 2, f"{hours}:{minutes:02d} {suffix}")
        row += 1

    workbook.close()

    # Take weekends off
    if day.weekday() == 4:
        day += datetime.timedelta(days=3)
    else:
        day += datetime.timedelta(days=1)

    # Take summer off
    if day.month == 7: 
        year = day.year
        day = datetime.date(year, 9, 1)
