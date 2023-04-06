let movies = [
  {
    name: "Falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, dolor sit amet consectetur adipisicing elit. Dict",
    img: "assets/slider 2.png"
  },
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, dolor sit amet consectetur adipisicing elit. Dict",
    img: "assets/slider 1.png"
  },
  {
    name: "Wanda Vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, dolor sit amet consectetur adipisicing elit. Dict",
    img: "assets/slider 3.png"
  },
  {
    name: "Raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, dolor sit amet consectetur adipisicing elit. Dict",
    img: "assets/slider 4.png"
  },
  {
    name: "Luca",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex, dolor sit amet consectetur adipisicing elit. Dict",
    img: "assets/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
// track the current slide
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].img;
  slideIndex++;

  // setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movies-title";
  p.className = "movies-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtbtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  prebtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
