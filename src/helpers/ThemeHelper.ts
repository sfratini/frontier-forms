import { DefaultTheme } from 'styled-components';

class ThemeHelper {
  makeTheme(theme: Frontier.Theme): DefaultTheme {
    return {
      background_color: theme.background_color,
      primary_color: theme.primary_color,
      secondary_color: theme.secondary_color,
      text_color: theme.text_color,
    };
  }
}

export default new ThemeHelper();
