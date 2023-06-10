let flagPause = 0


// Every 1 second increase count
setInterval(function (){
    let c = document.getElementById('counter')
    count = parseInt(c.innerHTML)
    // Only running in not paused
    if (flagPause === 0){
    count += 1234}
    c.innerText = count

}, 1);

// Add event listener to each button
function addEventListenerToButtons(){
    let btns = document.querySelectorAll('button')
    let c = document.getElementById('counter')
    count = parseInt(c.innerHTML)

    let dictOfLikes = {};

    for (let b of btns){
        b.addEventListener('click', function(e) {
            console.log("I was clicked")
            console.log(e.target)
            if ((e.target.id === 'plus') && (flagPause === 0)) {
                console.log('plussss')

                count += 1000000
                c.innerText = count
            }
            else if ((e.target.id === 'minus') && (flagPause === 0)) {
                console.log('minnnuussss')
                count -= 1
                c.innerText = count
            } 
            else if ((e.target.id === 'heart') && (flagPause === 0)) {
                console.log('hearrtttt')

                let unorderedList = document.querySelector('ul')
                console.log(unorderedList)
                let listLength = document.querySelectorAll('li').length
                console.log(listLength)
  
                // Augmenting the like count
                if (count in dictOfLikes) {
                    dictOfLikes[count] += 1
                } else {
                    dictOfLikes[count] = 1
                }
                console.log(dictOfLikes)

                // Function that creates li object
                function addAnotherListItem(len, countNumber, countNumberLikes) {
                    if (len === undefined) {
                        let len = 0}

                    let li = document.createElement("li");
                    li.setAttribute("id", "id"+len);
                    li.appendChild(document.createTextNode(`Number ${countNumber} has ${dictOfLikes[countNumber]} likes!`));
                    return li}
                
                // Clearing out unordered list
                unorderedList.innerHTML = ''

                // Adding li with number/likes to unordered list
                for (const key in dictOfLikes){
                    let i = addAnotherListItem(len=listLength, countNumber =key)
                    console.log(i)
                    unorderedList.appendChild(i)
                    }


            } else if (e.target.id === 'pause') {
                console.log('Pause was clicked')

                function setPauseFlag(){
                    if (flagPause === 0) {
                        flagPause = 1
                    } else if (flagPause === 1) {
                        flagPause = 0
                    }}
                setPauseFlag()
                console.log(flagPause)
            } 
        })
    }
}

addEventListenerToButtons()

// Form interations and form submit listener
let myForm = document.getElementById('comment-form')
myForm.addEventListener("submit", formAction)

// Action when form submitted
function formAction (event) {
    event.preventDefault();
    
    if (flagPause === 0) {
        console.log("Form submit was clicked");
        let newComment = document.getElementById("comment-input").value;
        console.log(newComment)
        // Creating new paragraph with comment
        const newCommentParagraph = document.createElement("p");
        newCommentParagraph.innerText = newComment;
        document.getElementById("list").appendChild(newCommentParagraph);
    }
}