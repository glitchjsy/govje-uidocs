import { Input } from "@govje-frontend/react";

const component = () => <Input name="plate" id="plate" placeholder="Enter registration number, starting with J" />

const react = () => `<Input name="plate" id="plate" placeholder="Enter registration number, starting with J" />`

const html = () => `<input name="plate" id="plate" placeholder="Enter registration number, starting with J" class="govje-input" />`

export default { component, react, html }