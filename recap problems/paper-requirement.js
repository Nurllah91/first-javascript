
function paperRequirement(firstBook, secondBook, thirdBook){
    const firstBookPaperPerUnit = 280;
    const secondBookPaperPerUnit = 190;
    const thirdBookPaperPerUnit = 250;


    const firstBookPapers = firstBookPaperPerUnit * firstBook;
    const secondBookPapers = secondBookPaperPerUnit * secondBook;
    const thirdBookPapers = thirdBookPaperPerUnit * thirdBook;


    const totalPapers = firstBookPapers + secondBookPapers + thirdBookPapers;
    return totalPapers;

}




const firstBookCopy = 20;
const secondBookCopy = 30;
const thirdBookCopy = 25;

const toalPapers = paperRequirement(firstBookCopy, secondBookCopy, thirdBookCopy);
console.log(toalPapers)