import { useState } from "react";

interface IconProps {
    iconNameOutline: React.ElementType;
    iconNameFilled: React.ElementType;
    size?: number;
    stroke?: number;
    color?: string;
    className?: string;
    hovered?: boolean;
}

export function Icon({
    iconNameOutline: OutlineIcon,
    iconNameFilled: FilledIcon,
    size = 20,
    stroke = 1.8,
    color = "black",
    className = "",
    hovered = false,
}: IconProps) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const IconToRender = isHovered || hovered ? FilledIcon : OutlineIcon;

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            <IconToRender size={size} stroke={stroke} color={color} />
        </div>
    );
}
