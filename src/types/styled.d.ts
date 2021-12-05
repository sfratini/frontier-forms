// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary_color?: string;
    secondary_color?: string;
    background_color?: string;
    text_color?: string;
  }
}
