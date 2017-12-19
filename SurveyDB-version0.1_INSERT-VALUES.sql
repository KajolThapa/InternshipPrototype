--   insert into unicorn_test values('{"heading":[{"head":"Units Required"}, {"head": "Units Recommended"}]}');



-- select * from DEPARTMENTS;
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Administration and Finance');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Admissions');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'African American Studies');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Alumni Relations');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Architectural Technology');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'ASAP');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Assessment and Institutional Research');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Athletics and Recreation');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Atrium Learning Center');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval,'Biological Sciences');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Business Office');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Dental Hygiene');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'English');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Health Services Administration');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Mathematics');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Physics');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Registrar''s Office');
INSERT INTO DEPARTMENTS VALUES(dept_sequence.nextval, 'Student Life and Development');


-- select * from SURVEY;
SELECT survey_id,survey_name,survey_question_set,survey_availability from survey;
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'US News Finance','US News Finance)','0,1,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19', '03-JUNE-17 10.03.20', '03-JUNE-17 11.03.20','ABC111',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'College Board','College Board','7,8,9,10,11,0,1,7,4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '03-FEB-17 10.03.20', '03-FEB-17 11.03.20','CDE222',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Peterson''s Undergrad','Peterson''s Undergrad','4,15,16,17,18,19,0,8,11,10,12,13,14,15,16','03-DEC-17 10.03.20', '03-DEC-17 11.03.20','FGH333',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'ACT-ID','ACT-ID','19,18,17,16,15,14,13,12,0,1,3,4,7,8,9,10,11,12,13','05-MAR-17 11.03.20', '03-MAR-17 11.40.20','IJK444',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Military Times','Military Times','0,1,17,14,4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '05-MAY-17 11.03.20', '03-MAY17 11.40.20','LMN555',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Barron''s Profiles','Barron''s Profiles','19,18,17,16,15,14,13,12,0,1,3,4,7,8,9,10,11,12,13', '05-AUG-17 11.03.20', '03-JUNE-17 11.40.20','OPQ666',1);
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Winter Green','Winter Green','4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '05-AUG-17 11.03.20', '03-JUNE-17 11.40.20','RST777',1);       
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'MSCHE IP','MSCHE IP','4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '05-NOV-17 11.03.20', '03-NOV-17 11.40.20','UVW888',1);       
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Peterson''s Interim Express','Peterson''s Interim Express','0,1,17,14,4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '05-AUG-17 11.03.20', '03-JUNE-17 11.40.20','XY999',1);       
INSERT INTO SURVEY VALUES(survey_sequence.nextval,'Peterson''s Financial AID','Peterson''s Financial AID','7,8,9,10,11,0,1,7,4,15,16,17,18,19,0,8,11,10,12,13,14,15,16', '05-AUG-17 11.03.20', '03-JUNE-17 11.40.20','ZA000',1); 

-- select * from SURVEY_CONNECTION;                            
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 0, 0);
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 1, 0);
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 2, 0);
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 4, 1);
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 5, 1);
INSERT INTO SURVEY_CONNECTION VALUES(survey_connection_sequence.nextval, 0, 3, 2);

--let sample = JSON.parse('[{"ans": "Yes"}, {"ans": "No"}, {"ans": "Maybe"}]');
--console.log(sample[1]);

-- select * from ANSWERS_BANK;
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"High school diploma is required and GED is accepted"},{"ans":"High school diploma is required and GED is not accepted"},{"ans":"High school diploma or equivalent is not required"},{"ans":"No answer"}]' );
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Require Recommend"},{"ans":"Neither require nor recommend"},{"ans":"No answer"}] ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Units Required"},{"ans":"Units Recommended"}]');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Yes"},{"ans":"No"},{"ans":"No answer"}]');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Selective admission for out-of-state students"},{"ans":"Selective admissions to some programs"}]');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Very Important"},{"ans":"Important"},{"ans":"Considered"},{"ans":"Not Considered"},{"ans":"No answer"}]');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, '[{"ans":"Very Important"},{"ans":"Important"},{"ans":"Considered"},{"ans":"Not Considered"},{"ans":"No answer"}]');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":"Email:"}] ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":""}] ');

INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":"Red"}, {"ans":"Yellow"},{"ans":"Orange"},{"ans":"Purple"},{"ans":"Blue"},{"ans":"Green"}] ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":"Library"}, {"ans":"Student Wellness Services"},{"ans":"Printing"},{"ans":"Use of Computer in computer lab"},{"ans":"Group Student Room"},{"ans":"School Tutoring Center"},{"ans":"Cafeteria"},{"ans":"Student Advisement"},{"ans":"Professional Development Services"},{"ans":"Counselling"}] ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":"Bachelors"},{"ans":"Masters"},{"ans":"Associate"},{"ans":"PHD"}] ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' [{"ans":"Full-Time"},{"ans":"Part-Time"},{"ans":"Intern"},{"ans":"Volunteer"}] ');

/*INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'High school diploma is required and GED is accepted>High school diploma is required and GED is not accepted>High school diploma or equivalent is not required>No answer ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Require Recommend>Neither require nor recommend>No answer ');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Units Required>Units Recommended');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Yes>No>No answer');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Selective admission for out-of-state students>Selective admissions to some programs');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Very Important>Important>Considered>Not Considered>No answer');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, 'Very Important>Important>Considered>Not Considered>No answer');
INSERT INTO ANSWERS_BANK VALUES(answers_bank_sequence.nextval, ' Email: ');*/



-- SELECT * FROM questions_bank;
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1,'Check the appropriate box to identify your high school completion requirement for degree-seeking entering students', 1);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1,'Does your institution require or recommend a general college-preparatory program for degree-seeking students?',  2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Distribution of high school units required and/or recommended. (CDS C5) Specify the distribution of academic high school course units required and/or recommended of all or most degree-seeking students using Carnegie units (one unit equals one year of study or its equivalent). If you use a different system for calculating units, please convert.', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1,'Do you have an open admission policy, under which virtually all secondary school graduates or students with GED equivalency diplomas are admitted without regard to academic record, test scores, or other qualications?', 3);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 2,'Open admission policy as described above for most students, but', 4);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Relative importance of each of the following academic and nonacademic factors in your rst-time, rst-year, degree-seeking (freshman) admission decisions. Please mark one column from each row. Academic:', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Nonacademic? ', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 0,' Enter your City Tech email', 7);

INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 0,' Please enter your full name.', 8); --answer_id 8 is user input
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1, 'Are you a transfer student', 3);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1,' Have you changed your major after you entered the school?', 3);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 0,' Please enter how many credits have you earned:', 8);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1,' Have you applied for Financial aid?', 3);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 0,' Please enter your current cumulative GPA:', 8);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 2,' Check all that apply.', 9); -- question_id 2 is text box
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 2,' Select all the school services that you use on everyday basis:', 10);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1, 'Are you a full time employee at City Tech?', 3);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 0, 'How many hours do you work?', 8);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1, 'What is the highest level of education you have completed?', 11);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 1, 'What is your current employee status?', 12);

INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,' English', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Mathematics', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Science', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Of these, units that must be lab', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Foreign language', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Social Studies', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'History', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Academic electives', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Computer Science', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Visual, Performing Arts', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Other', 2);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 4,'Total', 2);

INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Rigor of secondary school record', 5);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,'Class rank ', 5);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,'Academic GPA ', 5);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,'Recommendaion(s) ', 5);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,'Standardized test Scores ', 5);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,'Application essay ', 5);

INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Interview', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Extracurricular activities', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Talent/ability', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' character/personal qualities', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' First generation', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Alumni/ae relation', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Geographical residency', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' State residency', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Religious affiliation/commitment', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Racial/ethnic status', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Volunteer Work', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Work experience', 6);
INSERT INTO QUESTIONS_BANK VALUES(questions_bank_sequence.nextval, 3,' Level of applicant''s interest', 6);


-- select * from SURVEY_ANSWERS;


commit;


INSERT ALL 
    INTO SURVEY_ANSWERS VALUES (1, 0, 0, '0', 'AnsId', 'Neither require nor recommend')
    INTO SURVEY_ANSWERS VALUES (2, 0, 0, '0', 'AnsId', 'Neither require nor recommend')
    INTO SURVEY_ANSWERS VALUES (3, 0, 0, '0', 'AnsId', 'Neither require nor recommend')
SELECT * FROM dual;

select count(*) from survey_answers;