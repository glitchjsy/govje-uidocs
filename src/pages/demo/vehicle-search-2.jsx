import { Breadcrumbs, Button, ContactSidePanel, Container, FormGroup, Header, Input, Sidebar, OurSites, Footer } from "@govje-frontend/react";
import { DemoPage } from "../../components/DemoPage";

const VehicleSearchDemo = () => {
    return (
        <DemoPage>
            <Header variant="service" serviceName="Vehicle Search" />

            <Container>
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "https://www.gov.je/Pages/default.aspx" },
                        { label: "Travel and transport", href: "https://www.gov.je/travel" },
                        { label: "Motoring", href: "https://www.gov.je/travel/motoring" },
                        { label: "Vehicle Search", href: "https://vehicle-search.gov.je" }
                    ]}
                />

                <h1 className="govje-title">Vehicle Details - J1</h1>

                <div className="row">
                    <div className="col-lg-8 col-12">
                        <article className="pagecontent">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="govje-panel govje-panel--confirmation">
                                        <h1 className="govje-panel--title">PTI Status</h1>
                                        <div className="govje-panel--body">
                                            N/A over 40 years old
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6">

                                </div>
                            </div>

                            <div className="govje-summary-list">
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Registration number</p>
                                    <p className="govje-summary-list--value">J1</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Make</p>
                                    <p className="govje-summary-list--value">ROLLS ROYCE</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Type</p>
                                    <p className="govje-summary-list--value">Convertible</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Colour</p>
                                    <p className="govje-summary-list--value">Silver</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Cylinder capacity</p>
                                    <p className="govje-summary-list--value">6181 (cc)</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Weight</p>
                                    <p className="govje-summary-list--value">Not known</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">CO₂ emissions</p>
                                    <p className="govje-summary-list--value">Not known</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Fuel type</p>
                                    <p className="govje-summary-list--value">Petrol</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Date of first registration</p>
                                    <p className="govje-summary-list--value">01 February 1921</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Date registered in Jersey</p>
                                    <p className="govje-summary-list--value">25 May 2001</p>
                                </div>
                                <div className="govje-summary-list--row">
                                    <p className="govje-summary-list--key">Number of previous owners</p>
                                    <p className="govje-summary-list--value">0</p>
                                </div>
                            </div>
                            
                            <p>
                                If this vehicle belongs to you and any of the details are incorrect then please <a href="https://www.gov.je/Travel/Motoring/BuyingSellingVehicle/Pages/ChangeDetails.aspx" target="_blank">tell us about the change</a>.
                            </p>
                        </article>
                    </div>

                    <Sidebar>
                        <ContactSidePanel
                            contact="Driver and Vehicle Standards"
                            telephone="+441534448600"
                            email="dvsinfo@gov.je"
                            openingTimes="Monday to Friday 8.30am to 4.00pm"
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
                        />
                    </Sidebar>
                </div>
            </Container>

            <OurSites />
            <Footer />
        </DemoPage>
    );
}

export default VehicleSearchDemo;