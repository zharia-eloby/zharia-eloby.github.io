fetch('./scripts/data/projects.json').then((response) => {
    return response.json();
}).then((data) => {
    const projectCardsContent = data.content;
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
});
