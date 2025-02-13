import { Input, FormGroup } from "@govje-frontend/react";

const component = () => (
    <FormGroup 
        label="Vehicle Registration Number" 
        hint="The registration number for your vehicle"
    >
        <Input name="plate" id="plate" />
    </FormGroup>
)

const react = () => `<FormGroup 
    label="Vehicle Registration Number" 
    hint="The registration number for your vehicle"
>
    <Input name="plate" id="plate" />
</FormGroup>`

const html = () => (
    `<div class="govje-form-group">
        <label class="govje-label" for="plate">Vehicle Registration Number</label>
        <div class="govje-hint">The registration number for your vehicle</div>
        <input name="plate" id="plate" class="govje-input" />
    </div>`
)

export default { component, html, react }