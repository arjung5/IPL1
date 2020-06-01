
function extraruns(deliveries,matches){
  var result={};
  for(var i=0;i<matches.length;i++)
  {
   if(matches[i].season=="2016")
   {
     for(var j=0;j<deliveries.length;j++)
     {
       if(deliveries[j].match_id==matches[i].id)
       {
       if(result[deliveries[j].bowling_team])
       {
        result[deliveries[j].bowling_team]= result[deliveries[j].bowling_team]+parseInt(deliveries[j].extra_runs);
       }
       else
       {
          result[deliveries[j].bowling_team]=parseInt(deliveries[j].extra_runs);
      }
     }
    }
  }
   } 
    // console.log(result);
  return result;
}
module.exports=extraruns;