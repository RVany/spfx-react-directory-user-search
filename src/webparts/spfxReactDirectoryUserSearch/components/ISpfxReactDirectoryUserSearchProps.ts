import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
export interface ISpfxReactDirectoryUserSearchProps {
  title: string;
  displayMode: DisplayMode;
  context: WebPartContext;
  searchFirstName: boolean;
  updateProperty: (value: string) => void;
  searchProps?: string;
  clearTextSearchProps?: string;
  pageSize?: number;
  useSpaceBetween?: boolean;
}
