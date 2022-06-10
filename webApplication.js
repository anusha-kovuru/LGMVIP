console.log("INFINITY TEAM API")
function getData(a){
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        var value=data;
        var img1=(value['data'][1]['avatar']);
        document.getElementById('pic1').src=img1;
        var img2=(value['data'][2]['avatar']);
        document.getElementById('pic2').src=img2;
        var img3=(value['data'][3]['avatar']);
        document.getElementById('pic3').src=img3;
        var img4=(value['data'][0]['avatar']);
        document.getElementById('pic4').src=img4;
        var img5=(value['data'][4]['avatar']);
        document.getElementById('pic5').src=img5;
        var img6=(value['data'][5]['avatar']);
        document.getElementById('pic6').src=img6;

        var firstName=(value['data'][0]['first_name']);
        var lastName=(value['data'][0]['last_name']);
        document.getElementById('name1').innerHTML = firstName+" "+lastName;
        var firstName=(value['data'][1]['first_name']);
        var lastName=(value['data'][1]['last_name']);
        document.getElementById('name2').innerHTML = firstName+" "+lastName;
        var firstName=(value['data'][2]['first_name']);
        var lastName=(value['data'][2]['last_name']);
        document.getElementById('name3').innerHTML = firstName+" "+lastName;
        var firstName=(value['data'][3]['first_name']);
        var lastName=(value['data'][3]['last_name']);
        document.getElementById('name4').innerHTML = firstName+" "+lastName;
        var firstName=(value['data'][4]['first_name']);
        var lastName=(value['data'][4]['last_name']);
        document.getElementById('name5').innerHTML = firstName+" "+lastName;
        var firstName=(value['data'][5]['first_name']);
        var lastName=(value['data'][5]['last_name']);
        document.getElementById('name6').innerHTML = firstName+" "+lastName;

        var mail1=(value['data'][0]['email']);
        document.getElementById('mail1').innerHTML=mail1;
        var mail2=(value['data'][1]['email']);
        document.getElementById('mail2').innerHTML=mail2;
        var mail3=(value['data'][2]['email']);
        document.getElementById('mail3').innerHTML=mail3;
        var mail4=(value['data'][3]['email']);
        document.getElementById('mail4').innerHTML=mail4;
        var mail5=(value['data'][4]['email']);
        document.getElementById('mail5').innerHTML=mail5;
        var mail6=(value['data'][5]['email']);
        document.getElementById('mail6').innerHTML=mail6;
    })
}