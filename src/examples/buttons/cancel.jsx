import { Button } from "@govje-frontend/react";

const component = () => <Button variant="cancel" label="Cancel" />

const react = () => `<Button variant="cancel" label="Cancel" />`

const html = () => `<button class="govje-button govje-button--cancel">Cancel</button>`

export default { component, html, react }