export interface IconProps {
    width: string;
    height: string;
    color: string;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}