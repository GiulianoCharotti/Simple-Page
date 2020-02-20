//script de casa de rep

var dHouse = dataHouse.results[0].members;
var tabla = ' ';

function houseData(){
    for (var i = 0; i<dHouse.length;i++){
        tabla +='<tr>'+
        '<td><a href='+ dHouse[i].url +'>'+(dHouse[i].first_name+' '+ dHouse[i].middle_name+' '+dHouse[i].last_name)+'</a>'+ '</td>'+
        '<td>'+ dHouse[i].party+'</td>'+
        '<td>'+dHouse[i].state + '</td>'+
        '<td>'+dHouse[i].seniority + '</td>'+
        '<td>'+dHouse[i].votes_with_party_pct+ '%' + '</td>'
        +'</tr>';
    }
   
    return tabla; 
}
document.getElementById('tableBodyHouse').innerHTML=houseData();

