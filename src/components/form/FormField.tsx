import { FormError, FormLabel, FrontierBoolean, FrontierBooleanContainer, FrontierBooleanLabel, FrontierInput } from "components/ui/components";
import { useFormikContext } from "formik";
import Multiselect from 'multiselect-react-dropdown';
import {useTheme} from 'styled-components'

interface DropdownItem {
    id: number;
    name: string;
}

function FormField({field}: {field: Frontier.Element}){

    const { values, errors, touched, handleChange, handleBlur, setFieldValue, setFieldTouched}: {handleBlur: any, handleChange: any, values: any, errors: any, touched: any, setFieldValue: Function, setFieldTouched: Function} = useFormikContext();
    const theme: Frontier.Theme = useTheme();
    const value: any = values[field.id];

    const onSelect = (selectedList: DropdownItem[], selectedItem: DropdownItem) => {
        //console.log('onSelect', selectedItem, selectedList);
        setFieldTouched(field.id);
        setFieldValue(field.id, selectedList.map(s => s.id));
        
    }
    
    const onRemove = (selectedList: DropdownItem[], removedItem: DropdownItem) => {
        //console.log('onRemove', removedItem, selectedList);
        setFieldTouched(field.id);
        setFieldValue(field.id, selectedList.map(s => s.id));
    }

   switch (field.type) {
       case 'boolean':
        return <>
        <FormLabel htmlFor={field.id}>{field.question_text}</FormLabel>
        {errors[field.id] && touched[field.id] && <FormError>{errors[field.id]}</FormError>}
        
        <FrontierBooleanContainer>
            <FrontierBooleanLabel selected={value === '1'} htmlFor='Yes'>{'Yes'}</FrontierBooleanLabel>
            <FrontierBooleanLabel selected={value === '0'} htmlFor='No'>{'No'}</FrontierBooleanLabel>
        </FrontierBooleanContainer>

        <FrontierBoolean 
            required={field.metadata.required} 
            name={field.id}
            id={'Yes'}
            type={'radio'}
            value={'1'}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <FrontierBoolean 
            required={field.metadata.required} 
            name={field.id}
            id={'No'}
            type={'radio'}
            value={'0'}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </>

        case 'multichoice':
            return <>
            <FormLabel htmlFor={field.id}>{field.question_text}</FormLabel>
            {errors[field.id] && touched[field.id] && <FormError>{errors[field.id]}</FormError>}
            
            <Multiselect
                options={field.metadata.options?.map(option => ({id: option.value, name: option.label}))} // Options to display in the dropdown
                onSelect={onSelect} 
                onRemove={onRemove} 
                displayValue="name" 
                style={{
                    chips: {
                        background: theme.primary_color
                    }
                }}
                />
                </>
   
       default:
        return <>
        <FormLabel htmlFor={field.id}>{field.question_text}</FormLabel>
        {errors[field.id] && touched[field.id] && <FormError>{errors[field.id]}</FormError>}
        <FrontierInput 
            placeholder={field.metadata.placeholder} 
            required={field.metadata.required} 
            name={field.id}
            id={field.id}
            type={field.type}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            </>
   }
    
}

export default FormField;