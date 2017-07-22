var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function populate() {
	for (var i = 0; i < songs.length; i++) {
		var song = songs[i].indexOf(">") - 1;
		document.getElementById(i).innerHTML = songs[i].slice(0,song);
		for (var j = 0; j < 2; j++) {
			var artistnamebegin = songs[i].indexOf(">") + 1;
			var artistnameend = songs[i].indexOf("on the") - 1;
			var albumnamebegin = songs[i].indexOf("on the album");
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

function updateTextInput(val) {
  document.getElementById('num1').value = val;
}

function updateTextInput1(val) {
  document.getElementById('num2').value = Number(val);
}

document.getElementById("addb").addEventListener("click", function() {
	document.getElementById("main").classList.add('hidden');
	document.getElementById("addb").style.color = "#2dfc1e";
	document.getElementById("viewb").style.color = "white"
	document.getElementById("body").style.backgroundColor = "#c91e62";
	document.getElementById("addb").style.backgroundColor = "#ffff14";
	document.getElementById("viewb").style.backgroundColor = "transparent";
	document.getElementById("add").classList.remove('hidden');
				
})
document.getElementById("viewb").addEventListener("click", function() {
	document.getElementById("add").classList.add('hidden');
	document.getElementById("viewb").style.color = "#2dfc1e";
	document.getElementById("addb").style.color = "white"
	document.getElementById("body").style.backgroundColor = "#ff4d16";
	document.getElementById("viewb").style.backgroundColor = "#ffff14";
	document.getElementById("addb").style.backgroundColor = "transparent";
	document.getElementById("main").classList.remove('hidden');
				
})

document.getElementById("addbutton").addEventListener("click", addtoplaylist);


function addtoplaylist() {
	var name = document.getElementById("song-name").value;
	var artist = document.getElementById("artist").value;
	var album = document.getElementById("album-name").value;
	if (name ==="") {
		alert("Enter a Song Name");
		document.getElementById("song-name").focus();
	}
	else if(artist === "") {
		alert("Enter an Artist Name");
		document.getElementById("artist").focus();
	}
	else if(album === "") {
		alert("Enter an Album Name");
		document.getElementById("album-name").focus();
	}
	else {
		songs.push(name+" > by "+artist+" on the album " +album);
		addtodom();
		document.getElementById("song-name").focus();
	}
}

function addtodom() {
	for (var i = songs.length-1; i < songs.length; i++) {
		document.getElementById("row").innerHTML+=
			`<div class="col-12 single-song">
	         <h2 id="${i}">Song Name</h2>
	         <label id="${i}0">Artist name</label> | <label id="${i}1">Album name</label> | <label>Genre</label>
	         </div>`;
		document.getElementById("song-name").value="";
		document.getElementById("artist").value="";
		document.getElementById("album-name").value="";
					
	}

}
document.getElementById("song-name").onkeydown = enter;
document.getElementById("artist").onkeydown = enter;
document.getElementById("album-name").onkeydown = enter;

function enter(e) {
	if (e.keyCode == 13) {
		addtoplaylist();	
	}
}