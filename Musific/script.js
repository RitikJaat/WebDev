console.log("js linked")

async function getSongs() {

    try {
        let a = await fetch("http://127.0.0.1:3000/Musific/test/");
        let respond = await a.text();

        // Check if response is successful
        if (!a.ok) {
            throw new Error(`Server responded with status: ${a.status}`);
        }

        let div = document.createElement("div");
        div.innerHTML = respond;

        let as = div.getElementsByTagName("a");
        let songs = [];

        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            // Modify filter condition based on your song link format
            if (element.href.endsWith(".m4a")) {
                songs.push(element.href);
            }
        }
        return songs;
    } catch (error) {
        console.error("Error fetching songs:", error);
        // Handle the error here, maybe display a message to the user
        return [];  // Return empty array in case of error
    }
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