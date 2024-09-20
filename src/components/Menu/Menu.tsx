"use client";

import { MenuButton } from "./components/Button";
import { IconLayoutDashboard, IconLayoutDashboardFilled, IconBookmarks, IconBookmarksFilled, IconFolder, IconFolderFilled, IconCircleArrowDown, IconCircleArrowDownFilled, IconBriefcase2, IconBriefcase2Filled, IconBook, IconBookFilled } from '@tabler/icons-react';

export function Menu() {
    return (
        <nav className="h-screen bg-white flex flex-col justify-between pt-8 pb-5 px-6">
            <div>
                <img src="/assets/synchronia-logo.svg" alt="Icon" className="w-full" />

                <div>
                    <h6 className="text-xs font-medium text-gray-500 mt-8 mb-4">Menu</h6>

                    <div className="flex flex-col gap-5">
                        <MenuButton title={'Dashboard'} iconNameOutline={IconLayoutDashboard} iconNameFilled={IconLayoutDashboardFilled} />
                        <MenuButton title={'Courses'} iconNameOutline={IconBookmarks} iconNameFilled={IconBookmarksFilled} />
                        <MenuButton title={'Projects'} iconNameOutline={IconFolder} iconNameFilled={IconFolderFilled} />
                        <MenuButton title={'Download CV'} iconNameOutline={IconCircleArrowDown} iconNameFilled={IconCircleArrowDownFilled} />
                        <MenuButton title={'Synchronia Docs'} iconNameOutline={IconBriefcase2} iconNameFilled={IconBriefcase2Filled} />
                        <MenuButton title={'Verses'} iconNameOutline={IconBook} iconNameFilled={IconBookFilled} />
                    </div>

                </div>
            </div>
            <button>
                <img src="/assets/chat-me.png" alt="Icon" className="w-full" />
            </button>
        </nav>
    );
}