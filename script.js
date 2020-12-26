//palindrome

var arrLetters = [] ;
var word = "madam" ;
var rword = "" ;

for (var i = 0; i< word.length; i++){
    arrLetters.push(word[i])
}

for (var i = 0; i< word.length; i++){
    rword += arrLetters.pop()
}

if(rword === word){
    console.log(word + " is a Palindrome")
} else {
    console.log(word + " is not a Palindrome")
}