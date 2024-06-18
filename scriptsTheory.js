function toggleText(sectionId) {
    const textContainer = document.getElementById(sectionId);
    const textWrapper = textContainer.querySelector('.text-wrapper-theory');
    const button = textContainer.querySelector('.toggle-button-theory');
    const isExpanded = textContainer.classList.contains('expanded_theory');

    if (isExpanded) {
        
        textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px';
        setTimeout(() => {
            textWrapper.style.maxHeight = '30px'; 
        }, 0);
        button.textContent = 'Read more';
        button.style.backgroundColor = '';
        button.style.color = '';
    } else {
        
        textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px';
        setTimeout(() => {
            textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px';
        }, 0);
        button.textContent = 'Read less';
        button.style.backgroundColor = '';
        button.style.color = '#fff';
    }

    textContainer.classList.toggle('expanded_theory');
}