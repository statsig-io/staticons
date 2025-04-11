
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.127 5a.75.75 0 0 1 .75-.75H5.19a1 1 0 0 1 1 1v4.5a.75.75 0 1 1-1.5 0v-4h-.813a.75.75 0 0 1-.75-.75ZM9.37 6.42a.75.75 0 0 1 .75-.75h10.003a.75.75 0 0 1 0 1.5H10.12a.75.75 0 0 1-.75-.75Zm0 5.571a.75.75 0 0 1 .75-.75h10.003a.75.75 0 0 1 0 1.5H10.12a.75.75 0 0 1-.75-.75Zm.75 4.835a.75.75 0 1 0 0 1.5h10.003a.75.75 0 0 0 0-1.5H10.12Zm-4.368-2.828c-1.09-.445-2.155.129-2.539.866a.75.75 0 0 0 1.33.693.463.463 0 0 1 .228-.175.54.54 0 0 1 .414.005.413.413 0 0 1 .221.269c.025.096.03.262-.179.485-.065.07-.18.17-.37.338a12.25 12.25 0 0 0-.602.555c-.389.39-.903.989-1.004 1.714-.084.602.417 1.003.882 1.003h2.082a.75.75 0 0 0 0-1.5H5.166a6.9 6.9 0 0 1 .151-.159c.17-.17.352-.331.527-.485l.042-.037c.15-.13.318-.278.437-.405.536-.575.695-1.263.534-1.885a1.91 1.91 0 0 0-1.106-1.282Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatListNumbered
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4xMjcgNWEuNzUuNzUgMCAwIDEgLjc1LS43NUg1LjE5YTEgMSAwIDAgMSAxIDF2NC41YS43NS43NSAwIDEgMS0xLjUgMHYtNGgtLjgxM2EuNzUuNzUgMCAwIDEtLjc1LS43NVpNOS4zNyA2LjQyYS43NS43NSAwIDAgMSAuNzUtLjc1aDEwLjAwM2EuNzUuNzUgMCAwIDEgMCAxLjVIMTAuMTJhLjc1Ljc1IDAgMCAxLS43NS0uNzVabTAgNS41NzFhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTAuMDAzYS43NS43NSAwIDAgMSAwIDEuNUgxMC4xMmEuNzUuNzUgMCAwIDEtLjc1LS43NVptLjc1IDQuODM1YS43NS43NSAwIDEgMCAwIDEuNWgxMC4wMDNhLjc1Ljc1IDAgMCAwIDAtMS41SDEwLjEyWm0tNC4zNjgtMi44MjhjLTEuMDktLjQ0NS0yLjE1NS4xMjktMi41MzkuODY2YS43NS43NSAwIDAgMCAxLjMzLjY5My40NjMuNDYzIDAgMCAxIC4yMjgtLjE3NS41NC41NCAwIDAgMSAuNDE0LjAwNS40MTMuNDEzIDAgMCAxIC4yMjEuMjY5Yy4wMjUuMDk2LjAzLjI2Mi0uMTc5LjQ4NS0uMDY1LjA3LS4xOC4xNy0uMzcuMzM4YTEyLjI1IDEyLjI1IDAgMCAwLS42MDIuNTU1Yy0uMzg5LjM5LS45MDMuOTg5LTEuMDA0IDEuNzE0LS4wODQuNjAyLjQxNyAxLjAwMy44ODIgMS4wMDNoMi4wODJhLjc1Ljc1IDAgMCAwIDAtMS41SDUuMTY2YTYuOSA2LjkgMCAwIDEgLjE1MS0uMTU5Yy4xNy0uMTcuMzUyLS4zMzEuNTI3LS40ODVsLjA0Mi0uMDM3Yy4xNS0uMTMuMzE4LS4yNzguNDM3LS40MDUuNTM2LS41NzUuNjk1LTEuMjYzLjUzNC0xLjg4NWExLjkxIDEuOTEgMCAwIDAtMS4xMDYtMS4yODJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatListNumbered = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-list-numbered',
        'staticon-FormatListNumbered',
        className
      ),
      ...props,
    })
);
FormatListNumbered.displayName = 'FormatListNumbered'

export default FormatListNumbered;
