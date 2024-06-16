function toggleText(sectionId) {
    const textContainer = document.getElementById(sectionId);
    const textWrapper = textContainer.querySelector('.text-wrapper');
    const button = textContainer.querySelector('.toggle-button');
    const isExpanded = textContainer.classList.contains('expanded');

    if (isExpanded) {
        // Collapse the text
        textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px'; // Set to full height first
        setTimeout(() => {
            textWrapper.style.maxHeight = '30px'; // Then set to 0 to collapse
        }, 0);
        button.textContent = 'Read more';
        button.style.backgroundColor = '';
        button.style.color = '';
    } else {
        // Expand the text
        textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px'; // Set to full height to expand
        setTimeout(() => {
            textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px';
        }, 0);
        button.textContent = 'Read less';
        button.style.backgroundColor = '';
        button.style.color = '#fff';
    }

    textContainer.classList.toggle('expanded');
}

// script theory


