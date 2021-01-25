import './style.scss'

(() => {
    document.addEventListener('DOMContentLoaded', e => {
        var light = `theme-light`;
        var dark = `theme-dark`;
    
        const html = document.querySelector('html');
        html.dataset.theme = light;
    
        function toggleTheme() {
            if (html.dataset.theme.localeCompare(`theme-light`) === 0) {
                html.dataset.theme = dark;
            }
            else {
                html.dataset.theme = light;
            }
        }

        document.getElementById("theme-switch").addEventListener("click",() =>{
            console.log("clicked")
            toggleTheme();
        });
    });
})();
