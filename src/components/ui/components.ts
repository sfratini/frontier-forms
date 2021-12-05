import styled from 'styled-components';

interface BooleanProps {
  selected: boolean;
}

const BaseText = styled.span`
  color: ${props => props.theme.text_color};
`;

const BaseButtonText = styled.span`
  color: white;
  text-align: center;
`;

const FormError = styled.p`
  color: red;
`;

const ButtonView = styled.button`
  width: 100%;
  border-style: none;
  background-color: green;
  border-radius: 8px;
  margin: 4px;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
`;

const SectionBackground = styled.div`
  background-color: ${props => props.theme.background_color};
  padding: 16px;
`;

const SectionContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  color: ${props => props.theme.text_color};
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 8px;
`;

const FrontierInput = styled.input`
  margin-top: 8px;
  margin-bottom: 24px;
  border-radius: 8px;
  border-color: #eee;
  border-style: solid;
  border-width: 1px;
  height: 36px;
  padding: 4px;
`;

const FrontierBoolean = styled.input`
  display: none;
`;

const FrontierBooleanContainer = styled.div`
  margin: 16px;
`;

const FrontierBooleanLabel = styled.label<BooleanProps>`
  margin: 8px;
  border-radius: 8px;
  border-color: ${props =>
    props.selected ? props.theme.primary_color : '#eee'};
  border-style: solid;
  border-width: 1px;
  height: 36px;
  padding: 8px 12px;
`;

export {
  ButtonView,
  BaseText,
  BaseButtonText,
  SectionBackground,
  SectionContainer,
  SectionTitle,
  FormLabel,
  FrontierInput,
  FormError,
  FrontierBoolean,
  FrontierBooleanLabel,
  FrontierBooleanContainer,
};
