document.addEventListener("DOMContentLoaded", function() {
    const githubLink = document.querySelector('.github-link a img');
    
    githubLink.addEventListener('mouseover', function() {
        githubLink.style.opacity = '0.7';
    });

    githubLink.addEventListener('mouseout', function() {
        githubLink.style.opacity = '1';
    });
});
