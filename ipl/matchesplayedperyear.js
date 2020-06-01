function matchesplayedperyear(matches){
    const result={};
    for(let match of matches)
    {
        const season=match.season;
        if(result[season]){
            result[season]+=1;
            // console.log(result[season]);
        }
        else
        {
            result[season]=1;
        }
    }
    return result;
}
// console.log(matchesplayedperyear);
module.exports=matchesplayedperyear;