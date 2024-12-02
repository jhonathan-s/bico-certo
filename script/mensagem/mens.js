function monstralinks (id) {
    document.querySelectorAll ('.links').forEach(link => {
        link.computedStyleMap.display ='none';
    });
    document.getElementById(id).style.display = 'block';
}