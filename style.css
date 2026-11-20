
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background: #fff;
    color: #111;
    font-family: Arial, sans-serif;
}

/* HEADER */

header {
    width: 100%;
    padding: 28px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    position: fixed;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #eee;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    color: black;
    text-decoration: none;
}

.logo span {
    color: #888;
}

nav {
    display: flex;
    gap: 35px;
}

nav a {
    text-decoration: none;
    color: #111;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

nav a:hover {
    color: #888;
}

/* HERO */

.hero {
    min-height: 100vh;
    padding: 150px 8% 80px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 50px;
    overflow: hidden;
}

.hero-text {
    width: 50%;
    animation: fadeUp 1s ease;
    z-index: 2;
}

.small-text {
    font-size: 11px;
    letter-spacing: 3px;
    color: #777;
    margin-bottom: 30px;
}

.hero h1 {
    font-size: clamp(55px, 7vw, 95px);
    line-height: 0.95;
    letter-spacing: -5px;
    font-weight: 500;
}

.hero h1 span {
    color: #999;
}

.intro {
    color: #666;
    max-width: 380px;
    line-height: 1.8;
    margin: 30px 0;
    font-size: 14px;
}

.view-btn {
    display: inline-block;
    text-decoration: none;
    color: black;
    font-size: 11px;
    letter-spacing: 2px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    transition: 0.3s;
}

.view-btn:hover {
    padding-left: 10px;
}

.hero-image {
    width: 50%;
    height: 550px;
    background:
    url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200")
    center/cover;
    filter: grayscale(100%);
    animation: fadeIn 1.5s ease;
}

.vertical-text {
    position: absolute;
    right: 3%;
    bottom: 50px;
    writing-mode: vertical-rl;
    font-size: 10px;
    letter-spacing: 3px;
    color: #888;
}

/* PROJECTS */

.projects {
    padding: 120px 8%;
    background: #f5f5f5;
}

.section-heading {
    margin-bottom: 50px;
}

.section-heading p {
    font-size: 11px;
    letter-spacing: 3px;
    color: #777;
}

.section-heading h2 {
    font-size: 55px;
    font-weight: 500;
    margin-top: 15px;
}

.section-heading h2 span {
    color: #999;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 25px;
}

.project {
    opacity: 0;
    transform: translateY(30px);
    transition: 0.8s ease;
}

.project.show {
    opacity: 1;
    transform: translateY(0);
}

.project img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    filter: grayscale(100%);
    transition: 0.5s;
}

.project:hover img {
    filter: grayscale(0%);
}

.project-info {
    margin-top: 20px;
}

.project-info h3 {
    font-size: 19px;
    font-weight: 500;
}

.project-info p {
    color: #888;
    font-size: 12px;
    margin-top: 8px;
}

/* ABOUT */

.about {
    padding: 150px 12%;
}

.about h2 {
    font-size: clamp(35px, 5vw, 65px);
    font-weight: 400;
    line-height: 1.2;
    max-width: 900px;
}

.about-description {
    max-width: 450px;
    color: #777;
    line-height: 1.8;
    margin-top: 35px;
    font-size: 14px;
}

/* CONTACT */

.contact {
    background: #111;
    color: white;
    padding: 120px 8%;
}

.contact .small-text {
    color: #999;
}

.contact h2 {
    font-size: clamp(50px, 8vw, 90px);
    font-weight: 400;
    line-height: 1;
    margin-bottom: 45px;
}

.contact h2 span {
    color: #888;
}

.contact-btn {
    display: inline-block;
    padding: 15px 30px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 2px;
    transition: 0.3s;
}

.contact-btn:hover {
    background: white;
    color: black;
}

.socials {
    display: flex;
    gap: 30px;
    margin-top: 80px;
}

.socials a {
    color: white;
    font-size: 12px;
    text-decoration: none;
}

/* FOOTER */

footer {
    padding: 25px 8%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    letter-spacing: 1px;
    color: #777;
}

/* ANIMATION */

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* MOBILE */

@media (max-width: 700px) {
    header {
        padding: 20px 5%;
        flex-direction: column;
        gap: 20px;
    }

    nav {
        gap: 18px;
    }

    nav a {
        font-size: 10px;
    }

    .hero {
        flex-direction: column;
        align-items: flex-start;
        padding: 160px 7% 70px;
    }

    .hero-text,
    .hero-image {
        width: 100%;
    }

    .hero-image {
        height: 350px;
    }

    .hero h1 {
        letter-spacing: -3px;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .project img {
        height: 280px;
    }

    .about {
        padding: 100px 7%;
    }

    .socials {
        flex-wrap: wrap;
    }

    footer {
        flex-direction: column;
        gap: 12px;
    }
}

/* CONTACT POPUP */

.contact-btn {
    cursor: pointer;
    background: transparent;
    font-family: Arial, sans-serif;
}

.contact-popup {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.contact-popup.active {
    display: flex;
    animation: fadeIn 0.3s ease;
}

.popup-content {
    background: white;
    color: black;
    width: 100%;
    max-width: 500px;
    padding: 45px;
    position: relative;
    animation: fadeUp 0.4s ease;
}

.popup-content h2 {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 30px;
}

.popup-content h2 span {
    color: #999;
}

.contact-details p {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    color: #444;
    overflow-wrap: anywhere;
}

.contact-details a {
    color: black;
    text-decoration: none;
}

.contact-details a:hover {
    text-decoration: underline;
}

.close-btn {
    position: absolute;
    right: 20px;
    top: 15px;
    border: none;
    background: none;
    font-size: 30px;
    cursor: pointer;
    color: black;
}

@media (max-width: 500px) {
    .popup-content {
        padding: 35px 22px;
    }
}

