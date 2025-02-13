import React, { useEffect, useRef } from "react";

export default function Example({ height }) {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeDocument = iframeRef.current.contentDocument;

            iframeDocument.open();
            iframeDocument.write(`
                <html lang="en">
                    <head>
                        <!--<link rel="stylesheet" href="https://govje.azureedge.net/css/GovJE-20200405.min.css">-->
                        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

                        <style>
                        @font-face {
    font-family: 'proxima-nova';
    src: url('/proxima/ProximaNova-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'proxima-nova';
    src: url('/proxima/ProximaNova-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'proxima-nova';
    src: url('/proxima/ProximaNova-Thin.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
}
    </style>

                        <link rel="stylesheet" href="/all.css">

                        <title>Test Page</title>

                        <style>
                        * {
                        font-family: proxima-nova, sans-serif;}
                            html, body {
                                margin: 0;
                                padding: 0;
                            }
                        </style>
                    </head>
                    <body>
                          <header class="govje-header govje-header--service" role="banner">
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
   </header>

                        <div class="container">
                             <div class="govje-breadcrumbs">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Passports, travel and living abroad</a>
                                    </li>
                                    <li>
                                        <a href="#">Travel abroad</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 class="govje-title">Pay a Car Park Fine</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 col-12">
                                    <article class="pagecontent">
                                        <p>If you have received a parking fine, then please enter the AN number (if incurred in Sand Street Car Park), the CP number (if incurred in other car parks) or the SF number (on-street fines) and your vehicle registration number below.</p>
                                        <p>You will then be presented with the parking fine details and have the opportunity to pay this online.</p>

                                         <div class="govje-form-group govje-form-group--error">
            <label class="govje-label" for="plate">Enter your fine number (including AN, CP or SF prefix)</label>
            <input
                type="text"
                name="plate"
                id="plate"
                class="govje-input govje-input--error"
            />
            <div class="govje-form-group--error-message">Please enter a valid ECN number</div>
        </div>
<br>
          <div class="govje-form-group">
            <label class="govje-label" for="plate">Enter your vehicle registration number </label>
            <input
                type="text"
                name="plate"
                id="plate"
                class="govje-input"
            />
        </div>
<br>
        <button class="govje-button govje-button--primary">Search</button>
                                    </article>
                                    
                                </div>
                                <aside class="govje-sidebar">
                                    <div id="navigator">
                                        <div class="govje-sidepanel govje-sidepanel--contacts">
                                            <h1>Contact</h1>
                                            <p class="contactTitle">Driver and Vehicle Standards</p>
                                            <ul>
                                                <li>T&nbsp;&nbsp;&nbsp;<a href="tel:+441534448600" class="govje-link govje-link--charcoal">01534 448600</a></li>
                                                <li>E&nbsp;&nbsp;&nbsp;<a href="mailto:dvsinfo@gov.je" class=" govje-link govje-link--charcoal">dvsinfo@gov.je</a></li>
                                            </ul>
                                            <p class="contactOpening">Monday to Friday 8.30am to 4.00pm</p>
                                            <p>Driver and Vehicle Standards<br/>La Route De Veulle<br/>La Collette<br/>St Helier<br/>Jersey <br/>JE1 3UE</p>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </body>
                </html>
            `);
            iframeDocument.close();
        }
    }, []);

    return (
        <div>
            <div>
                <iframe
                    title="Rendered HTML"
                    style={{ height: "100vh", width: "100%" }}
                    ref={iframeRef}
                />
            </div>
        </div>
    );
}