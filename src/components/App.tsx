import { Form, Formik } from 'formik';
import DataHelper from 'helpers/DataHelper';
import FormHelper from 'helpers/FormHelper';
import ThemeHelper from 'helpers/ThemeHelper';
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import FormSection from './form/FormSection';

function App() {
  const job = DataHelper.getData();

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSection = job.sections[currentIndex];

  // Check your console to see the full instructions!
  console.log(job);

  const onNext = () => {
    if (currentIndex < (job.sections.length-1)){
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <ThemeProvider theme={ThemeHelper.makeTheme(job.theme)}>

        <Formik
              initialValues={{}}
              validationSchema={FormHelper.getValidationSchema(job)}
              onSubmit={async (values) => {
                console.log('onSubmit');
                console.log(JSON.stringify(values, null, 2));
              }}
            >
              <div id='form'>
              <Form>
                <FormSection 
                key='section'
                onNext={onNext}
                section={currentSection} 
                isLast={(currentIndex+1)===job.sections.length}
                />
            </Form>
              </div>
      </Formik>
    </ThemeProvider>
  );
}

export default App;
