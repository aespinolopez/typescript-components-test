import { Story } from '@storybook/react';
import { CssPropButton, StyledButton } from ".";
import { ButtonProps, StyledButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: CssPropButton,
}

export const CssProp: Story<ButtonProps> = (args) => <CssPropButton {...args}>Hello Css prop!</CssPropButton>

export const Styled: Story<StyledButtonProps> = (args) => <StyledButton {...args}>Hello Styled</StyledButton>