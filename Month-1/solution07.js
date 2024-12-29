let word = "github"

function checkPalindrome(word){
  if(typeof word !== "string" || !word){
    return `Please provide a valid string?`
  }
  let reversedString = word.split('').reverse().join('')
  if(word === reversedString){
    return `The given string "${word}" is palindrome.`
  } else{
    return `The given string "${word}" is not palindrome.`
  }
}

console.log(checkPalindrome(word))
