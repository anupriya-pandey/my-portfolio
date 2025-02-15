function setBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('background-container').style.backgroundImage = `url(${e.target.result})`;
            document.getElementById('background-container').style.backgroundSize = 'cover';
            document.getElementById('background-container').style.backgroundPosition = 'center';
            document.getElementById('background-container').style.opacity = '0.5';
        };
        reader.readAsDataURL(file);
    }
}

function navigate(section) {
    alert(`Navigating to ${section} page...`);
    // Here you can add actual navigation logic, like window.location.href
}