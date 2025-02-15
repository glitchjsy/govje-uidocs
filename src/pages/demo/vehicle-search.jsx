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

                <h1 className="govje-title">Vehicle Search</h1>

                <div className="row">
                    <div className="col-lg-8 col-12">
                        <article className="pagecontent">
                            <p>
                                Check online to find out what information Driver and Vehicle Standards (DVS) holds about a vehicle.
                            </p>
                           
                            <form>
                                <FormGroup
                                    label="Vehicle Registration Number"
                                    labelBold
                                    error="We don't have any record of a vehicle with that registration number"
                                >
                                    <Input id="plate" name="plate" hasError />
                                </FormGroup>
                                <br />
                                <Button variant="primary" label="Search" />
                            </form>
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