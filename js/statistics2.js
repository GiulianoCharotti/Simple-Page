var membersHouse= dataHouse.results[0].members;
var numberOfRepublicans=0;
var votesWPRep= 0;
var numberOfDemocrats=0;
var votesWPDem= 0;
var numberOfIndependents=0;
var total=0;

// function e(){
//   for (let index = 0; index < membersHouse.length; index++) {
//     if (!isNaN(membersHouse[index].votes_with_party_pct)) {
//       if(membersHouse[index].party ==="R"){
//         numberOfRepublicans++;
//         console.log(membersHouse[index].first_name);
//         console.log(parseInt(membersHouse[index].votes_with_party_pct));
//         votesWPRep=votesWPRep+membersHouse[index].votes_with_party_pct
//       }
//     }
//   }
//   console.log(votesWPRep);
// }
// e();

function numberOfH(){
  for (var i =0; i<membersHouse.length;i++){
    //!isNaN me fixeo el problema
    if (!isNaN(membersHouse[i].votes_with_party_pct)){
      if(membersHouse[i].party=="R"){
          numberOfRepublicans ++;
          votesWPRep+=parseInt(membersHouse[i].votes_with_party_pct);
      }else if (membersHouse[i].party=="D"){
          numberOfDemocrats ++;
          votesWPDem+=parseInt(membersHouse[i].votes_with_party_pct);
      }else{
          numberOfIndependents++;
      } 
    }
  }
  total = numberOfRepublicans+numberOfDemocrats+numberOfIndependents;
  votesWPRep/=numberOfRepublicans;
  votesWPDem/=numberOfDemocrats;

  document.getElementById('nRep').innerHTML=numberOfRepublicans;
  document.getElementById('nDem').innerHTML=numberOfDemocrats;
  document.getElementById('nIndep').innerHTML=numberOfIndependents;
  document.getElementById('nTotal').innerHTML=total

  document.getElementById('perRep').innerHTML=votesWPRep;
  document.getElementById('perDem').innerHTML=votesWPDem;

};

var tabla =' ';
var tabla1 =' ';

function leastEngagedTableH(){
  membersHouse.sort(function(a, b) {
    return (a.total_votes - b.total_votes);
    //return (a.missed_votes-b.missed_votes);
  });
  // function leastEngaged(){
    for (var i =0; i<membersHouse.length;i++){
      if(!isNaN(membersHouse[i].votes_with_party_pct)){
        if (i<membersHouse.length*0.1){
        tabla += '<tr>' +
        '<td><a href='+ membersHouse[i].url +'>'+(membersHouse[i].first_name+' '+ membersHouse[i].last_name)+'</a>' +'</td>'+
        '<td>'+ membersHouse[i].missed_votes+'</td>'+
        '<td>'+ membersHouse[i].missed_votes_pct+'%'+'</td>'+
        '</tr>';
        }
      }
    }
  document.getElementById('tableLeastEngagedH').innerHTML=tabla;
};

function mostEngagedH(){
  membersHouse.sort(function(a, b) {
    return (b.total_votes-a.total_votes);
    //return (a.missed_votes-b.missed_votes);
  });
  // function leastEngaged(){
    for (var i =0; i<membersHouse.length;i++){
      if(!isNaN(membersHouse[i].votes_with_party_pct)){
        if (i<membersHouse.length*0.1){
        tabla1 += '<tr>' +
        '<td><a href='+ membersHouse[i].url +'>'+(membersHouse[i].first_name+' '+ membersHouse[i].last_name)+'</a>' +'</td>'+
        '<td>'+ membersHouse[i].missed_votes+'</td>'+
        '<td>'+ membersHouse[i].missed_votes_pct+'%'+'</td>'+
        '</tr>';
        }
      }
    }
  document.getElementById('tableMostEngagedH').innerHTML=tabla1;
};


var tabla2="";
var tabla3="";


function leastLoyalS(){
  membersHouse.sort(function(a, b) {
    return (a.votes_with_party_pct - b.votes_with_party_pct);
    });
  for (var i =0; i<membersHouse.length;i++){
    if (i<membersHouse.length*0.1){
    tabla2 += '<tr>' +
    '<td><a href='+ membersHouse[i].url +'>'+(membersHouse[i].first_name+' '+ membersHouse[i].last_name)+'</a>' +'</td>'+
    '<td>'+ parseInt(((membersHouse[i].total_votes*membersHouse[i].votes_with_party_pct)/100))+'</td>'+
    '<td>'+ membersHouse[i].votes_with_party_pct+'%'+'</td>'+
    '</tr>';
    }
  }
  document.getElementById('leastLoyalS').innerHTML=tabla2;
};


function mostLoyalS(){
  membersHouse.sort(function(a, b) {
    return (b.votes_with_party_pct-a.votes_with_party_pct);
    });
  for (var i =0; i<membersHouse.length;i++){
    if (i<membersHouse.length*0.1){
    tabla3 += '<tr>' +
    '<td><a href='+ membersHouse[i].url +'>'+(membersHouse[i].first_name+' '+ membersHouse[i].last_name)+'</a>' +'</td>'+
    '<td>'+ parseInt(((membersHouse[i].total_votes*membersHouse[i].votes_with_party_pct)/100))+'</td>'+
    '<td>'+ membersHouse[i].votes_with_party_pct+'%'+'</td>'+
    '</tr>';
    }
  }
  document.getElementById('mostLoyalS').innerHTML=tabla3;
};
