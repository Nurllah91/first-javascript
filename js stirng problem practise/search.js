     
     // const lyrics = "tumi  amar  sudhu amar noy to onno karo.. tumi sudhu amar";
        // const  doesExist = lyrics.includes("Onno");
        // console.log(doesExist);


        // avoid case sensitive

        const lyrics = "tumi  amar  sudhu amar noy to onno karo.. tumi sudhu amar";

        console.log(lyrics.indexOf("sudhu"));
        const lyricsLowercase = lyrics.toLowerCase()
        const searchString =   "ONNO";
        const searchStringLowercase = searchString.toLowerCase()
        const  doesExist = lyricsLowercase.includes(searchStringLowercase);
        console.log(doesExist);


        // starts with 
const tasbih = "subhanallah alhamdulillah la-ilaha illallah allahu akbar";
console.log(tasbih.startsWith("subhanallah"));

// endsWith 
const fileName = "my biodata .pdf";
const othersFile = "image.png";
console.log(othersFile.endsWith('.png'));
console.log(fileName.endsWith('.jpg'));