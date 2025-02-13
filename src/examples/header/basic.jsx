import { Header } from "@govje-frontend/react";

const component = () => <Header />

const react = () => `<Header />`

const html = () => (
    `<header class="govje-header" role="banner">
        <div class="govje-header--container">
            <a href="https://www.gov.je" title="gov.je home" class="govje-header--logo">
                <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" style="border-width: 0" />
                gov.je
            </a>
        </div>
    </header>`
)

export default { component, html, react }