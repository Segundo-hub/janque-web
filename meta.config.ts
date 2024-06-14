const description =
    "La localidad de Janque es uno de los Centros Poblados mas grandes de Incahuasi y alberga una poblacion de mas de 200 habitantes. Se caracteriza principalmente por sus costumbres y la acogida de su gente, y, en mayor proporcion, por la historia que le antecede como Centro Poblado y por albergar la hacienda mas grande de Incahuasi ";
const host = "https://cp-janque.com";

export const metaHead = {
    charset: "UTF-8",
    htmlAttrs: {
        lang: "es",
        "data-theme": "dark",
    },
    title: "Centro Poblado Janque",
    link: [
        // { rel: "autor" as any, content: "Alex Segundo" as any },
        { hid: "favicon", rel: "icon", href: `${host}/logo.svg` },
        { hid: "favicon", rel: "apple-touch-icon", href: `${host}/logo.svg` },
        { hid: "url", rel: "canonical", href: host },
        { rel: "publiher", href: "<a href='https://alexsegundo.com/about'></a>" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
            href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Titillium+Web:ital,wght@0,300;0,400;0,600;1,400&family=Viga&display=swap",
            rel: "stylesheet",
        },
    ],
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" },
        { name: "robots", content: "index, follow" },
        { hid: "description", name: "description", content: description },
        { name: "mobile-wep-app-capable", content: "yes" },
        {
            name: "keywords",
            content: "Yanque, Janque, Janque.com, Centro Poblado de Janque, Incahuasi-Janque",
        },

        //---->>> Twitter Support <<<------>
        { name: "twitter:title", hid: "tw-title", content: "Centro Poblado Janque" },
        { name: "twitter:url", hid: "tw-url", content: host },
        { name: "twitter:image", hid: "tw-image", content: `${host}/` },
        { name: "twitter:description", hid: "tw-description", content: description },
        { name: "twitter:creator", hid: "tw-creator", content: "alex-segundo" },
        { name: "twitter:card", content: "summary" },

        //---->>> Open Graph <<<------>
        { property: "og:title", hid: "og-title", content: "Centro Poblado Janque" },
        { property: "og:url", hid: "og-url", content: "https://cp-janque.com" },
        { property: "og:image", hid: "og-image", content: `${host}/` },
        { property: "og:description", hid: "og-description", content: description },
        { property: "og:site_name", hid: "og-site", content: "Centro Poblado de Janque" },
        { property: "website:publish_time", hid: "og-publish", content: "20/12/2020" },
        { property: "og:type", content: "Website" },
    ],
};
