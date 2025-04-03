const projectCardsContent = [
    {
        "title": "Song Lyric Search",
        "tech": [
            "React", 
            "Sass", 
            "Bootstrap", 
            "AWS"
        ],
        "description": "Find song lyrics by providing an artist and song title. A responsive and accessible website deployed using AWS Amplify",
        "links": [
            {
                "type": "GitHub",
                "link": "https://github.com/zharia-eloby/song-lyric-search"
            },
            {
                "type": "Website",
                "link": "https://www.find-song-lyrics.com"
            }
        ]
    },
    {
        "title": "Maze Game",
        "tech": [
            "Python"
        ],
        "description": "A standalone python application created using pygame modules capable of dynamically generating and solving mazes",
        "links": [ 
            {
                "type": "GitHub",
                "link": "https://github.com/zharia-eloby/maze_game"
            },
            {
                "type": "Video",
                "link": "https://youtube.com/shorts/2NFnY2cN-uM?feature=share"
            }
        ]
    },
    {
        "title": "Portfolio",
        "tech": [
            "HTML",
            "Sass",
            "JavaScript",
            "Bootstrap"
        ],
        "description": "The site you're looking at right now! A static, accessible website utilizing the Bootstrap framework to create a responsive design",
        "links": [ 
            {
                "type": "GitHub",
                "link": "https://github.com/zharia-eloby/zharia-eloby.github.io"
            }
        ]
    },
    {
        "title": "CodePen Mini Projects",
        "tech": [
            "HTML",
            "JavaScript",
            "CSS"
        ],
        "description": "A collection of small web projects where I experiment with animations. Includes a slate of tiles that automatically change color, an animated loading and typing functionality, and more!",
        "links": [ 
            {
                "type": "CodePen",
                "link": "https://codepen.io/zharia-eloby"
            }
        ]
    }
]

function loadProjectCards() {
    const projectCardsSection = document.getElementById('project-cards');
    const cardTemplate = document.getElementById('project-card-template');
    const githubLinkTemplate = document.getElementById('github-link-template');
    const codepenLinkTemplate = document.getElementById('codepen-link-template');
    const websiteLinkTemplate = document.getElementById('website-link-template');
    const videoLinkTemplate = document.getElementById('video-link-template');
    for (let i = 0; i < projectCardsContent.length; i++) {
        const cardInfo = projectCardsContent[i];
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector('.card-title').innerText = cardInfo.title;
        card.querySelector('.project-card-tech-list').innerText = cardInfo.tech.join(', ');
        card.querySelector('.project-card-description').innerText = cardInfo.description;

        let cardFooter = card.querySelector('.card-footer');
        
        let cardLinkInfo;
        for (let j = 0; j < cardInfo.links.length; j++) {
            cardLinkInfo = cardInfo.links[j];
            if (cardLinkInfo.type.toLowerCase() == "github") {
                const githubLink = githubLinkTemplate.content.cloneNode(true);
                githubLink.querySelector('a').href = cardLinkInfo.link;
                cardFooter.appendChild(githubLink);
            }

            if (cardLinkInfo.type.toLowerCase() == "codepen") {
                const codepenLink = codepenLinkTemplate.content.cloneNode(true);
                codepenLink.querySelector('a').href = cardLinkInfo.link;
                cardFooter.appendChild(codepenLink);
            }

            if (cardLinkInfo.type.toLowerCase() == "website") {
                const websiteLink = websiteLinkTemplate.content.cloneNode(true);
                websiteLink.querySelector('a').href = cardLinkInfo.link;
                cardFooter.appendChild(websiteLink);
            }

            if (cardLinkInfo.type.toLowerCase() == "video") {
                const videoLink = videoLinkTemplate.content.cloneNode(true);
                videoLink.querySelector('a').href = cardLinkInfo.link;
                cardFooter.appendChild(videoLink);
            }
        }
        projectCardsSection.appendChild(card);
    }
}