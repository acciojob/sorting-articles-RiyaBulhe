
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Remove A, An and The before sorting
function strip(band) {
    return band.replace(/^(a |an |the )/i, '');
}

// Sort alphabetically
bands.sort((a, b) => {
    return strip(a).localeCompare(strip(b));
});

// Display sorted bands
const bandList = document.getElementById('band');

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
