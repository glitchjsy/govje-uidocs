import { Button } from "@govje-frontend/react";

const component = () => <Button variant="secondary" label="Choose files" />

const react = () => `<Button variant="primary" label="Connect to SignVideo" />`

const html = () => `<button class="govje-button govje-button--secondary">Choose files</button>`

export default { component, html, react }