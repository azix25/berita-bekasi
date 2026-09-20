```javascript
"use strict";

/* =========================
   MENU MOBILE
========================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

    });


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

        });

    });

}


/* =========================
   WHATSAPP
========================= */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        function () {

            const text =
                "Berita Kabupaten Bekasi - "
                + "Desa Karang Haur\n\n"
                + window.location.href;

            const url =
                "https://wa.me/?text="
                + encodeURIComponent(text);

            window.open(url, "_blank");

        }
    );

}


/* =========================
   FACEBOOK
========================= */

const facebookButton =
    document.getElementById("facebookButton");


if (facebookButton) {

    facebookButton.addEventListener(
        "click",
        function () {

            const url =
                "https://www.facebook.com/sharer/sharer.php?u="
                + encodeURIComponent(
                    window.location.href
                );

            window.open(
                url,
                "_blank",
                "width=600,height=500"
            );

        }
    );

}


/* =========================
   COPY LINK
========================= */

const copyButton =
    document.getElementById("copyButton");


if (copyButton) {

    copyButton.addEventListener(
        "click",
        async function () {

            try {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                copyButton.textContent =
                    "✓ Link Disalin";

                setTimeout(function () {

                    copyButton.textContent =
                        "Salin Link";

                }, 2000);

            } catch (error) {

                alert(
                    "Link tidak dapat disalin. "
                    + "Silakan salin alamat halaman secara manual."
                );

            }

        }
    );

}
```
