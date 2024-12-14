import { IoHome } from "react-icons/io5";
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { BiSolidMoviePlay } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const navigation = [
    {
        label : "TV Shows",
        href : "tv",
        icon : <TbDeviceTvOldFilled />
    },
    {
        label : "Movie",
        href : "movie",
        icon : <BiSolidMoviePlay />
    },
]

export const mobileNavigation = [
    {
        label: 'Home',
        href: '/',
        icon : <IoHome />
    },
    {
        label: 'Search',
        href: '/search',
        icon : <HiMagnifyingGlass />
    },
    ...navigation
]