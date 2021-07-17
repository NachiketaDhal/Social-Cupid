import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface ISideBarProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  text: string;
}
