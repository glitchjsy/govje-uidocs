import { Header } from "@govje-frontend/react";

const component = () => <Header showInfo />

const react = () => `<Header showInfo />`

const html = () => (
    `<header class="govje-header" role="banner">
        <div class="govje-header--container">
            <a href="https://www.gov.je" title="gov.je home" class="govje-header--logo">
                <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" style="border-width: 0" />
                gov.je
            </a>
            <div class="govje-header--info">
                <div class="govje-header--info--line1">Information and public services for the Island of Jersey</div>
                <div clsas="govje-header--info--line2">L'înformâtion et les sèrvices publyis pouor I'Île dé Jèrri</div>
            </div>
        </div>
    </header>`
)

export default { component, html, react }