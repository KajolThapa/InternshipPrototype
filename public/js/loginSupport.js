$(document).ready(function(){
    // Default hide the div container holding the new survey form
    $('.newSurvey').hide();

    $('#newSurveyBtn').click(function(){
        $('.newSurvey').show();
    })
})