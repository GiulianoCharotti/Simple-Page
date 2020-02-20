
// var memberSenate= data.results[0].members;

// var numberOfRepublicans=0;
// var votesRepublicansWP=0;

// var numberOfDemocrats=0;
// var votesDemocratsWP=0;
// var numberOfIndependents=0;
// var total=0;

// function numberOfSenators(senado){
//     senado.forEach(miembros=>{
//         if(miembros.party=="R"){
//             numberOfRepublicans ++;

//             votesRepublicansWP+=votesWP;
//         }else if (miembros.party=="D"){
//             numberOfDemocrats ++;
//             votesDemocratsWP+=votesWP;
//         }else{
//             numberOfIndependents++;
//         } 
//     });

//     total = numberOfRepublicans+numberOfDemocrats+numberOfIndependents;
//     votesRepublicansWP /= numberOfRepublicans;
//     votesDemocratsWP/=numberOfDemocrats;
    
//     console.log(numberOfDemocrats);
//     console.log(numberOfRepublicans);
//     console.log(numberOfIndependents);
//     console.log(total);

//     console.log(votesRepublicansWP);
//     console.log(votesDemocratsWP);

// }
// numberOfSenators(memberSenate);

var membersSenate= data.results[0].members;
var numberOfRepublicans=0;
var votesWPRep= 0;
var numberOfDemocrats=0;
var votesWPDem= 0;
var numberOfIndependents=0;
var total=0;

function numberOfSenators(){
    for (var i =0; i<membersSenate.length;i++){
        if(membersSenate[i].party=="R"){
            numberOfRepublicans ++;
            votesWPRep+=parseInt(membersSenate[i].votes_with_party_pct);
        }else if (membersSenate[i].party=="D"){
            numberOfDemocrats ++;
            votesWPDem+=parseInt(membersSenate[i].votes_with_party_pct);
        }else{
            numberOfIndependents++;
        } 
    }
    total = numberOfRepublicans+numberOfDemocrats+numberOfIndependents;
    votesWPRep/=numberOfRepublicans;
    votesWPDem/=numberOfDemocrats;

    document.getElementById('nRep').innerHTML=numberOfRepublicans;
    document.getElementById('nDem').innerHTML=numberOfDemocrats;
    document.getElementById('nIndep').innerHTML=numberOfIndependents;
    document.getElementById('nTotal').innerHTML=total
  
    document.getElementById('perRep').innerHTML=votesWPRep.toFixed(2);
    document.getElementById('perDem').innerHTML=votesWPDem.toFixed(2)

}

var tabla =' ';
var tabla1 =' ';

function leastEngagedTable(){
  membersSenate.sort(function(a, b) {
    return (a.total_votes - b.total_votes);
    //return (a.missed_votes-b.missed_votes);
  });
  // function leastEngaged(){
    for (var i =0; i<membersSenate.length;i++){
  
      if (i<membersSenate.length*0.1){
      tabla += '<tr>' +
      '<td><a href='+ membersSenate[i].url +'>'+(membersSenate[i].first_name+' '+ membersSenate[i].last_name)+'</a>' +'</td>'+
      '<td>'+ membersSenate[i].missed_votes+'</td>'+
      '<td>'+ membersSenate[i].missed_votes_pct+'%'+'</td>'+
      '</tr>';
      }
    
  }
  document.getElementById('tableLeastEngaged').innerHTML=tabla;
};


function mostEngagedTable(){
  membersSenate.sort(function(a, b) {
    return (b.total_votes-a.total_votes);
  });

//  function mostEngaged(){
    for (var i =0; i<membersSenate.length;i++){
      if (i<membersSenate.length*0.1){
      tabla1 += '<tr>' +
      '<td><a href='+ membersSenate[i].url +'>'+(membersSenate[i].first_name+' '+ membersSenate[i].last_name)+'</a>' +'</td>'+
      '<td>'+ membersSenate[i].missed_votes+'</td>'+
      '<td>'+ membersSenate[i].missed_votes_pct+'%'+'</td>'+
      '</tr>';
      }
    }
    //return(tabla);
 //     console}
  document.getElementById('tableMostEngaged').innerHTML=tabla1;
}

var tabla2="";
var tabla3="";


function leastLoyalS(){
  membersSenate.sort(function(a, b) {
    return (a.votes_with_party_pct - b.votes_with_party_pct);
    });
  for (var i =0; i<membersSenate.length;i++){
    if (i<membersSenate.length*0.1){
    tabla2 += '<tr>'+
    '<td><a href='+ membersSenate[i].url +'>'+(membersSenate[i].first_name+' '+ membersSenate[i].last_name)+'</a>' +'</td>'+
    '<td>'+ parseInt(((membersSenate[i].total_votes*membersSenate[i].votes_with_party_pct)/100))+'</td>'+
    '<td>'+ membersSenate[i].votes_with_party_pct+'%'+'</td>'+
    '</tr>';
    }
  }
  document.getElementById('leastLoyalS').innerHTML=tabla2;
};

function mostLoyalS(){
  membersSenate.sort(function(a, b) {
    return (b.votes_with_party_pct-a.votes_with_party_pct);
    });
  for (var i =0; i<membersSenate.length;i++){
    if (i<membersSenate.length*0.1){
    tabla3 += '<tr>' +
    '<td><a href='+ membersSenate[i].url +'>'+(membersSenate[i].first_name+' '+ membersSenate[i].last_name)+'</a>' +'</td>'+
    '<td>'+ parseInt(((membersSenate[i].total_votes*membersSenate[i].votes_with_party_pct)/100))+'</td>'+
    '<td>'+ membersSenate[i].votes_with_party_pct+'%'+'</td>'+
    '</tr>';
    }
  }
  document.getElementById('mostLoyalS').innerHTML=tabla3;
};

