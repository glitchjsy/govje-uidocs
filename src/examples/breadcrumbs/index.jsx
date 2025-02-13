import { Breadcrumbs } from "@govje-frontend/react";

const component = () => (
    <Breadcrumbs
        items={[
            { label: "Home", href: "#" },
            { label: "Passports, travel and living abroad", href: "#test" },
            { label: "Travel abroad", href: "#test2" }
        ]}
    />
)

const react = () => `<Breadcrumbs
    items={[
        { label: "Home", href: "#" },
        { label: "Passports, travel and living abroad", href: "#test" },
        { label: "Travel abroad", href: "#test2" }
    ]}
/>`

const html = () => (
    `<div class="govje-breadcrumbs">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#test">Passports, travel and living abroad</a>
            </li>
            <li>
                <a href="#test2">Travel abroad</a>
            </li>
        </ul>
    </div>`
)

export default { component, html, react }