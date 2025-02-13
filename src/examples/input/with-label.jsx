import { Input, FormGroup } from "@govje-frontend/react";

const component = () => (
    <FormGroup label="Vehicle Registration Number">
        <Input name="plate" id="plate" />
    </FormGroup>
)

const react = () => `<FormGroup label="Vehicle Registration Number">
    <Input name="plate" id="plate" />
</FormGroup>`

const html = () => (
    `<div class="govje-form-group">
        <label class="govje-label" for="plate">Vehicle Registration Number</label>
        <input name="plate" id="plate" class="govje-input" />
    </div>`
)

export default { component, html, react }