import { Header } from "@govje-frontend/react";

const component = () => <Header variant="service" serviceName="Car Park Fine Payments" />

const react = () => `<Header variant="service" serviceName="Car Park Fine Payments" />`

const html = () => (
    `<header class="govje-header govje-header--service" role="banner">
        <div class="govje-header--container">
            <a href="https://www.gov.je" title="gov.je home" class="govje-header--logo">
                <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" style="border-width: 0" />
                gov.je
            </a>
            <div class="govje-header--service-info">
                <div class="govje-header--service-name">Car Park Fine Payments</div>
                <div class="govje-header--service-badge">Service</div>
            </div>
        </div>
    </header>`
)

export default { component, html, react }