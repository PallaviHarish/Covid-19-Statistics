function findStat() {      
    var c=document.getElementById("country").value;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1d0ae464cfmsh6b3d460e2d54394p14f578jsnbb180000e711',
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
    }
    };

    fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country='+c, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById('confirmed').innerHTML="Confirmed Cases: "+response.data.confirmed;
        document.getElementById('deaths').innerHTML="Deaths: "+response.data.deaths;
        document.getElementById('location').innerHTML="Location: "+response.data.location;
        document.getElementById('lastChecked').innerHTML="Last Updated On: "+response.data.lastChecked;
    })
    .catch(err => console.error(err));
}
