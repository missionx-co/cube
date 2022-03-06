import FigmaIcon from "@icons/figma";
import BarChartAlt from "@icons/bar-chart-alt";
import AirplayIcon from "@icons/airplay";

export const bookmarks = [
  {
    id: "figma-version",
    href: "https://www.untitledui.com/",
    icon: <FigmaIcon />,
    text: "Buy Figma version",
  },
  {
    id: "application-ui-kit",
    href: "/application",
    icon: <BarChartAlt />,
    text: "Application UI Kit",
  },
  {
    id: "marketing-ui-kit",
    href: "/marketing",
    icon: <AirplayIcon />,
    text: "Marketing UI Kit",
  },
];

export const docs = [
  {
    id: "getting-started",
    text: "Getting Started",
    children: [
      {
        id: "installation",
        text: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    id: "foundation",
    text: "Foundation",
    children: [
      {
        id: "colors",
        text: "Colors",
        href: "/colors",
      },
      {
        id: "typography",
        text: "Typography",
        href: "/typography",
      },
      {
        id: "shadow",
        text: "Shadow",
        href: "/shadow",
      },
    ],
  },
  {
    id: "components",
    text: "Components",
    children: [
      {
        id: "button",
        text: "Buttons",
        href: "/components/buttons",
      },
      {
        id: "button-groups",
        text: "Button groups",
        href: "/components/button-groups",
      },
      {
        id: "badges",
        text: "Badges",
        href: "/components/badges",
      },
      {
        id: "inputs",
        text: "Inputs",
        href: "/components/inputs",
      },
      {
        id: "dropdowns",
        text: "Dropdowns",
        href: "/components/dropdowns",
      },
      {
        id: "toggles",
        text: "Toggles",
        href: "/components/toggles",
      },
      {
        id: "checkboxes",
        text: "Checkboxes",
        href: "/components/checkboxes",
      },
      {
        id: "checkbox-groups",
        text: "Checkbox groups",
        href: "/components/checkbox-groups",
      },
      {
        id: "avatars",
        text: "Avatars",
        href: "/components/avatars",
      },
      {
        id: "tooltips",
        text: "Tooltips",
        href: "/components/tooltips",
      },
      {
        id: "progress-indicators",
        text: "Progress indicators",
        href: "/components/progress-indicators",
      },
      {
        id: "sliders",
        text: "Sliders",
        href: "/components/sliders",
      },
      {
        id: "modals",
        text: "Modals",
        href: "/components/modals",
      },
      {
        id: "charts",
        text: "Charts",
        href: "/components/charts",
      },
      {
        id: "pagination",
        text: "Pagination",
        href: "/components/pagination",
      },
      {
        id: "tables",
        text: "Tables",
        href: "/components/tables",
      },
    ],
  },
];
