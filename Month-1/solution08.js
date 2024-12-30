function findVowels(word){
  const vowels = "aeiou"
  const wordArr = word.toLowerCase().split('')
  const hasVowel = wordArr.some(letter => vowels.includes(letter))

  if (hasVowel) {
    console.log(`The given word "${word}" contains vowels`);
  } else {
    console.log(`The given word "${word}" does not contain vowels`);
  }
 
}

findVowels("word")
findVowels("Ali")
findVowels("Trn")
findVowels("Saad")


//The some() method of Array instances tests whether at least
// one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided
// function returns true; otherwise it returns false. It doesn't modify the array.
