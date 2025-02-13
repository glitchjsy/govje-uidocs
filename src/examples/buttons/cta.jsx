import { Button } from "@govje-frontend/react";

const component = () => {
    return (
        <div>
            <Button variant="default" href="#" label="Start" callToAction />
            <Button variant="primary" href="#" label="Start" callToAction />
            <Button variant="secondary" href="#" label="Start" callToAction />
        </div>
    )
}

const react = () => `<div>
    <Button variant="default" href="#" label="Start" callToAction />
    <Button variant="primary" href="#" label="Start" callToAction />
    <Button variant="secondary" href="#" label="Start" callToAction />
</div>`

const html = () => {
    return `
        <div>
            <a href="#" class="govje-cta govje-cta--default">Start</a>
            <a href="#" class="govje-cta govje-cta--primary">Start</a>
            <a href="#" class="govje-cta govje-cta--secondary">Start</a>
        </div>
    `
}

export default { component, html, react }