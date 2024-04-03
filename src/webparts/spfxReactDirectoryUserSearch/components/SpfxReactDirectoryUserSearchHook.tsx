import * as React from 'react';

import { ISpfxReactDirectoryUserSearchProps } from "./ISpfxReactDirectoryUserSearchProps"
import styles from './SpfxReactDirectoryUserSearchHook.module.scss';



const SpfxReactDirectoryUserSearchHook:React.FC<ISpfxReactDirectoryUserSearchProps> = (props)=>{
return (
  <div className={styles.directory}>
    <h1>Hello</h1>
  </div>
);

}
export default SpfxReactDirectoryUserSearchHook