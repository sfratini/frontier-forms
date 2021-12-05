import { BaseButtonText, ButtonView, SectionBackground, SectionContainer, SectionTitle } from "components/ui/components";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";
import FormField from "./FormField";

function FormSection({isLast, section, onNext}: {isLast?: boolean, section: Frontier.Section, onNext: Function}){

    const label: string = isLast ? 'Submit' : 'Next';
    const type: 'submit' | 'button' | 'reset' = isLast ? 'submit' : 'button';
    const [shouldGoNext, setShouldGoNext] = useState(false);
    const { errors, setTouched, validateForm, touched }: {errors: Record<string, any>, setTouched: Function, validateForm: Function, touched: Record<string, any>} = useFormikContext();

    //console.log('Errors on Section', errors);
    //console.log('Touched on Section', touched);
    

    useEffect(() => {
        if (shouldGoNext === false) return;
        let isValid: boolean = true;
        section.content.forEach(i => {
            if (errors[i.id]){
                isValid = false;
            }
        })
        if (isValid !== true){
            setShouldGoNext(isValid);
            return;
        }
        onNext();
    }, [errors, shouldGoNext])

    const onNextStep = async () => {
        const touched: Record<string, boolean> = {};
        section.content.forEach(i => {
            touched[i.id] = true;
        })
        setTouched(touched);
        await validateForm();
        setShouldGoNext(true)
    }

    return <SectionBackground>

        <SectionContainer>
            <SectionTitle>{section.title}</SectionTitle>
            {section.content.map((item) => {
                return <FormField key={item.id} field={item}/>
            })}
        </SectionContainer>

        <ButtonView onClick={onNextStep} type={type}><BaseButtonText>{label}</BaseButtonText></ButtonView>

    </SectionBackground>

}

export default FormSection;