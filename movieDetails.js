const posterBig = document.querySelector(".poster_big");
const movieDetailnavContainer = document.querySelector(
  ".movieDetailnavContainer"
);
const gradient = document.querySelector(".gradient");
const posterBigImg = document.querySelector(".poster_big_img");
const posterBBig = document.querySelector(".posterbig");
const arrowLeft = document.querySelector(".arrow_left");
const hamburger = document.querySelector(".hamburger");
const NowPlayingMoviesDiv = document.querySelector(".Now_playing_movies_div");
const leftArrow = document.querySelectorAll(".leftarrow");
const rightarrow = document.querySelectorAll(".rightarrow");
const lightDarkmode = document.querySelector(".light_darkmode");
const movieDetails = document.querySelector(".movie_details");
const sectionStory = document.querySelector(".section_story");
const movieDetailsAboutCategoryUl = document.querySelector(
  ".movie_details_about_category_ul"
);
const hamburgerPhone = document.querySelector(".hamburgerphone");
const sidenavChildContainer = document.querySelector(
  ".sidenav_child_container"
);
const overlaySideNavabar = document.querySelector(".overlay_side_navabar");
const sidenav = document.querySelector(".sidenav");
const searchbox = document.querySelector(".search");
const recommendationMoviesDiv = document.querySelector(
  ".recommendation_movies_div"
);
const SimilarMoviesDiv = document.querySelector(".Similar_movies_div");
const Casdiv = document.querySelector(".Casdiv");
const preLoader = document.querySelector(".preloader");
const Trailer_section = document.querySelector(".Trailer_section");
const reccomendation = document.querySelector(".reccomendation");

window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

const Castfun = (castee) => {
  let url = "./personDetail.html?id=" + encodeURIComponent(castee.id);
  return `<div class="Now_playing_movies castdiv" >
    <a class="posterlink" href="${url}"> <img class="poster" data-id="${castee.id}" src="https://image.tmdb.org/t/p/w500/${castee.profile_path}"
        onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
         loading="lazy" alt="${castee.original_name}"></a>
        <div class="name_character_container">
         <p class="movie_title">${castee.original_name}</p>
         <div class="date_rating casteecharacter" >
         ${castee.character}
             </div>
             </div>
         </div>`;
};

const Trailerfunc = function (id) {
  return `<aside name="san@dbox" id="video-player">
<iframe name="fra@mez" id="YouTube-Iframe" class="youtubePlayer lazyload" src="https://freembed.site/embed/movie/?id=${id}" width="100%" height="100%" loading="lazy" frameborder="0" allowfullscreen></iframe>

<div id="video-caption">Default Server - No Ads</div>
<div id="playlist">
<button class="lazyload active button" data-bg="" data-iframe="https://player.vidzee.wtf/embed/movie/?id=${id}" data-caption="Default Server - No Ads">Default Server - No Ads</button>

<button class="lazyload active button" data-bg="" data-iframe="https://freembed.site/embed/hindi/?id=${id}" data-caption="Hindi - No Ads">Hindi - No Ads</button>

<button class="lazyload active button" data-bg="" data-iframe="https://freembed.site/embed/tamil/?id=${id}" data-caption="Tamil - No Ads">Tamil - No Ads</button>

<button class="lazyload active button" data-bg="" data-iframe="https://freembed.site/embed/telugu/?id=${id}" data-caption="Telugu - No Ads">Telugu - No Ads</button>

<button class="lazyload active button" data-bg="" data-iframe="https://freembed.site/embed/bengali/?id=${id}" data-caption="Bengali - No Ads">Bengali - No Ads</button>

<button class="lazyload active button" data-bg="" data-iframe="https://freembed.site/embed/vietnam/?id=${id}" data-caption="Vietnam - No Ads">Vietnam - No Ads</button>
</div>
</aside>`;

var frames = document.getElementsByTagName('iframe');
for (var frame of frames) {
    frame.setAttribute('sandbox', 'allow-modals');
    frame.setAttribute('sandbox', 'allow-orientation-lock');
    frame.setAttribute('sandbox', 'allow-pointer-lock');
    frame.setAttribute('sandbox', 'allow-presentation');
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.setAttribute('sandbox', 'allow-top-navigation');
    frame.setAttribute('sandbox', 'allow-forms');
    frame.setAttribute('sandbox', 'allow-same-origin');
  }

window.onload = function(){
    var aside = document.getElementsByName("sandbox")[0]
    var iframe = document.getElementsByName("framez")[0]
    aside.addEventListener('click',sndbx,false);

    function sndbx(){
    var nibba = document.getElementById("YouTube-Iframe").src;
    if(iframe.sandbox == 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'){
    document.getElementById("YouTube-Iframe").removeAttribute("sandbox"); 
    }
    frames['framez'].location.href=nibba;
    iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
    }
  }
};

let url = document.location.href;
let fetcid = url.slice(url.indexOf("=") + 1);
const movieLoad = function () {
  let trailerHtml = Trailerfunc(fetcid);
  Trailer_section.innerHTML = trailerHtml;
  CurrMovie(fetcid).then((dat) => {
    let htm = "";
    htm = html2(dat);
    movieDetails.innerHTML = htm;
    let BigPoster = Bigposter(dat);
    posterBBig.innerHTML = BigPoster;
    sectionStory.textContent = dat.overview;
    let castarr = dat.credits.cast;
    if (castarr.length > 10) {
      let NewCastarr = castarr.slice(0, 10);
      NewCastarr.forEach((item) => {
        if (item.profile_path !== null) {
          const castehtml = Castfun(item);
          Casdiv.insertAdjacentHTML("beforeend", castehtml);
        }
      });
    } else {
      castarr.forEach((item) => {
        if (item.profile_path !== null) {
          const castehtml = Castfun(item);
          Casdiv.insertAdjacentHTML("beforeend", castehtml);
        }
      });
    }

    const castdiv = document.querySelectorAll(".castdiv");
    castdiv.forEach(
      (ele, i) => (ele.style.transform = `TranslateX(${i * 115}%)`)
    );
  });
};

searchbox.addEventListener("click", function () {
  location.replace("./search.html");
});

hamburgerPhone.addEventListener("click", function () {
  sidenavChildContainer.classList.add("sidenav_container_active");
  overlaySideNavabar.classList.add("sidenav_container_active");
  hamburgerPhone.classList.add("hamburgerphonedeactive");
});
overlaySideNavabar.addEventListener("click", function () {
  sidenavChildContainer.classList.remove("sidenav_container_active");
  overlaySideNavabar.classList.remove("sidenav_container_active");
  document.body.classList.remove("minimize_siderbar");
  hamburgerPhone.classList.remove("hamburgerphonedeactive");
});

window.addEventListener("scroll", function () {
  let intiCon = posterBBig.getBoundingClientRect();
  if (window.scrollY > intiCon.height - 150) {
    movieDetailnavContainer.classList.add("bgadd");
  } else {
    movieDetailnavContainer.classList.remove("bgadd");
  }
});

lightDarkmode.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains(`light`)) {
    localStorage.setItem(`theme`, `light`);
  } else {
    localStorage.setItem(`theme`, `dark`);
  }
});

function settheme() {
  let currtheme = localStorage.getItem("theme");
  if (currtheme == "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}

settheme();

arrowLeft.addEventListener("click", function () {
  document.body.classList.remove("minimize_siderbar");
});

hamburger.addEventListener("click", function () {
  document.body.classList.add("minimize_siderbar");
});

const myApi = "6b2dec73b6697866a50cdaef60ccffcb";

const NowPlaying = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${myApi}&language=en-US&page=1`
  );
  const data = await res.json();
  const NowPlayingmovies = data.results;
  return NowPlayingmovies;
};

//<a class="posterlink" href="./movieDetail.html"></a>//
const NowPlayingfun = (movie) => {
  let url = "./movieDetail.html?id=" + encodeURIComponent(movie.id);
  return `<div class="Now_playing_movies" >
    <a class="posterlink" href="${url}"> <img class="poster" data-id="${
    movie.id
  }" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
        onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
         loading="lazy"  alt="${movie.title}"></a>
         <p class="movie_title">${movie.title}</p>
         <div class="date_rating">
             <p class="date">${dateFormatter(
               movie.release_date
             )}</p><span class="dot dot2"></span>
             <p class="rating">${
               movie.vote_average
             }<span><svg xmlns="http://www.w3.org/2000/svg" width="10"
                         height="10" fill="Yellow" class="star bi-star-fill" viewBox="0 0 16 16">
                         <path
                             d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                     </svg></span></p>
             <div class="category">Movie</div>
             </div>
         </div>`;
};

const dateFormatter = function (date) {
  let currdate = date;
  const newDate = currdate.slice(0, 4);
  return newDate;
};

const averagVoteformat = function (receivedVote) {
  let currVote = receivedVote.toString();
  const newVote = currVote.slice(0, 3);
  return newVote;
};

NowPlaying().then((movies) => {
  movies.forEach((moviee) => {
    const htmll = NowPlayingfun(moviee);
    NowPlayingMoviesDiv.insertAdjacentHTML("beforeend", htmll);
  });

  const NowPlayingMovies = document.querySelectorAll(".Now_playing_movies");
  NowPlayingMovies.forEach(
    (ele, i) => (ele.style.transform = `TranslateX(${i * 115}%)`)
  );
});

const Sidescroll = function (element, direction, speed, distance, step) {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

leftArrow.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.parentElement.id == "nowplayin") {
      Sidescroll(NowPlayingMoviesDiv, "left", 2, 500, 15);
    }
    if (item.parentElement.id == "recommenn") {
      Sidescroll(recommendationMoviesDiv, "left", 2, 500, 15);
    }
    if (item.parentElement.id == "Similarovie") {
      Sidescroll(SimilarMoviesDiv, "left", 2, 500, 15);
    }
    if (item.parentElement.id == "cast_con") {
      Sidescroll(Casdiv, "left", 2, 500, 15);
    }
  })
);

rightarrow.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.parentElement.id == "nowplayin") {
      Sidescroll(NowPlayingMoviesDiv, "right", 2, 500, 15);
    }
    if (item.parentElement.id == "recommenn") {
      Sidescroll(recommendationMoviesDiv, "right", 2, 500, 15);
    }
    if (item.parentElement.id == "Similarovie") {
      Sidescroll(SimilarMoviesDiv, "right", 2, 500, 15);
    }
    if (item.parentElement.id == "cast_con") {
      Sidescroll(Casdiv, "right", 2, 500, 15);
    }
  })
);

/* MOVIE CLCIKED*/

const html2 = function (moviee) {
  document.title = `${
    moviee.title +
    " " +
    "(" +
    dateFormatter(moviee.release_date) +
    ")" +
    " " +
    "|" +
    " " +
    "FlixSIGHT"
  }`;

  let cate = "";
  moviee.genres.forEach((item) => {
    cate += `<li class="movie_details_category_ul_li">${item.name}</li>`;
  });
  return `<div class="movie_details">
    <img class="movie_details_poster" src="https://image.tmdb.org/t/p/w500/${
      moviee.poster_path
    }"
    onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
     alt="title">
    <div class="movie_details_about">
        <h2 class="movie_details_title">${moviee.title}</h2>
        <div class="movie_details_about_category">
            <ul class="movie_details_about_category_ul">
            ${cate}
            </ul>
        </div>
        <div class="date_rating">
            <p class="time">${
              moviee.runtime
            } minutes</p><span class="dot dot2"></span>
            <p class="date">${
              moviee.release_date
            }</p><span class="dot dot2"></span>
            <p class="rating">${averagVoteformat(
              moviee.vote_average
            )}/10<span><svg xmlns="http://www.w3.org/2000/svg" width="10"
                        height="10" fill="Yellow" class="star bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg></span></p>
        </div>
        <div class="playButtonContainer"> 
            <div class="shareArticle">
  <div class="shareSocial">
    <h3 class="socialTitle movie_details_title">Share Movie:</h3>
    <ul class="socialList">
      <li><a href="fb-messenger://share/?link=https://flixsight.info/watch?id=${moviee.id}"><i class="fa-brands fa-facebook-messenger"></i></a></li>
      <li><a href="tg://msg?text=TITLE: ${moviee.title}%20%0A%20DIRECT WATCH: https://flixsight.info/watch?id=${moviee.id}%20%0A%20TYPE: Movie%20%0A%20DATE RELEASED: ${moviee.release_date}%20%0A%20WATCH TIME: ${moviee.runtime} Minutes%20%0A%20RATINGS: ${averagVoteformat(moviee.vote_average)}/10 ⭐%20%0A%20%20%0A%20PLOT: ${moviee.overview}%20%0A%20%20%0A%20%23movieclip%20%23freemovie%20%23highlights%20%23topcontent%20%23movie%20%23mustwatch%20%23topratingmovie%20%23everyonefallower%20%23everyonehighlights%20%23everyoneactive%20%23everyonefallower%20%23everyonehighlights%20%23everyoneactive"><i class="fa-brands fa-telegram-plane"></i></a></li>
      <li><a href="https://api.whatsapp.com/send?text=TITLE: ${moviee.title}%20%0A%20DIRECT WATCH: https://flixsight.info/watch?id=${moviee.id}%20%0A%20TYPE: Movie%20%0A%20DATE RELEASED: ${moviee.release_date}%20%0A%20WATCH TIME: ${moviee.runtime} Minutes%20%0A%20RATINGS: ${averagVoteformat(moviee.vote_average)}/10 ⭐%20%0A%20%20%0A%20PLOT: ${moviee.overview}%20%0A%20%20%0A%20%23movieclip%20%23freemovie%20%23highlights%20%23topcontent%20%23movie%20%23mustwatch%20%23topratingmovie"><i class="fa-brands fa-whatsapp"></i></a></li>
    </ul>
  </div>
  <div class="shareLink">
    <div class="permalink">
      <p id="textWatch" style="display:none;white-space:pre-line;">TITLE: ${moviee.title}&#10;&#13;DIRECT WATCH: https://flixsight.info/watch?id=${moviee.id}&#10;&#13;TYPE: Movie&#10;&#13;RATINGS: ${averagVoteformat(moviee.vote_average)}/10 ⭐&#10;&#13;DATE RELEASED: ${moviee.release_date}&#10;&#13;TIME WATCH: ${moviee.runtime} Minutes\n\nPLOT: ${moviee.overview}\n\n#movieclip\t#freemovie\t#highlights\t#topcontent\t#movie\t#mustwatch\t#topratingmovie</p>
      <input class="textLink" type="text" name="shortlink" value="Click copy icon to get all the details" readonly="">
      <span class="copyLink" id="copy" onclick="copyToClipboard('#textWatch')">
        <i class="fa-regular fa-copy"></i>
      </span>
    </div>
  </div>
</div>
            </div>
            
    </div>

</div> `;

const title = "${moviee.name} | FlixSIGHT";
const description = "${Moviee.overview}";
const keywords = "You can now watch your favorite ${moviee.name} here on  FlixSIGHT and Watch Unlimited movie anytime anywhare at FlixSIGHT";
const property = "";

const generateSEOTags = (title, description, keywords, property) => {
  return `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="robots" content="index, follow"/>
   <meta property="og:title" content="${moviee.name} | FlixSIGHT"/>
   <meta property="og:description" content="${moviee.overview}"/>
   <meta property="og:url" content="https://flixsight.info/watch?id=${moviee.id}"/>
   <meta property="og:site_name" content="FlixSIGHT"/>
   <meta property="og:image" content="https://image.tmdb.org/t/p/w500/${moviee.poster_path}"/>
  `;
};

generateSEOTags(title, description, keywords, property);

};

const Bigposter = function (movieee) {
  return `<img class="poster_big_img" src="https://image.tmdb.org/t/p/original/${movieee.backdrop_path}" alt="">`;
};

const CurrMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=680c99274ddab12ffac27271d9445d45&append_to_response=credits`
  );

  const data = await res.json();
  return data;
};

movieLoad();

const recomMOvie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${myApi}`
  );
  const data = await res.json();
  const recommendationMovies = data.results;

  return recommendationMovies;
};

const SimilarMOvie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${myApi}`
  );
  const data = await res.json();
  const SimilarMovies = data.results;
  return SimilarMovies;
};

const recommMovieFun = (mov) => {
  let url = "./movieDetail.html?id=" + encodeURIComponent(mov.id);
  return `<div class="Now_playing_movies recommenMovies" >
    <a class="posterlink" href="${url}"> <img class="poster" data-id="${
    mov.id
  }" src="https://image.tmdb.org/t/p/w500/${mov.poster_path}" 
        onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
        loading="lazy" alt="${mov.title}"></a>
         <p class="movie_title">${mov.title}</p>
         <div class="date_rating">
             <p class="date">${dateFormatter(
               mov.release_date
             )}</p><span class="dot dot2"></span>
             <p class="rating">${averagVoteformat(
               mov.vote_average
             )}<span><svg xmlns="http://www.w3.org/2000/svg" width="10"
                         height="10" fill="Yellow" class="star bi-star-fill" viewBox="0 0 16 16">
                         <path
                             d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                     </svg></span></p>
             <div class="category">Movie</div>
             </div>
         </div>`;
};

const simimarMoviefun = (movie) => {
  let url = "./movieDetail.html?id=" + encodeURIComponent(movie.id);
  return `<div class="Now_playing_movies similarMovies" >
    <a class="posterlink" href="${url}"> <img class="poster" data-id="${
    movie.id
  }" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
        onerror="this.onerror=null;this.src='./resources/D moviesand tv show.png';"
        loading="lazy" alt="${movie.title}"></a>
         <p class="movie_title">${movie.title}</p>
         <div class="date_rating">
             <p class="date">${dateFormatter(
               movie.release_date
             )}</p><span class="dot dot2"></span>
             <p class="rating">${averagVoteformat(
               movie.vote_average
             )}<span><svg xmlns="http://www.w3.org/2000/svg" width="10"
                         height="10" fill="Yellow" class="star bi-star-fill" viewBox="0 0 16 16">
                         <path
                             d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                     </svg></span></p>
             <div class="category">Movie</div>
             </div>
         </div>`;
};

recomMOvie(fetcid).then((movies) => {
  if (movies.length == 0) {
    reccomendation.style.display = "none";
  } else {
    movies.forEach((moviee) => {
      const html3 = recommMovieFun(moviee);
      recommendationMoviesDiv.insertAdjacentHTML("beforeend", html3);
    });

    const recommenMovies = document.querySelectorAll(".recommenMovies");
    recommenMovies.forEach(
      (ele, i) => (ele.style.transform = `TranslateX(${i * 115}%)`)
    );
  }
});

SimilarMOvie(fetcid).then((movies) => {
  movies.forEach((moviee) => {
    const htmll = simimarMoviefun(moviee);
    SimilarMoviesDiv.insertAdjacentHTML("beforeend", htmll);
  });

  const similarMovies = document.querySelectorAll(".similarMovies");
  similarMovies.forEach(
    (ele, i) => (ele.style.transform = `TranslateX(${i * 115}%)`)
  );
});

const movieId = function (e) {
  let ele = e.target;
  if (ele.classList.contains("poster")) {
    let id = ele.dataset.id;
    CurrMovie(id).then((dat) => {
      let htm = "";
      htm = html2(dat);
      movieDetails.innerHTML = htm;
      let BigPoster = Bigposter(dat);
      posterBBig.innerHTML = BigPoster;
      sectionStory.textContent = dat.overview;
    });
  }
};

NowPlayingMoviesDiv.addEventListener("click", movieId);
