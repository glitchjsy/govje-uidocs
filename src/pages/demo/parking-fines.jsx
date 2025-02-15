import { Breadcrumbs, Button, ContactSidePanel, Container, FormGroup, Header, Input, Sidebar, OurSites, Footer } from "@govje-frontend/react";
import { DemoPage } from "../../components/DemoPage";

const ParkingFinesDemo = () => {
    return (
        <DemoPage>
            <Header variant="service" serviceName="This is a test service" />

            <Container>
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: "Test Service", href: "/services/test" }
                    ]}
                />

                <h1 className="govje-title">Pay a Car Park Fine</h1>

                <div className="row">
                    <div className="col-lg-8 col-12">
                        <article className="pagecontent">
                            <p>
                                If you have received a parking fine, then please enter the AN number (if incurred in Sand Street
                                Car Park), the CP number (if incurred in other car parks) or the SF number (on-street fines) and
                                your vehicle registration number below.
                            </p>
                            <p>
                                You will then be presented with the parking fine details and have the opportunity to pay this
                                online.
                            </p>
                            <form>
                                <FormGroup
                                    label="Enter your fine number (including AN, CP or SF prefix)"
                                    labelBold
                                    error="Please enter a valid ECN number"
                                    hint="Here is a hint"
                                >
                                    <Input id="fineNumber" name="fineNumber" hasError />
                                </FormGroup>
                                <br />
                                <FormGroup label="Enter your vehicle registration number" labelBold>
                                    <Input
                                        id="plate"
                                        name="plate"
                                    />
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
                        />
                    </Sidebar>
                </div>
            </Container>

            <OurSites />
            <Footer />
        </DemoPage>
    );
}

export default ParkingFinesDemo;