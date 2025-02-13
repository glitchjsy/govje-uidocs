import React, { useState, useRef, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import ReactDOMServer from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import jsxToString from "jsx-to-string";

// TODO: The html prop is a temporary solution to get properly formatted html. I have tried multiple
// formatting libraries but none of them seem to format it properly, and renderToStaticMarkup returns
// HTML with no formatting at all.
export default function Example({ height, component, html, react, reactProps }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTab, setIsOpenTab] = useState(null);
    const [samples, setSamples] = useState([]);

    const renderElement = React.cloneElement(component);
    const elementAsString = ReactDOMServer.renderToStaticMarkup(renderElement);

    const iframeRef = useRef(null);

    useEffect(() => {
        setSamples([
            { label: "HTML", language: "html", code: beautifyHtml(html) },
            { label: "React", language: "jsx", code: react }
        ]);
    }, []);

    useEffect(() => {
        if (iframeRef.current && component) {
            const htmlString = elementAsString;
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
    }, [component]);

    const handleTabClick = (index) => {
        setIsOpenTab(isOpenTab === index ? null : index);
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

            {/* {samples.length !== 0 && (
                <Tabs defaultValue={null}>
                    {samples.map(sample => (
                        <TabItem value={sample.label.toLowerCase().replace(" ", "-")} label={sample.label} onClick={() => setIsOpen(true)}>
                            {isOpen && (
                                <CodeBlock language={sample.language}>
                                    {sample.code}
                                </CodeBlock>
                            )}
                        </TabItem>
                    ))}
                </Tabs>
            )} */}

            <div className={styles.tabsWrapper}>
                <div className={styles.tabLabelsWrapper}>
                    {samples.map((sample, index) => (
                        <div key={sample.label} className={styles.sampleLabel} onClick={() => handleTabClick(index)}>
                            {sample.label}
                        </div>
                    ))}
                    {reactProps && (
                        <div className={styles.sampleLabel} onClick={() => handleTabClick(100)}>
                            React Props
                        </div>
                    )}
                </div>

                {isOpenTab !== null && isOpenTab !== 100 && (
                    <div className={styles.sampleContent}>
                        <CodeBlock language={samples[isOpenTab].language}>
                            {samples[isOpenTab].code}
                        </CodeBlock>
                    </div>
                )}

                {isOpenTab === 100 && (
                    <div className={styles.sampleContent}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Required</th>
                                    <th>Type</th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reactProps.map(prop => (
                                    <tr>
                                        <td>{prop.name}</td>
                                        <td>
                                            <span className={styles.badge} style={{ backgroundColor: prop.required ? "#f7819a" : "#83f781" }}>
                                                {prop.required ? "Required" : "Optional"}
                                            </span>
                                        </td>
                                        <td>{prop.type}</td>
                                        <td>{prop.summary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}