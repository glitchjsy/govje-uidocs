// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
    uidocs: [
        "index",
        {
            label: "Styles",
            type: "category",
            collapsed: false,
            collapsible: false,
            items: [
                "styles/colours"
            ]
        },
        {
            label: "Components",
            type: "category",
            collapsed: false,
            collapsible: false,
            items: [
                "components/button",
                "components/table",
                "components/header",
                "components/breadcrumbs",
                "components/footer",
                "components/our-sites",
                "components/input",
                "components/sidebar"
            ],
        },
    ]
};

export default sidebars;
