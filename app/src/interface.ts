import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface ISideBarProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  text: string;
}

export interface IFormProps {
  label: string;
}

export interface IButtonText {
  text: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface IRegisterForm {
  username: string;
  password: string;
  cPassword: string;
  image: string;
}
