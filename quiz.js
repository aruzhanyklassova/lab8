
$(document).ready(function(){ 
     var questions = ['How many days are in one year?', 'How many legs does a spider have?', 'Where does Santa Claus live?', 'How many planets are in our solar system?', 'if you freeze water, what do you get?'];
     var choice_options = [
          ['367','368','365','370'],
          ['7','8','9','10'],
          ['Almaty', 'Semey', 'Astana', 'The North Pole'],
          ['7','8','9','10'],
          ['Sand', 'Alcohol', 'Ice', 'Icecream']
     ];
     var answers = ['365','8','The North Pole', '8', 'Ice'];

     var quizbox = $("#quiz-box");
     var index = 1;

     for(var i=0; i< questions.length; i++) {
          var question = $("<div>").addClass("question").text("Q"+(i+index)+"   "+questions[i])
          quizbox.append(question);

          var choices = $("<div>").addClass("choices");
          for (var j = 0; j < choice_options[i].length; j++) {
               var label = $("<label>");
               var input = $('<input type = "radio" name = "q' + i +'" value = "'+ choice_options[i][j]+'">');
               var text = $('<span>'+choice_options[i][j]+'</span>');
               label.append(input);
               label.append(text);
               choices.append(label)
          }
          quizbox.append(choices);
     }



    
     $(".button-3").click (function (event){
          var countCorrect = 0;
         for (var i = 0; i < questions.length; i++) {
              var selected = $('input[name="q'+i+'"]:checked').val();
              if (selected === answers[i]) {
               countCorrect++;
              }
         }
     $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
     }); 


});