// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
//stringify convierte el objeto a una cadena de datos

// script del senado
var d = data.results[0].members;
var tabla = ' ';


function dataSenate(){
    for (var i = 0; i<d.length;i++){
        tabla +='<tr>'+                                                               //? else              :entonces                
        '<td><a href='+ d[i].url +'>' + (d[i].first_name+' '+( d[i].middle_name !== null ? d[i].middle_name : " ")+' '+d[i].last_name) + '</a>'+ '</td>'+
        '<td>'+ d[i].party+'</td>'+
        '<td>'+d[i].state + '</td>'+
        '<td>'+d[i].seniority + '</td>'+
        '<td>'+d[i].votes_with_party_pct+ '%' + '</td>'
        +'</tr>';

    }
    

    return tabla; 
}

document.getElementById('tableBody').innerHTML=dataSenate();
