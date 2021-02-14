const { log, info, error } = window.console;
const { body, head } = document;
const { innerWidth, innerHeight } = window || this;
let gravity = 0.05;


class BannerFallingLogo {
    constructor (canvas, ctx) {
        this.ctx = ctx;
        this.x = Math.random() * (((canvas.width/2)+(canvas.width/4)) - ((canvas.width/2)-(canvas.width/2)) + 1) + ((canvas.width/2)-(canvas.width/2));
        this.y = -100;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * (60 - 20 + 1) + 20;
        this.img = new Image();
        this.img.src = "media/logo.png";
        this.angle = 0;
    }

    Render() {
        this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);

        this.vx = Math.sin(this.angle / 2);
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        this.angle += 0.4;
    }
}


class App {
    constructor () {
        this.RenderHTML = data => body.innerHTML += data;
        this.findEl = el => document.querySelector(el);
        this.findAll = all => document.querySelectorAll(all);

        this.RenderHTML(`<div class="loader"><div class="img"><img src="media/preloader.gif" /><img src="media/logo.png" /></div><h4>Loading...</h4></div>`);

        this.contactKeys = [
            ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '='],
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'enter'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'shift'],
            ['fn', 'ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', 'ctrl', 'fn']
        ];

        this.projectsPagesData = [
            {
                "heading": "Color Picker",
                "description": "This is a small useful app for web developers to find that perfect color for their website or app. You can toggle between RGB values and hexadecimal values and adjust the red, green, and blue values. On the right it will display the hex or RGB color code which you can click on to copy it. On the top it will display the color so you can see it.",
                "image": "media/project1.png",
                "repository": "https://github.com/SoftwareFuse/Color",
                "project": "https://softwarefuze.github.io/Color"
            },
            {
                "heading": "LoadableJS Library",
                "description": "This is a lightweight, open-source library for loading in files fast and efficiently. You can view the code for it if you click the link to the GitHub repository. It comes with a loading helper version and minified options for each of the files. When you load things in with this library, it will log all of the data on it's loading speed and HTTP response in the developer tools.",
                "image": "media/project2.png",
                "repository": "https://github.com/softwarefuze/loadable",
                "project": "https://softwarefuze.github.io/loadable"
            },
            {
                "heading": "Leo The Cat's Portfolio",
                "description": "This is a portfolio website for Leo the famous cat. It includes all of his favorite meals, areas to be, people, toys, and more about him. Also a full image gallery of all his famous pictures along with a handy slider. Visit LeoPortfolio today!",
                "image": "media/project3.png",
                "repository": "https://github.com/softwarefuze/LeoPortfolio",
                "project": "https://softwarefuze.github.io/LeoPortfolio"
            },
            {
                "heading": "Weather App",
                "description": "This project is a small app for you to check the weather. It runs off of an API called the <a href='https://www.weather.gov/documentation/services-web-api'>NWS API</a>. You have to allow the access to your current location so the app can find your coordinates and therefore, find the weather in your location. Since the API is loading and returns an enormous amount of data, it might be slow to start, so be patient.",
                "image": "media/project4.png",
                "repository": "https://github.com/softwarefuze/Weather",
                "project": "https://softwarefuze.github.io/Weather"
            },
            {
                "heading": "PrimeConverter App",
                "description": "This is a convinient app that lets you find all the prime numbers between 0, and your input. It is fast and can find prime numbers from 0 up to 100! It is extremely easy to use, and serves as an efficient tool to find prime numbers versus composite numbers.",
                "image": "media/project5.png",
                "repository": "https://github.com/softwarefuze/PrimeConverter",
                "project": "https://softwarefuze.github.io/PrimeConverter"
            },
            {
                "heading": "Sound The Instrument App",
                "description": "Sound is a cool app that includes two different instruments which you can play in the browser. It features a virtual drumset which you can rock out on, and also an amazing cat piano that you can on. You can even enable the autoplay option to rock out to awesome songs on the cat piano.",
                "image": "media/project6.png",
                "repository": "https://github.com/softwarefuze/Sound",
                "project": "https://softwarefuze.github.io/Sound"
            },
            {
                "heading": "Impossible Dinosaur Game",
                "description": "This game is literally impossible. It is a game in which you play as the dinosaur and you have to jump over the cactuses in the desert scene. Since these cactuses are randomized, there can be situations that make it so that it is impossible to avoid these cactuses. (Do not worry; no dinosaurs were, and will be harmed in the gameplay)",
                "image": "media/project7.png",
                "repository": "https://github.com/softwarefuze/dinogame",
                "project": "https://softwarefuze.github.io/dinogame"
            },
            {
                "heading": "CatSearcher Search Engine",
                "description": "This is an instant-results search engine for you to search all about cats. It is the most accurate search engine, although it sacrifices all the search results that don't contain any of the letters in your query, for the exact results. Since the page doesn't reload when you enter your search query, it is the fastest search engine. Also for those of you people interested in how this was made, the pages were loaded in via an <a href='https://softwarefuze.github.io/catsearcher/pages.json'>API</a> with all of the sites and their title and URL data. Also everytime you refresh the page, it will add a new fact about cats with the <a href='https://catfact.ninja'>Cat Facts API</a>.",
                "image": "media/project8.png",
                "repository": "https://github.com/softwarefuze/catsearcher",
                "project": "https://softwarefuze.github.io/catsearcher"
            },
            {
                "heading": "CatSearcher Images",
                "description": "This app is based off of the <a href='https://softwarefuze.github.io/catsearcher'>CatSearcher</a> project, but instead of a search engine, this has a buncha cute pictures and gifs of cats. It was created by fetching images from an API called <a href='https://thecatapi.com'>The Cat API</a>.",
                "image": "media/project9.png",
                "repository": "https://github.com/softwarefuze/catsearcherimages",
                "project": "https://softwarefuze.github.io/catsearcherimages"
            }
        ];

    }

    RenderNavBar() {
        this.RenderHTML(`
            <nav>
                <div class="logo">
                    <img src="media/logo.png" />
                </div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="burger">
                    <span class="line1"></span>
                    <span class="line2"></span>
                    <span class="line3"></span>
                </div>
            </nav>
        `);
    }

    NavEffect() {
        this.menuToggleCount = 0;

        this.findEl(".burger").addEventListener("click", () => {
            ++this.menuToggleCount;
            if (this.menuToggleCount % 2 != 0) {
                this.findEl(".nav-links").style.transform = "none";
            } else {
                this.findEl(".nav-links").style.transform = "translateX(110%)";
            }
        });


    
    }
    
    RenderBanner() {
        this.RenderHTML(`
            <section class="banner" id="home">
                <canvas class="banner-canvas"></canvas>
                <div class="banner-content">
                    <h1>SoftwareFuze</h1>
                    <h4><span>Creative</span> software engineering for <span>every need.</span></h4>
                </div>
            </section>
        `);
    }

    CanvasAnimation() {
        const canvas = this.findEl(".banner-canvas");
        const ctx = canvas.getContext("2d");
        let fallingLogos = [];
        const fallingLogoRate = .5;

        canvas.width = innerWidth;
        canvas.height = innerHeight-80;
        setInterval(() => {
            fallingLogos = [
                ...fallingLogos,
                new BannerFallingLogo(canvas, ctx)
            ];
        }, (fallingLogoRate * 1000));

        const loop = () => {
            ctx.fillStyle = "rgba(255, 255, 255, 0.09)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < fallingLogos.length; i++) {
                fallingLogos[i].Render();

                if (fallingLogos[i].y > canvas.height + 60) {
                    fallingLogos.splice(i, 1);
                }
            }
        }

        setInterval(() => {
            if (fallingLogos.length > 9) {
                for (let i = 0; i < fallingLogos.length; ++i) {
                    if (i % 2 == 0) {
                        fallingLogos.splice(i, 1);
                    } 
                }
            }
        }, 100);

        setInterval(loop, 20);
    }

    RenderAbout() {
        this.aboutUs = `<span>Hi, I'm Atticus!</span> I'm a programmer and I specialize in making web apps with Java, and making websites with HTML, CSS, and JavaScript. I bring creativeness into my projects and focus on ideas that simplify tasks. I mostly work on websites and creating awesome apps for android! I like website design, learning new things, and kittens! 😺`;

        this.RenderHTML(`
            <section class="about" id="about"> 
                <h1>About Us</h1>
                <div>
                    <img src="media/pookit.png" />
                    <p>
                        ${this.aboutUs}
                    </p>
                </div>
            </section>
        `);
    }

    
    AboutUsAnimation() {
        this.aboutText = '';
        this.aboutOptions = ['programmer', 'web developer', 'musician', 'shark enthusiast'];
        this.aboutColors = ["#2ec194", "#0099ff", "#e0466b", "#8190ff"];
        this.aboutIndex = 0;
        this.heading = this.findEl(".about h1");

        setInterval(() => {
            if (this.aboutIndex == 4) {
                this.aboutIndex = 0;
            } else {
                this.heading.style.opacity = 0;
                setTimeout(() => this.heading.style.opacity = 1, 500);
                setTimeout(() => this.heading.innerHTML = "About the <span style='color: " + this.aboutColors[this.aboutIndex-1] + ";'>" + this.aboutOptions[this.aboutIndex-1] + "</span>", 500);

                this.aboutIndex++;
            }
        }, 2000);
    }

    RenderProjects() {
        this.RenderHTML(`
            <section class="projects" id="projects">
                <h1>Projects</h1>
                <div class="grid">
                    <div class="project" data-project-name="Color Picker">
                        <img src="media/project1.png" />
                    </div>
                    <div class="project" data-project-name="LoadableJS Library">
                        <img src="media/project2.png" />
                    </div>
                    <div class="project" data-project-name="Leo's Online Portfolio">
                        <img src="media/project3.png" />
                    </div>
                    <div class="project" data-project-name="Weather App">
                        <img src="media/project4.png" />
                    </div>
                    <div class="project" data-project-name="PrimeConverter App">
                        <img src="media/project5.png" />
                    </div>
                    <div class="project" data-project-name="Sound The Instrument App">
                        <img src="media/project6.png" />
                    </div>
                    <div class="project" data-project-name="Impossible Dinosaur Game">
                        <img src="media/project7.png" />
                    </div>
                    <div class="project" data-project-name="CatSearcher Search Engine">
                        <img src="media/project8.png" />
                    </div>
                    <div class="project" data-project-name="CatSearcher Images">
                        <img src="media/project9.png" />
                    </div>
                </div>
            </section>
        `);
    }

    RenderSkills() {
        this.RenderHTML(`
            <section class="skills" id="skills">
                <h1>Skills</h1>
                <h4><img class="skill-icon" /> <div>We use <span class="lang">_</span> <span class="reason">_</span></div></h4>
                <div class="icon-row">
                    <img src="https://img.icons8.com/color/96/000000/javascript.png" />
                    <img src="https://img.icons8.com/color/96/000000/html-5.png" />
                    <img src="https://img.icons8.com/color/96/000000/css3.png" />
                    <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png" />
                    <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />
                    <img src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png" />
                    <img src="https://user-images.githubusercontent.com/11943860/46922575-7017cf80-cfe1-11e8-845a-0cd198fb546c.png" />
                    <img src="https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png" />
                </div>
            </section>
        `);
    }

    AnimateSkills() {
        this.skills = [
            {
                "tool": "JavaScript",
                "icon": "https://img.icons8.com/color/96/000000/javascript.png",
                "reason": "for making websites interactive.",
                "color": "#8190ff"
            },
            {
                "tool": "HTML",
                "icon": "https://img.icons8.com/color/96/000000/html-5.png",
                "reason": "for making websites.",
                "color": "#ff9b00"
            },
            {
                "tool": "CSS",
                "icon": "https://img.icons8.com/color/96/000000/css3.png",
                "reason": "for making websites look nice.",
                "color": "#e0466b"
            },
            {
                "tool": "Java",
                "icon": "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
                "reason": "for making android apps.",
                "color": "#0099ff"
            },
            {
                "tool": "C++",
                "icon": "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
                "reason": "as our go-to system language and making apps.",
                "color": "#0069ad"
            },
            {
                "tool": "VSCode",
                "icon": "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png",
                "reason": "as our fast efficient code editor.",
                "color": "#8109ff"
            },
            {
                "tool": "Eclipse IDE",
                "icon": "https://user-images.githubusercontent.com/11943860/46922575-7017cf80-cfe1-11e8-845a-0cd198fb546c.png",
                "reason": "as our advanced Java IDE",
                "color": "#ff09dc"
            },
            {
                "tool": "Android Studio",
                "icon": "https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png",
                "reason": "as our tool to create apps for Android.",
                "color": "#00ac00"
            }
        ];

        const lang = this.findEl(".skills .lang");
        const reason = this.findEl(".skills .reason");
        let skillIndex = 0;

        setInterval(() => {
            if (skillIndex > 7) {
                skillIndex = 0;
            }

            lang.style.opacity = 0;
            reason.style.opacity = 0;

            setTimeout(() => {
                lang.style.opacity = 1;
                reason.style.opacity = 1;

                lang.innerHTML = this.skills[skillIndex].tool;
                lang.style.color = this.skills[skillIndex].color;
                reason.innerHTML = this.skills[skillIndex].reason;
                reason.style.color = this.skills[skillIndex].color;
                this.findEl(".skill-icon").src = this.skills[skillIndex].icon;

                for (let i = 0; i < this.findAll(".skills .icon-row img").length; i++) {
                    if (i == skillIndex) {
                        this.findAll(".skills .icon-row img")[i].classList.add("icon-row-img-selected");
                    } else {
                        this.findAll(".skills .icon-row img")[i].classList.remove("icon-row-img-selected");
                    }
                }

                skillIndex++;
                
            }, 200);
        }, 4000);

    }

    RenderContact() {
        this.RenderHTML(`
            <section class="contact" id="contact">
                <h1>Contact</h1>
                <div class="keyboard">
                    
                </div>
                <div class="message-us">
                    <fieldset>
                        <legend>Message Us!</legend>
                        <textarea class="message-input"></textarea>
                    </fieldset>
                    <button>Send</button>
                </div>
            </section>
        `);
    }

    RenderContactKeyboard() {
        const keyboard = this.findEl(".contact .keyboard");

        for (let i = 0; i < this.contactKeys.length; i++) {
            keyboard.innerHTML += `<div class="row row${i+1}"></div>`;
            for (let j = 0; j < this.contactKeys[i].length; j++) {
                this.findEl(`.contact .keyboard .row${i+1}`).innerHTML += `<div class="key key${this.contactKeys[i][j]}">${this.contactKeys[i][j]}</div>`;
            }
        }

        this.findEl(".contact .keyboard .row .keyg").innerHTML = `<img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png"/>`;
        this.findEl(".contact .keyboard .row .keym").innerHTML = `<img src="https://img.icons8.com/fluent/48/000000/gmail--v1.png"/>`;
        this.findEl(".contact .keyboard .row .keye").innerHTML = `<img src="https://img.icons8.com/fluent/48/000000/send-mass-email.png"/>`;
        this.findEl(".contact .keyboard .row .keyc").innerHTML = `<img src="https://img.icons8.com/ios-filled/48/000000/codepen.png"/>`;
        this.findEl(".contact .keyboard .row .keyd").innerHTML = `<img src="https://img.icons8.com/fluent/48/000000/discord-logo.png"/>`;
        this.findEl(".contact .keyboard .row .keya").innerHTML = `<img src="https://img.icons8.com/metro/35/000000/mac-os.png"/>`;
        this.findEl(".contact .keyboard .row .keyj").innerHTML = `<img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/>`;
        this.findEl(".contact .keyboard .row .keys").innerHTML = `<img src="https://img.icons8.com/fluent/48/000000/spotify.png"/>`;
        this.findAll(".contact .keyboard .row4 .key")[7].innerHTML = `<img src="https://img.icons8.com/color/48/000000/html-5.png"/>`;
        this.findAll(".contact .keyboard .row2 .key")[11].innerHTML = `<img src="https://img.icons8.com/color/48/000000/css3.png"/>`;
        this.findEl(".contact .keyboard .row .key5").innerHTML = `<img src="https://img.icons8.com/color/48/000000/firefox.png"/>`;
        this.findEl(".contact .keyboard .row .key8").innerHTML = `<img src="https://img.icons8.com/color/48/000000/safari--v1.png"/>`;
        this.findAll(".contact .keyboard .row3 .key")[9].innerHTML = `<img src="https://img.icons8.com/color/48/000000/javascript.png"/>`;

        this.findEl(".contact button").addEventListener("click", () => {
            window.open('mailto:atticus@softwarefuze.com?subject=Hello&body=' + this.findEl(".contact textarea").value, '_blank');
        });
    }

    RenderFooter() {
        this.RenderHTML(`
            <footer>
                <h4>SoftwareFuze</h4>
                <div class="social-media-icons">
                    <img onclick="window.open('https://github.com/SoftwareFuze', '_blank')" src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png"/>
                    <img onclick="window.open('https://codepen.io/teake_smal', '_blank')" src="https://img.icons8.com/ios-filled/48/000000/codepen.png"/>
                    <img onclick="window.open('mailto:atticus@softwarefuze.com', '_blank')" src="https://img.icons8.com/fluent/48/000000/apple-mail.png"/>
                </div>
            </footer>
        `);
    }
}



const SoftwareFuze = new App();

SoftwareFuze.RenderNavBar();
SoftwareFuze.RenderBanner();
SoftwareFuze.RenderAbout();
SoftwareFuze.RenderProjects();
SoftwareFuze.RenderSkills();
SoftwareFuze.RenderContact();
SoftwareFuze.RenderFooter();

SoftwareFuze.AboutUsAnimation();
SoftwareFuze.NavEffect();
SoftwareFuze.AnimateSkills();
SoftwareFuze.RenderContactKeyboard();
SoftwareFuze.CanvasAnimation();




window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        document.querySelector(".loader").style.display = "none";
    });
});
