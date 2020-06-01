function winnigteampervenue(deliveries,matches){
    var arr=[];
    for(let i=0;i<matches.length;i++)
    {
        if(!arr.includes(matches[i].venue))
        {
            arr.push(matches[i].venue);
        }
    }
    var result={}
    for(let j=0;j<arr.length;j++)
    { 

        var ans={}
      for(let i=0;i<matches.length;i++)
      {
        if(matches[i].venue===arr[j])
        {
              if(ans[matches[i].winner])
              {
                  ans[matches[i].winner]=ans[matches[i].winner]+1;
              }
              else
              {
                ans[matches[i].winner]=1;
              }
        }
      }
      result[arr[j]]=ans;
    }
    // console.log(result);
    return result;
}
// console.log(winnigteampervenue);
module.exports=winnigteampervenue;

