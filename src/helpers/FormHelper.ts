import * as Yup from 'yup';

class FormHelper {
  private getYupType = (type: string) => {
    switch (type) {
      case 'boolean':
        return Yup.bool();
      case 'multichoice':
        return Yup.array().of(Yup.string());
      default:
        return Yup.string();
    }
  };

  getValidationSchema(job: Frontier.Job): Record<string, any> {
    const shape: Record<string, any> = {};

    job.sections.forEach(section => {
      section.content.forEach(content => {
        shape[content.id] = this.getYupType(content.type);
        if (content.metadata.format === 'number') {
          shape[content.id] = Yup.number();
        }
        if (content.metadata.required) {
          if (content.type === 'multichoice') {
            shape[content.id] = shape[content.id]
              .min(1)
              .required('You need to select at least one');
          } else {
            shape[content.id] = shape[content.id].required('Required');
          }
        }
        if (content.metadata.pattern) {
          shape[content.id] = shape[content.id].matches(
            content.metadata.pattern,
            'Wrong format',
          );
        }
      });
    });

    console.log('Validation Shape', shape);

    return Yup.object().shape(shape);
  }
}

export default new FormHelper();
