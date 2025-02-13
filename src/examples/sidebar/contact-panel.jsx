import { ContactSidePanel, Sidebar } from "@govje-frontend/react";

const component = () => (
    <Sidebar>
        <ContactSidePanel
            contact="Driver and Vehicle Standards"
            telephone="+441534448600"
            email="dvsinfo@gov.je"
            openingTimes="Monday to Friday 8.30am to 4.00pm"
            withSignVideo
            address={
                <p>
                    Driver and Vehicle Standards<br />
                    La Route De Veulle<br />
                    La Collette<br />
                    St Helier<br />
                    Jersey <br />
                    JE1 3UE
                </p>
            }
        />
    </Sidebar>
)

const html = () => (
    `<div class="govje-sidepanel">
        <h1>Contact</h1>
        <p>Driver and Vehicle Standards</p>
        <ul>
            <li>T&nbsp;&nbsp;&nbsp;<a href="tel:+441534448600" class="govje-link govje-link--charcoal">+441534448600</a></li>
            <li>E&nbsp;&nbsp;&nbsp;<a href="mailto:dvsinfo@gov.je" class="govje-link govje-link--charcoal">dvsinfo@gov.je</a></li>
        </ul>
        <p>Monday to Friday 8.30am to 4.00pm</p>
        <p>Driver and Vehicle Standards<br>La Route De Veulle<br>La Collette<br>St Helier<br>Jersey <br>JE1 3UE</p>
        <a href="https://www.gov.je/pages/signvideo.aspx" class="govje-button govje-button--primary">Connect to SignVideo</a>
    </div>`
)

const react = () => `<ContactSidePanel
    contact="Driver and Vehicle Standards"
    telephone="+441534448600"
    email="dvsinfo@gov.je"
    openingTimes="Monday to Friday 8.30am to 4.00pm"
    withSignVideo
    address={
        <>
            Driver and Vehicle Standards<br />
            La Route De Veulle<br />
            La Collette<br />
            St Helier<br />
            Jersey <br />
            JE1 3UE
        </>
    }
/>`

export default { component, html, react }