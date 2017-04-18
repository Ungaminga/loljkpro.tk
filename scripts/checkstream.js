var stream_name = "loljkpro";
var url = "https://api.twitch.tv/kraken/streams/"+stream_name+"?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
if (xhr.status == 200 && xhr.response["stream"] != null)
{
	var span = document.createElement('span');
	span.innerHTML = "Я <a href='https://www.twitch.tv/"+stream_name+"'>транслирую</a> " + xhr.response["stream"]["game"];
	document.getElementById("sidebar1").appendChild(span);
}};

xhr.send();