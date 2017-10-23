
SHOW con_name;
SHOW user;

create table Survey(
survey_id int,
survey_name varchar(20),
PRIMARY KEY(survey_id)
);

create table Department(
dept_id int,
dept_name varchar(20),
PRIMARY KEY(dept_id),
FOREIGN KEY(dept_id) REFERENCES Survey(survey_id) 
);

create table Questions(


quest_id int,
quest_type varchar(10),
quest_name varchar(20),
PRIMARY KEY(quest_id),
FOREIGN KEY(quest_id) REFERENCES Department(dept_id)

);

create table Answers(
Ans_id int,
Ans_type varchar(20),
Ans varchar(50),
PRIMARY KEY(Ans_id)
);

insert into Questions values(1,'txtbx','Total men applied');
insert into Questions values(2,'txtbx','Total women applied');
insert into Questions values(3,'txtbx','Total applications');
insert into Questions values(4,'txtbx','Total men admitted');
insert into Questions values(5,'txtbx','Total women admitted');
insert into Questions values(6,'txtbx','Total admitted');

insert into Department values(1,'Admissions');
insert into Department values(2,'Admissions');
insert into Department values(3,'Admissions');
insert into Department values(4,'Admissions');
insert into Department values(5,'Admissions');
insert into Department values(6,'Admissions');

Select * from Questions;