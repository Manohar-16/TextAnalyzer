console.log("Yes It works")
uppercase.addEventListener("click", () => {
    console.log("Transforming to Uppercase")
    inpText.value = inpText.value.toUpperCase()
    
})

lowercase.addEventListener("click", () => {
    console.log("Transforming to lowercase")
    inpText.value = inpText.value.toLowerCase()

})

removeExtraSpaces.addEventListener("click", () => {
    console.log("Remove extra spaces")
    inpText.value = inpText.value.replace(/\s+/g,' ').trim();

})

removeLines.addEventListener("click", () => {
    console.log("Remove extra new Lines......")
    inpText.value = inpText.value.replace(/\n+/g,'\n').trim();

})

inpText.addEventListener("input", () => {
    console.log("changed")
    charCount.innerText=inpText.value.length
    wordCount.innerText=inpText.value.trim().split(" ").length
})