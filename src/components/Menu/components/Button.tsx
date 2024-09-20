import { useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import { colors } from "@/globals/styles/colors";

interface MenuButtonProps {
    title: string;
    iconNameOutline: React.ElementType;
    iconNameFilled: React.ElementType;
}

export function MenuButton({ title, iconNameOutline, iconNameFilled }: MenuButtonProps) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const iconColor = isHovered ? colors.primary.dark : colors.primary.default;

    return (
        <button className="flex items-center w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <Icon
                iconNameOutline={iconNameOutline}
                iconNameFilled={iconNameFilled}
                size={18}
                className="mr-2"
                color={iconColor}
                hovered={isHovered}
            />

            <div className={`text-[13px] leading-none ${isHovered ? 'text-primary-dark font-semibold' : 'text-neutral-700 font-medium'}`}>{title}</div>

        </button>
    );
}
