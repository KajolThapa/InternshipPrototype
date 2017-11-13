create table Survey(
survey_id int constraint surv_pk PRIMARY KEY,
survey_name varchar(20));

create table Department(
dept_id int constraint dept_pk PRIMARY KEY,
dept_name varchar(50));

create table Questions(
quest_id int constraint quest_fk references Survey(survey_id), 
quest_num int constraint q_numpk PRIMARY KEY,
quest_type varchar(10),
quest_name varchar(50),
cds varchar(3),
category varchar(40),
psbl_ans varchar(50),
dep_name varchar(50));


create table Answers(
ans_num int constraint ans_fk references Questions(quest_num),
ans_name varchar(30));
