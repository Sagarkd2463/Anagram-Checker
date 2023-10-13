const btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    //get the inputs of two words from user
    const word1 = document.getElementById("word1Input").value.toLowerCase();
    const word2 = document.getElementById("word2Input").value.toLowerCase();

    //remove spaces and punctuations
    const cleanedWord1 = word1.replace(/[^\w]/g, "");
    const cleanedWord2 = word2.replace(/[^\w]/g, "");

    //check if the lengths are same or not
    if(cleanedWord1.length !== cleanedWord2.length){
        result.textContent = "Not an Anagram!";
        result.classList.remove("success");
        result.classList.add("error");
        return;   
    }

    //count letter occurences in the first word
    const letterCount1 = {};
    for(const char of cleanedWord1){
        letterCount1[char] = (letterCount1[char] || 0) + 1;
    }

    const letterCount2 = {};
    for(const char of cleanedWord2){
        letterCount2[char] = (letterCount2[char] || 0) + 1;
    }

    //compare letter counts to know if they are anagram or not
    for(const char in letterCount1){
        if(letterCount1[char] !== letterCount2[char]) {
            result.textContent = "Not an Anagram!";
            result.classList.remove("success");
            result.classList.add("error");
            return;
        }
    }

    //if all the letter counts are same then it's an anagram
    document.getElementById("result").textContent = "It's an Anagram!";
    result.classList.remove("error");
    result.classList.add("success");
});