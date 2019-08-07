// Generate Button
const btn = document.querySelector('#generate-btn');

// Array with all of the startup/tech companies
const startupArray = [
    'After Effects',
    'Airbnb',
    'Amazon',
    'Audible',
    'Bandcamp',
    'Behance',
    'YouTube'
];

// Array with all of the possible options/'but it's for...'
const optionArray = [
    '10x engineers',
    'fans of the MCU',
    'financial advisors',
    'firefighters',
    'longshoreman',
    'lumberjacks',
    'movie buffs',
    'musicians',
    'nurses',
    'scientists',
    'secretaries',
    'trains',
    'zombies'
];

// Generate 
btn.addEventListener('click', e => {
    e.preventDefault();

    // Generate random startup/tech company value
    const randomComp = startupArray[Math.floor(Math.random() * startupArray.length)];

    // Generate random options/'but it's for...' value
    const randomOption = optionArray[Math.floor(Math.random() * optionArray.length)];

    // Inject a response into the empty paragraph
    document.querySelector('#generated-text').innerHTML = `"Well, it's like ${randomComp}, but for ${randomOption}."`;
});