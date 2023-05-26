const templatesList = [
    {
        id: '1',
        image: 'image/templates-img/templates-brainstorming-template.png',
        title: 'Brainstorming template',
        description: 'Discover your greatest ideas yet in a collaborative brainstorming session.'
    },
    {
        id: '2',
        image: 'image/templates-img/templates-product-requirements-document-template.png',
        title: 'Product requirements document template',
        description: 'Log data, deliverables, and dependencies in a project requirements doc.'
    },
    {
        id: '3',
        image: 'image/templates-img/templates-flow-chart-template.png',
        title: 'Flow chart template',
        description: 'Organize details in a way that makes sense with this flow chart diagram.'
    },
    {
        id: '4',
        image: 'image/templates-img/templates-customer-journey-map-template.png',
        title: 'Customer journey map template',
        description: 'Sketch out your UX and discover new channels for reaching great customers.'
    },
    {
        id: '5',
        image: 'image/templates-img/templates-instagram-template.png',
        title: 'Instagram template',
        description: 'Impress your followers with beautifully designed Instagram posts '
    },
    {
        id: '6',
        image: 'image/templates-img/templates-product-development-roadmap-template.png',
        title: 'Product development roadmap template',
        description: 'Go from project proposal to purchase ready in no time.'
    },
    {
        id: '7',
        image: 'image/templates-img/templates-meeting-notes-template.png',
        title: 'Meeting notes template',
        description: 'Get the most value out of any meeting with this shareable notes template. '
    },
    {
        id: '8',
        image: 'image/templates-img/templates-infographic-template.png',
        title: 'Infographic template',
        description: 'Give your data a fresh new look with colorful, shareable infographics.'
    },
    {
        id: '9',
        image: 'image/templates-img/templates-sequence-diagram-example.png',
        title: 'Sequence diagram example',
        description: 'Design highly efficient processes with the help of a sequence diagram.'
    },
    {
        id: '10',
        image: 'image/templates-img/templates-product-development-canvas.png',
        title: 'Product development canvas',
        description: 'Plan personas, strategy, and product details in a collaborative space.'
    },
    {
        id: '11',
        image: 'image/templates-img/templates-network-diagram-template.png',
        title: 'Network diagram template',
        description: 'Map out the way people and devices connect with a network diagram template.'
    },
    {
        id: '12',
        image: 'image/templates-img/templates-organization-chart-template.png',
        title: 'Organization chart template',
        description: 'Map out every role and plan for new hires with this org chart template.'
    }
];

//products.sort(() => Math.random() - 0.5);

function renderTemplatesList(templatesList) {
    let html = '';
    for (const templateList of templatesList) {
        html += 
        `<article class="templates-catalog__list">
            <img class="templates-catalog__item-img" src="${templateList.image}" alt="${templateList.title}">
            <h3 class="templates-catalog__item-title text-accent">${templateList.title}</h3>
            <p class="templates-catalog__item-description text">${templateList.description}
            </p>
            <button class="btn btn--primary-accent templates-catalog__item-action">More templates</button>
        </article>`;
    }

    const template = document.querySelector('.templates-catalog__list-content');
    template.innerHTML = html;
}

renderTemplatesList(templatesList);