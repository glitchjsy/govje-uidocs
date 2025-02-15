import { useEffect, useRef } from "react"
import ReactDOMServer from "react-dom/server";

export const DemoPage = ({ children }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            const htmlString = ReactDOMServer.renderToStaticMarkup(children);
            const iframeDocument = iframeRef.current.contentDocument;

            iframeDocument.open();
            iframeDocument.write(`
                    <html lang="en">
                        <head>
                            <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
                            <link rel="stylesheet" href="/all.css">
    
                            <!-- TODO: This should be included with govje-frontend -->
                            <style>
                                * {
                                    box-sizing: border-box;
                                }
                                
                                html, body {
                                    padding: 0;
                                    margin: 0;
                                }

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
                        </head>
                        <body>
                            ${htmlString}
                        </body>
                    </html>
                `);
            iframeDocument.close();
        }
    }, []);

    return (
        <iframe
            title="Rendered HTML"
            style={{ height: "100vh", width: "100%" }}
            ref={iframeRef}
        />
    )
}