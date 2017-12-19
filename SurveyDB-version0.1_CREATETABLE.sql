
--TESTING UNICORN TABLE

/* CREATE TABLE UNICORN( 
        question_ID	         NUMBER(10)PRIMARY KEY,
        question_type        NUMBER(10) NOT NULL,
        question_string		 VARCHAR(2000) NOT NULL,
        answer_set           VARCHAR(2000) NOT NULL);

        
INSERT INTO UNICORN VALUES(13,1, 'Does your institution require or recommend a general college-preparatory program for degree-seeking student','Require,Recommend,Neither require nor recommend,No answer');  
INSERT INTO UNICORN VALUES(14,0, 'Distribution of high school units required and/or recommended. (CDS C5) Specify the distribution of academic high school course units required and/or recommended of all or most degree-seeking students using Carnegie units (one unit equals one year of study or its equivalent). If you use a different system for calculating units, please convert','English, Mathematics,Science');
        
select * from unicorn;

*/


--SURVEY DATABASE TABLES

CREATE TABLE DEPARTMENTS(
    dept_id             NUMBER(10)      PRIMARY KEY,
    dept_name           VARCHAR(255)    NOT NULL
);

   

--DROP TRIGGER trg_dept_id;
--DROP SEQUENCE increment_sequence;

CREATE TABLE SURVEY(
    survey_id               NUMBER(10)      PRIMARY KEY,
    survey_name             VARCHAR(50)     NOT NULL,
    survey_desc             VARCHAR(512)    NOT NULL,
    survey_question_set     VARCHAR(4000)   NOT NULL,
    survey_start_time       TIMESTAMP(0)    NOT NULL,
    survey_end_time         TIMESTAMP(0)    NOT NULL,
    survey_document_id      VARCHAR(20)     NOT NULL,
    survey_availability     NUMBER(1)       NULL
);

--insert into SURVEY (survey_id, survey_name, survey_desc, survey_question) values (survey_sequence.nextval, 'sample', 'sample', 'sample');


CREATE TABLE SURVEY_CONNECTION(
    id                              NUMBER(10)  PRIMARY KEY,
    complete                        NUMBER(1)   NULL,
    survey_id                       NUMBER(10)  NOT NULL,
    dept_id                         NUMBER(10)  NOT NULL,
    CONSTRAINT  FK_survey_id        FOREIGN KEY( survey_id) REFERENCES  SURVEY( survey_id),   
    CONSTRAINT  FK_dept_id          FOREIGN KEY( dept_id) REFERENCES  DEPARTMENTS( dept_id)
);

CREATE TABLE ANSWERS_BANK(
    answer_id            NUMBER(10)      PRIMARY KEY,
    answer_set           VARCHAR(4000)   NOT NULL
);

select * from answers_bank;

CREATE TABLE QUESTIONS_BANK(
    question_id                      NUMBER(10)     PRIMARY KEY,
    question_type                    NUMBER(1)      NOT NULL,
    question_string                  VARCHAR(4000)  NOT NULL,
    answer_id                        NUMBER(10)     NOT NULL,
    CONSTRAINT FK_answer_id          FOREIGN KEY(answer_id) REFERENCES ANSWERS_BANK(answer_id)
);

CREATE TABLE SURVEY_ANSWERS(
    id                                      NUMBER(10)    PRIMARY KEY,
    dept_id                                 NUMBER(10)     NULL,
    survey_id                               NUMBER(10)     NULL,
    question_id                             NUMBER(10)     NULL,
    question_selected                       VARCHAR(4000)  NULL,
    answer_selected                         VARCHAR(4000)  NULL,
    CONSTRAINT FK2_dept_id_    FOREIGN KEY(dept_id) REFERENCES DEPARTMENTS(dept_id),
    CONSTRAINT FK2_survey_id  FOREIGN KEY(survey_id) REFERENCES SURVEY(survey_id),
    CONSTRAINT FK_question_id FOREIGN KEY(question_id) REFERENCES QUESTIONS_BANK(question_id)
    );

select COUNT(*) FROM survey_answers
-- select * from survey_answers;

-- Auto increment
CREATE sequence dept_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;
    
CREATE sequence survey_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;
    
CREATE sequence survey_connection_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;
    
CREATE sequence answers_bank_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;
    
CREATE sequence questions_bank_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;
CREATE sequence survey_answers_sequence
    start with 0
    increment by 1
    minvalue 0
    maxvalue 1000;