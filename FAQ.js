const questionItemHeaders = document.querySelectorAll(".question-item-header");
questionItemHeaders.forEach(questionItemHeader => {
    questionItemHeader.addEventListener("click", event => {
     const currentlyActivequestionItemHeader = document.querySelector(".question-item-header.active");
     if(currentlyActivequestionItemHeader && currentlyActivequestionItemHeader!==questionItemHeader) {
       currentlyActivequestionItemHeader.classList.toggle("active");
       currentlyActivequestionItemHeader.nextElementSibling.style.maxHeight = 0;
     }
     questionItemHeader.classList.toggle("active");
    const questionItemBody = questionItemHeader.nextElementSibling;
    if(questionItemHeader.classList.contains("active")) {
      questionItemBody.style.maxHeight = questionItemBody.scrollHeight + "px";
    }
    else {
      questionItemBody.style.maxHeight = 0;
    }
  });
});