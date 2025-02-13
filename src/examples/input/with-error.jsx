import { Input, FormGroup } from "@govje-frontend/react";

const component = () => (
    <FormGroup 
        label="Vehicle Registration Number" 
        error="Please enter a valid registration number"
        
    >
        <Input name="plate" id="plate" hasError />
    </FormGroup>
)

const react = () => `<FormGroup 
    label="Vehicle Registration Number" 
    error="Please enter a valid registration number"
>
    <Input name="plate" id="plate" hasError />
</FormGroup>`

const html = () => (
    `<div class="govje-form-group govje-form-group--error">
        <label class="govje-label" for="plate">Vehicle Registration Number</label>
        <input name="plate" id="plate" class="govje-input govje-input--error" />
        <div class="govje-form-group--error-message">Please enter a valid registration number</div>
    </div>`
)

export default { component, html, react }