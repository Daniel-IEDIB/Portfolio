const videos = [
  { id: "1166030869", title: "Opening", year: 2024, tags: ["After Effects","Premiere Pro"] },
  { id: "1166030823", title: "Artes Marciales", year: 2024, tags: ["Premiere Pro"] },
  { id: "1166030923", title: "Anuncio Crocs", year: 2024, tags: ["After Effects"] },
  { id: "1166031028", title: "Movement Tracking", year: 2025, tags: ["After Effects", "Rotoscopia", "Premiere Pro"] },
  { id: "1166030996", title: "Evento", year: 2025, tags: ["After Effects", "Rotoscopia", "Premiere Pro"] },
  { id: "1166030964", title: "Feliz Navidad", year: 2024, tags: ["After Effects"] },
  { id: "1166030721", title: "Edición Vertical", year: 2024, tags: ["Premiere Pro"] },
  { id: "1166090903", title: "Proyecto", year: 2024, tags: ["Autodesk Maya, Premiere Pro"] },
  { id: "1166091212", title: "Cafééé!!!", year: 2023, tags: ["Photoshop"] },
];

const grid = document.getElementById("video-grid");

function createVideoCard(video){
  const article = document.createElement("article");
  article.className = "video-card";

  const aspect = document.createElement("div");
  aspect.className = "video-aspect";

  const img = document.createElement("img");
  img.src = `media/thumbs/${video.id}.jpg`;
  img.alt = video.title;
  img.style.position = "absolute";
  img.style.inset = "0";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.cursor = "pointer";

  const play = document.createElement("div");
  play.innerHTML = `<svg width="70" height="70" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.868V20.132C5 21.065 6.049 21.585 6.83 21.06L20.18 12.893C20.93 12.382 20.93 11.618 20.18 11.107L6.83 2.94C6.05 2.415 5 2.935 5 3.868Z"/></svg>`;

  overlay.appendChild(play);
  aspect.appendChild(img);
  aspect.appendChild(overlay);

  const info = document.createElement("div");
  info.className = "video-info";
  info.innerHTML = `
    <h4>${video.title}</h4>
    <span>${video.year} • ${video.tags.join(" · ")}</span>
  `;

  article.appendChild(aspect);
  article.appendChild(info);

  function embed(){
    if(aspect.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0`;
    iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write; web-share";
    iframe.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
    iframe.setAttribute("allowfullscreen","");
    iframe.style.position = "absolute";
    iframe.style.inset = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    aspect.innerHTML = "";
    aspect.appendChild(iframe);
  }

  overlay.addEventListener("click", embed);

  return article;
}

videos.forEach(video => {
  grid.appendChild(createVideoCard(video));
});