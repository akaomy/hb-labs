### notes

CREATE TABLE projects (
(#     id SERIAL PRIMARY KEY,
(#     title VARCHAR(30),
(#     description TEXT,
(#     max_grade INTEGER
(#     );

INSERT INTO projects (title, description, max_grade) VALUES ('Markov', 'Tweets generated from Markov chains', 50);


project-tracker=# select * from grades;
 id | student_github | project_title | grade 
----+----------------+---------------+-------
  1 | jhacks         | Markov        |    10
  2 | jhacks         | Blockly       |     2
  3 | sdevelops      | Markov        |    50
  4 | sdevelops      | Blockly       |   100
(4 rows)

project-tracker=# select first_name, last_name
project-tracker-# from students
project-tracker-# where github = 'jhacks';
 first_name | last_name 
------------+-----------
 Jane       | Hacker
(1 row)

project-tracker=# select project_title, grade
project-tracker-# from grades
project-tracker-# where student_github = 'jhacks';
 project_title | grade 
---------------+-------
 Markov        |    10
 Blockly       |     2
(2 rows)

project-tracker=# select title, max_grade from projects;
   title    | max_grade 
------------+-----------
 Markov     |        50
 Blockly    |        50
 Sharkwords |       100
 Madlibs    |       120
 Guess word |        90
(5 rows)


>> SELECT * FROM students
    JOIN grades ON (students.github = grades.student_github);


 id | first_name | last_name |  github   | id | student_github | project_title | grade 
----+------------+-----------+-----------+----+----------------+---------------+-------
  1 | Jane       | Hacker    | jhacks    |  1 | jhacks         | Markov        |    10
  1 | Jane       | Hacker    | jhacks    |  2 | jhacks         | Blockly       |     2
  2 | Sarah      | Developer | sdevelops |  3 | sdevelops      | Markov        |    50
  2 | Sarah      | Developer | sdevelops |  4 | sdevelops      | Blockly       |   100
(4 rows)


project-tracker=# select students.first_name,
project-tracker-#        students.last_name,
project-tracker-#        grades.project_title,
project-tracker-#        grades.grade
project-tracker-# FROM students
project-tracker-# JOIN grades ON (students.github = grades.student_github);
 first_name | first_name | project_title | grade 
------------+-----------+---------------+-------
 Jane       | Hacker    | Markov        |    10
 Jane       | Hacker    | Blockly       |     2
 Sarah      | Developer | Markov        |    50
 Sarah      | Developer | Blockly       |   100
(4 rows)


SELECT *
FROM students
  JOIN grades ON (students.github = grades.student_github)
  JOIN projects ON (grades.project_title = projects.title);

  id | first_name | last_name |  github   | id | student_github | project_title | grade | id |  title  |                description                | max_grade 
  1 | Jane       | Hacker    | jhacks    |  1 | jhacks         | Markov        |    10 |  1 | Markov  | Tweets generated from Markov chains       |        50
  1 | Jane       | Hacker    | jhacks    |  2 | jhacks         | Blockly       |     2 |  2 | Blockly | Generator of tweets based on Markov chain |        50
  2 | Sarah      | Developer | sdevelops |  3 | sdevelops      | Markov        |    50 |  1 | Markov  | Tweets generated from Markov chains       |        50
  2 | Sarah      | Developer | sdevelops |  4 | sdevelops      | Blockly       |   100 |  2 | Blockly | Generator of tweets based on Markov chain |        50
(4 rows)

project-tracker=# SELECT *
project-tracker-# FROM students
project-tracker-#   JOIN grades ON (students.github = grades.student_github)
project-tracker-#   JOIN projects ON (grades.project_title = projects.title)
project-tracker-# WHERE github = 'jhacks';
 id | first_name | last_name | github | id | student_github | project_title | grade | id |  title  |                description                | max_grade 
----+------------+-----------+--------+----+----------------+---------------+-------+----+---------+-------------------------------------------+-----------
  1 | Jane       | Hacker    | jhacks |  1 | jhacks         | Markov        |    10 |  1 | Markov  | Tweets generated from Markov chains       |        50
  1 | Jane       | Hacker    | jhacks |  2 | jhacks         | Blockly       |     2 |  2 | Blockly | Generator of tweets based on Markov chain |        50
(2 rows)



project-tracker=# SELECT first_name, last_name, project_title, grade, max_grade
project-tracker-# FROM students
project-tracker-# JOIN grades ON (students.github = grades.student_github)
project-tracker-#   JOIN projects ON (grades.project_title = projects.title);
 first_name | last_name | project_title | grade | max_grade 
------------+-----------+---------------+-------+-----------
 Jane       | Hacker    | Markov        |    10 |        50
 Jane       | Hacker    | Blockly       |     2 |        50
 Sarah      | Developer | Markov        |    50 |        50
 Sarah      | Developer | Blockly       |   100 |        50


CREATE VIEW report_card_view AS
SELECT students.first_name,
       students.last_name,
       projects.title,
       projects.max_grade,
       grades.grade
FROM students
  JOIN grades ON (students.github = grades.student_github)
  JOIN projects ON (projects.title = grades.project_title);

SELECT *
FROM report_card_view;

select * from report_card_view;
 first_name | last_name |  title  | max_grade | grade 
------------+-----------+---------+-----------+-------
 Jane       | Hacker    | Markov  |        50 |    10
 Jane       | Hacker    | Blockly |        50 |     2
 Sarah      | Developer | Markov  |        50 |    50
 Sarah      | Developer | Blockly |        50 |   100
(4 rows)
