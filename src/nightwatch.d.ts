import { EnhancedPageObject } from 'nightwatch';
import { HomePage } from './pages/Home';

declare module 'nightwatch' {
  export interface ElementCommands {
    waitForElementPresent(selector: string, message?: string): this;
  }

  export type PageObject<T = unknown> = EnhancedPageObject<
    T['commands'][0],
    T['elements']
  >;

  interface NightwatchCustomPageObjects {
    Home(): HomePage;
  }
}
