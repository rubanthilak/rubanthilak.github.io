import './style.scss'

(() => {
    document.addEventListener('DOMContentLoaded', e => {
        var light = `theme-light`;
        var dark = `theme-dark`;

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


        const html = document.querySelector('html');
        if (getCookie("theme").localeCompare("") === 0 || getCookie("theme").localeCompare("theme-light") === 0) {
            setCookie("theme", "theme-light", 7);
            html.dataset.theme = light;
        }
        else {
            setCookie("theme", "theme-dark", 7);
            html.dataset.theme = dark;
        }

        function toggleTheme() {
            if (html.dataset.theme.localeCompare(`theme-light`) === 0) {
                setCookie("theme", "theme-dark", 7);
                html.dataset.theme = dark;
            }
            else {
                setCookie("theme", "theme-light", 7);
                html.dataset.theme = light;
            }
        }

        document.getElementById("theme-switch").addEventListener("click", () => {
            toggleTheme();
        });
    });
})();
