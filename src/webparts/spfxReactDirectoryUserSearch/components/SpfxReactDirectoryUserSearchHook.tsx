import * as React from 'react';
import { WebPartTitle } from "@pnp/spfx-controls-react";

import { ISpfxReactDirectoryUserSearchProps } from "./ISpfxReactDirectoryUserSearchProps"
import styles from './SpfxReactDirectoryUserSearchHook.module.scss';
import { SearchBox } from 'office-ui-fabric-react';
import * as strings from 'SpfxReactDirectoryUserSearchWebPartStrings';



const SpfxReactDirectoryUserSearchHook:React.FC<ISpfxReactDirectoryUserSearchProps> = (props)=>{
return (
  <div className={styles.directory}>
    <WebPartTitle
      displayMode={props.displayMode}
      title={props.title}
      updateProperty={props.updateProperty}
    />
    <div className={styles.searchBox}>
      <SearchBox
        placeholder={strings.SearchPlaceHolder}
        className={styles.searchTextBox}
        onSearch={_searchUsers}
        value={state.searchText}
        onChange={(ev, newVal) => _searchBoxChanged(newVal)}
      />
    </div>
    <h1>Hello</h1>
  </div>
);

}
export default SpfxReactDirectoryUserSearchHook