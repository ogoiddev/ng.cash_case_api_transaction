import 'styled-components';
import light from './theme/light';

const myThemeType = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends myThemeType {}
}
