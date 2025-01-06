import {
  Article,
  CalendarMonth,
  CampaignOutlined,
  Home,
  School,
  TrendingUpOutlined,
} from "@mui/icons-material";

export const NAVDATA = [
  {
    text: "Dashboard",
    icon: <Home />,
    href: "/",
  },
  {
    text: "Schedule",
    icon: <CalendarMonth />,
    href: "/",
  },
  {
    text: "Courses",
    icon: <Article />,
    href: "/",
  },
  {
    text: "Gradebook",
    icon: <School />,
    href: "/",
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
    href: "/",
  },
  {
    text: "Announcement",
    icon: <CampaignOutlined />,
    href: "/announcments",
  },
];
