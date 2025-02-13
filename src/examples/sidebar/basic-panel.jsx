import { Sidebar, SidePanel } from "@govje-frontend/react";

const component = () => (
    <Sidebar>
        <SidePanel title="Related Links">
            <ul>
                <li><a className="govje-link govje-link--charcoal" href="https://careers.gov.je" target="_blank">Work with us: Government of Jersey careers</a></li>
                <li><a className="govje-link govje-link--charcoal" href="https://one.gov.je/service/Submit_your_job_vacancy">Submit your job vacancy</a></li>
                <li><a className="govje-link govje-link--charcoal" href="https://www.gov.je/working/skillscareershighereducation/careersguidance/pages/skillscareeroptions.aspx">Careers advice</a></li>
            </ul>
        </SidePanel>
    </Sidebar>
)

const react = () => `<SidePanel title="Related Links">
    <ul>
        <li><a className="govje-link govje-link--charcoal" href="https://careers.gov.je" target="_blank">Work with us: Government of Jersey careers</a></li>
        <li><a className="govje-link govje-link--charcoal" href="https://one.gov.je/service/Submit_your_job_vacancy">Submit your job vacancy</a></li>
        <li><a className="govje-link govje-link--charcoal" href="https://www.gov.je/working/skillscareershighereducation/careersguidance/pages/skillscareeroptions.aspx">Careers advice</a></li>
    </ul>
</SidePanel>
`

const html = () => (
    ` <div class="govje-sidepanel">
        <h1>Related links</h1>
        <ul>
            <li><a class="govje-link govje-link--charcoal" href="https://careers.gov.je/?_gl=1*2ub8im*_ga*ODk5NzkwMTgyLjE3MTc1OTY4MjE.*_ga_07GM08Q17P*MTczMjExODUwMi4yNi4xLjE3MzIxMTkwMTQuMC4wLjA." target="_blank">Work with us: Government of Jersey careers</a></li>
            <li><a class="govje-link govje-link--charcoal" href="https://one.gov.je/service/Submit_your_job_vacancy?_gl=1*1u0drbt*_ga*ODk5NzkwMTgyLjE3MTc1OTY4MjE.*_ga_07GM08Q17P*MTczMjExODUwMi4yNi4xLjE3MzIxMTkwMTQuMC4wLjA.">Submit your job vacancy</a></li>
            <li><a class="govje-link govje-link--charcoal" href="https://www.gov.je/working/skillscareershighereducation/careersguidance/pages/skillscareeroptions.aspx">Careers advice</a></li>
        </ul>
    </div>`
)

export default { component, react, html }