function economical(deliveries,matches){
    var myMap=new Map();
    var myMap1=new Map();
    var arr=[];
    for(let i=0;i<matches.length;i++)
    { 
      if(matches[i].season=="2015")
      {
        for(let j=0;j<deliveries.length;j++)
        {
           if(deliveries[j].match_id==matches[i].id)
           {    
                if(myMap1.has(deliveries[j].bowler))
                { 
                if(deliveries[j].is_super_over!=0)
                {
                    let ans=myMap1.get(deliveries[j].bowler);
                    ans=ans+6;
                    myMap1.set(deliveries[j].bowler,ans);
                }
                if(deliveries[j].ball<"7")
                {
                    let ans=myMap1.get(deliveries[j].bowler);
                    ans=ans+1;
                    myMap1.set(deliveries[j].bowler,ans);
                }
                }
                else
                {
                   if(deliveries[j].ball<"7")
                   {
                    myMap1.set(deliveries[j].bowler,1); 
                   }
                }
           }   
       }
    }
    }
    for(let i=0;i<matches.length;i++)
    { 
      if(matches[i].season=="2015")
      {
        for(let j=0;j<deliveries.length;j++)
        {
           if(deliveries[j].match_id==matches[i].id)
           {    
                if(!arr.includes(deliveries[j].bowler))
                {
                  arr.push(deliveries[j].bowler);
                }
           }   
       }
    }
    }
for(let i=0;i<matches.length;i++)
{ 
  if(matches[i].season=="2015")
  {
    for(let j=0;j<deliveries.length;j++)
    {
       if(deliveries[j].match_id==matches[i].id)
       {
            if(myMap.has(deliveries[j].bowler))
            { 
                let ans=myMap.get(deliveries[j].bowler);
                ans=ans+parseInt(deliveries[j].total_runs)-(parseInt(deliveries[j].legbye_runs)+parseInt(deliveries[j].bye_runs)+parseInt(deliveries[j].penalty_runs));
                myMap.set(deliveries[j].bowler,ans);
            }
            else
            {
                myMap.set(deliveries[j].bowler,parseInt(deliveries[j].total_runs)-(parseInt(deliveries[j].legbye_runs)+parseInt(deliveries[j].bye_runs)+parseInt(deliveries[j].penalty_runs)));
            }
       }   
   }
}
}
let nam="abc";
let min=99999999999;
let result={};
var count=10;
var compp=0;
var sample=[];
while(count>0)
{
for(let i=0;i<arr.length;i++)
{
    if(myMap1.has(arr[i])&&myMap.has(arr[i]))
    {
        let c1= myMap1.get(arr[i]);
        let c2=myMap.get(arr[i]);
        c2=c2*6;
        c2=c2/c1;
        if(min>c2 && compp<c2)
        {
            min=c2;
            nam=arr[i];
            
        }
    }
}
sample.push(nam);
result[nam]=min; 
compp=min;
min=9999999;
count--;
}
var arr1=[];

    for(var i=0;i<sample.length;i++)
    {
        let result1={}
        result1["bowler"]=sample[i];
        let c1= myMap1.get(sample[i]);
        let c2=myMap.get(sample[i]);
        c2=c2*6;
        c2=c2/c1;
        result1["economy"]=c2;
        arr1.push(result1);
    }

// console.log(arr1);
return arr1;
}













  module.exports=economical;