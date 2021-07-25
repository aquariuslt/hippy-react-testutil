// override css properties
import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a missing property
    WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    '--theme-color'?: 'black' | 'white';

    style: any;

    // ...or allow any other property
    [index: string]: any;
  }
}