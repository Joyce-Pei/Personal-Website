function myFunction() {
  document.getElementByTpye("text").submit();
}

function clicked() {
    if (confirm('Do you want to submit?')) {
           yourformelement.submit();
    } 
    else {
        return false;
    }
}