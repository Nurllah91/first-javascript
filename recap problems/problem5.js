const scores = [32, 344, 334, 33, 24, 24, 44, 244, 353, 677, 345];

for( let i = 0; i < scores.length; i++){
    singleScores = scores[i];
    if(singleScores > 80){
        console.log(singleScores);
        }else{
            continue;
        }
}