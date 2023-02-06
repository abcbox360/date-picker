import { defaultTheme } from "../../utils/themes";
const Theme = defaultTheme;

export const selectedStyle = (props) =>
  props.isSelected &&
  `
background: ${Theme.color_green};
color: ${Theme.color_white};
`;
