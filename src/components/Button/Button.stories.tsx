import { CssPropButton, StyledButton } from ".";

export default {
    title: 'Components/Button',
    component: CssPropButton,
}

export const Default = (args) => <CssPropButton {...args}><span>Hello World!</span></CssPropButton>