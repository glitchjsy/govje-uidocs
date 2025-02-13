import React, { useState, useRef, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import ReactDOMServer from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";

export default function Example({ height, component, samples }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderElement = React.cloneElement(component);
    const elementAsString = ReactDOMServer.renderToStaticMarkup(renderElement);

    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current && component) {
            const htmlString = elementAsString;
            const iframeDocument = iframeRef.current.contentDocument;

            iframeDocument.open();
            iframeDocument.write(`
                <html lang="en">
                    <head>
                        <!--<link rel="stylesheet" href="https://govje.azureedge.net/css/GovJE-20200405.min.css">-->
                        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
                        <link rel="stylesheet" href="/all.css">

                        <style>
                            * {
                                font-family: Ariel, sans-serif;
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
    }, [component]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.exampleView}>
            <div className={styles.component}>
                <iframe
                    title="Rendered HTML"
                    className={styles.dynamicIframe}
                    style={{ height, width: "100%" }}
                    ref={iframeRef}
                />
            </div>

            <div className={styles.codeSampleWrapper}>
                {samples.map(sample => (
                    <div className={styles.codeSample}>
                        <div className={styles.sampleLabel} onClick={() => setIsOpen(!isOpen)}>
                            {sample.label}
                        </div>
                        {isOpen && (
                            <div className={styles.sampleContent}>
                                <CodeBlock language={sample.language}>
                                    {sample.language === "html" ? beautifyHtml(sample.code) : sample.code}
                                </CodeBlock>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}