console.log("js linked")

async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/Musific/test/");
    let respond = await a.text();

    let div = document.createElement("div");
    div.innerHTML = respond;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

async function main() {
    let songs = await getSongs();
    console.log(songs);

    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("ontimeupdate", () => {
        let duration = audio.duration;
        console.log(duration);
    })
}



main();