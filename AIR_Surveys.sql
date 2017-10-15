create table USERS (
            user_id         NUMBER(10) PRIMARY KEY,
            email           VARCHAR(50),
            is_student     NUMBER(1,0),
            access_code     VARCHAR(25)
            )
            
create type survey_set_arrray IS VARRAY(50) of VARCHAR(4);

create table SURVEY_BANK (
            survey_id    NUMBER(10) PRIMARY KEY,
            document_id  VARCHAR(10) NOT NULL,
            title        VARCHAR(25) NOT NULL,
            start_time   DATE NOT NULL,
            end_time     DATE NOT NULL,
            survey_set    survey_set_array
            );
            
create table DEPARTMENT (
                dept_id       NUMBER(10) PRIMARY KEY,
                dept_name     VARCHAR(35)   NOT NULL
                );

create table SURVEY_LINK (
                survey_link_id      NUMBER(10),
                CONSTRAINT link_survey_id_FK FOREIGN KEY(survey_link_id) REFERENCES SURVEY_BANK(survey_id),
                CONSTRAINT link_dept_id_FK FOREIGN KEY(survey_link_id) REFERENCES DEPARTMENT(dept_id)
                );
                
                
create type question_set_arrray IS VARRAY(10) of VARCHAR(50);


create table QUESTION_SET (
            question_id     NUMBER(10) PRIMARY KEY,
            question_set    question_set_arrray
            );


Create table QUESTIONS_BANK( 
            question_id NUMBER(10) PRIMARY KEY,
            question    VARCHAR(500) NOT NULL,
            question_type  VARCHAR(20) NOT NULL,
            CONSTRAINT question_set_FK FOREIGN KEY(question_id) REFERENCES QUESTION_SET(question_id)
            );
            
            
create table ANSWERS (
            answer_id NUMBER(10) PRIMARY KEY,
            CONSTRAINT user_id_FK FOREIGN KEY(answer_id) REFERENCES USERS(user_id),
            CONSTRAINT survey_id_FK FOREIGN KEY(answer_id) REFERENCES SURVEY_BANK(survey_id),
            CONSTRAINT question_id_FK FOREIGN KEY(answer_id) REFERENCES QUESTIONS_BANK(question_id)
            );

create table ANSWER_SET (
                answer_key_id NUMBER(10) PRIMARY KEY 
                );
                
create table COMPLETE_SURVEY (
            com_survey_id   NUMBER(10) PRIMARY KEY,
            CONSTRAINT Cuser_id_FK FOREIGN KEY(com_survey_id) REFERENCES USERS(user_id),
            CONSTRAINT Csurvey_id_FK FOREIGN KEY(com_survey_id) REFERENCES SURVEY_BANK(survey_id),
            CONSTRAINT Cquestion_id_FK FOREIGN KEY(com_survey_id) REFERENCES QUESTIONS_BANK(question_id),
            CONSTRAINT Csanswer_key_id_FK FOREIGN KEY(com_survey_id) REFERENCES ANSWER_SET(answer_key_id)
            );
              
            