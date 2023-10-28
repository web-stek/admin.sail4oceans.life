import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CircleStackIcon,
  CurrencyEuroIcon,
  BuildingOfficeIcon,
  Cog8ToothIcon
} from "@heroicons/react/24/outline";

export const navigation = [
  {
    name: "dashboard",
    href: "/",
    icon: HomeIcon,
    current: false,
    heading: false,
    isAdmin: false,
  },
  {
    name: "cases",
    href: "/cases",
    icon: FolderIcon,
    current: false,
    heading: false,
    isAdmin: false,
  },
  {
    name: "mandates",
    href: "/mandates",
    icon: BuildingOfficeIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "addressBook",
    href: "/addressbook",
    icon: UsersIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "calendar",
    href: "/calendar",
    icon: CalendarIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "documents",
    href: "/documents",
    icon: DocumentDuplicateIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "records",
    href: "/records",
    icon: CircleStackIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "invoices",
    href: "/invoices",
    icon: CurrencyEuroIcon,
    current: false,
    heading: true,
    isAdmin: false,
  },
  {
    name: "analytics",
    href: "/analytics",
    icon: ChartPieIcon,
    current: false,
    heading: true,
    isAdmin: true,
  },
  {
    name: "admin",
    href: "/admin",
    icon: Cog8ToothIcon,
    current: false,
    heading: true,
    isAdmin: true,
  },
];
