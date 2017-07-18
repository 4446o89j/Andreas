var artists = ["Tupac", "Rihanna", "DMX", "PnB Rock", "Don Q", "Drake", "Migos", "Travis Scott", "Future"];
function randArtist(){
    console.log(artists[Math.round(Math.random()*artists.length-1)]);
}
for (var i=0; i<5; i++){
    randArtist();
}