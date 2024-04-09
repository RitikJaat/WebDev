function createCard(title, cName, views, rdate, duration, thumbnail) {
    let viewstr;
    if (views < 1000000) {
        viewstr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    }
    else {
        viewstr = views / 1000 + "K";
    }

    let html = `<div class="card">
    <div class="image" draggable="false">
        <img src="${thumbnail}" alt="kamlee" draggable="false">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewstr} listens. ${rdate}</p>
    </div>
</div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Shartaan - Mani Longia Starboy X", "", 875000, "", "2:35","https://i.scdn.co/image/ab67616d00001e025ea39e07747898fb95833a29")