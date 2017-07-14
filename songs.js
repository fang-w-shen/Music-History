var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";




function populate() {
	for (var i = 0; i < 5; i++) {
		var song = songs[i].indexOf(">") - 1;
		document.getElementById(i).innerHTML = songs[i].slice(0,song);
		for (var j = 0; j < 2; j++) {
			var artistnamebegin = songs[i].indexOf(">") + 1;
			var artistnameend = songs[i].indexOf("on the") - 1;
			var albumnamebegin = songs[i].indexOf("album") + 6;
			var albumnameend = songs[i].length;
			if (j === 0) {
				document.getElementById(i+""+j).innerHTML = songs[i].slice(artistnamebegin,artistnameend);
			}
			else {
				document.getElementById(i+""+j).innerHTML = songs[i].slice(albumnamebegin,albumnameend);
			}
		}
	}
}