import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var inputtedTitle = $("#title").val();
    var inputtedBody = $("#body").val();
    var newEntry = new Entry(inputtedTitle, inputtedBody);
    $(".wordCount").text(newEntry.wordCount());
    $(".vowelCount").text(newEntry.vowelCount());
    $(".consonantCount").text(newEntry.consonantCount());
  });
});
