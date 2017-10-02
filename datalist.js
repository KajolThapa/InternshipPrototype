var list = "005 Administration and Finance, 006 Admissions, 007 African American Studies, 008 Alumni Relations, 009 Architectural Technology, 011 ASAP, 012 Assessment and Institutional Research, 013 Athletics and Recreation, 026 Atrium Learning Center, 015 Biological Sciences, 016 BMI, 017 Bookstore, 018 Buildings and Grounds 105 Bursar's Office, 019 Business, 020 Business Office, 022 Career and Technology Teacher Education 109 Center for Student Accessibility, 023 Chemistry, 024 Child Care Center, 025 Collaborative Precollege Programs, 027 Communication Design, 028 Communications, 029 Community and Government Relations, 030 Computer Engineering Technology, 031 Computer Systems Technology, 033 Computing Information Services, 034 Construction Management/Civil Engineering Technology 114 Continuing Education036 Counseling Center, 021 CUNY EDGE (formerly COPE), 037 CUNY Language Immersion Program 128 CUNY Service Corps, 039 Dental Hygiene, 042 Development/City Tech Foundation, 043 Division of Enrollment and Student Affairs, 044 Electrical and Telecommunication Engineering Technology, 045 English, 046 Enrollment Management, 047 Entertainment Technology, 048 Environmental Control Technology/Facilities Management, 049 Evening and Summer Sessions Office, 050 Facilities and Operations, 052 Faculty Commons, 053 Financial Aid, 054 First Year Program, 055 Grants and Contracts 180 Health Services Administration, 057 Hospitality Management, 059 Human Services, 060 Humanities, 061 Image and Visual Communications, 062 Immunization, 063 Information Desk, 065 Instructional Technology and Enhancement Centers, 067 Law and Paralegal Studies, 069 Library, 070 Mathematics, 071 Mechanical Engineering Technology 107 Media Services, 004 New Student Center (Academic Advisement and Career), 073 Nursing 108 Office of Faculty and Staff Relations, 075 Partnership Programs, 076 Physics, 078 President's Office 104 Professional Development Center, 079 Property Management, 080 Provost's Office, 081 Public Affairs and Partnerships, 082 Public Safety, 084 Radiologic Tech/Medical Imaging, 085 Registrar's Office, 040 Restorative Dentistry, 086 Scholarship and Residency Services, 010 School Of Arts and Sciences, 087 School Of Professional Studies, 088 School Of Technology And Design, 090 SEEK, 091 Social Science, 092 Special Counsel, 096 Student Government Association, 098 Student Life and Development 103 Student Wellness Center 100 Testing Office 177 Transfer Student Center and Recruitment, 099 Veterans Support Services 102 Vision Care Technology"
;
// console.log(list);

var output = list.replace(/[0-9]/g, '');

var datalist = output.split(',');
var cleanData = [];


for(i=0; i<datalist.length; i++){
  cleanData.push(datalist[i].trim());
}
// console.log(cleanData);


var departments = ['Administration and Finance',
  'Admissions',
  'African American Studies',
  'Alumni Relations',
  'Architectural Technology',
  'ASAP',
  'Assessment and Institutional Research',
  'Athletics and Recreation',
  'Atrium Learning Center',
  'Biological Sciences',
  'BMI',
  'Bookstore',
  'Buildings and Grounds  Bursar\'s Office',
  'Business',
  'Business Office',
  'Career and Technology Teacher Education Center for Student Accessibility',
  'Chemistry',
  'Child Care Center',
  'Collaborative Precollege Programs',
  'Communication Design',
  'Communications',
  'Community and Government Relations',
  'Computer Engineering Technology',
  'Computer Systems Technology',
  'Computing Information Services',
  'Construction Management/Civil Engineering Technology',
  'Continuing Education Counseling Center',
  'CUNY EDGE (formerly COPE)',
  'CUNY Language Immersion Program',
  'CUNY Service Corps',
  'Dental Hygiene',
  'Development/City Tech Foundation',
  'Division of Enrollment and Student Affairs',
  'Electrical and Telecommunication Engineering Technology',
  'English',
  'Enrollment Management',
  'Entertainment Technology',
  'Environmental Control Technology/Facilities Management',
  'Evening and Summer Sessions Office',
  'Facilities and Operations',
  'Faculty Commons',
  'Financial Aid',
  'First Year Program',
  'Grants and Contracts',
  'Health Services Administration',
  'Hospitality Management',
  'Human Services',
  'Humanities',
  'Image and Visual Communications',
  'Immunization',
  'Information Desk',
  'Instructional Technology and Enhancement Centers',
  'Law and Paralegal Studies',
  'Library',
  'Mathematics',
  'Mechanical Engineering Technology',
  'Media Services',
  'New Student Center (Academic Advisement and Career)',
  'Nursing  Office of Faculty and Staff Relations',
  'Partnership Programs',
  'Physics',
  'President\'s Office  Professional Development Center',
  'Property Management',
  'Provost\'s Office',
  'Public Affairs and Partnerships',
  'Public Safety',
  'Radiologic Tech/Medical Imaging',
  'Registrar\'s Office',
  'Restorative Dentistry',
  'Scholarship and Residency Services',
  'School Of Arts and Sciences',
  'School Of Professional Studies',
  'School Of Technology And Design',
  'SEEK',
  'Social Science',
  'Special Counsel',
  'Student Government Association',
  'Student Life and Development',
  'Student Wellness Center',
  'Testing Office',
  'Transfer Student Center and Recruitment',
  'Veterans Support Services  Vision Care Technology'];

departments.forEach(function(el){
  // pass array to frontend, do a foreach to add data to datalist
  console.log(el);
})