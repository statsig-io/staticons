
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.504 3.776a2.75 2.75 0 0 0-2.75 2.75v10.948a2.75 2.75 0 0 0 2.75 2.75h13a2.75 2.75 0 0 0 2.75-2.75V6.526a2.75 2.75 0 0 0-2.75-2.75h-13Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v10.948c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25V6.526Zm9.603 1.443a.75.75 0 0 0-1.449-.389l-2.266 8.46a.75.75 0 0 0 1.449.388l2.266-8.46Zm1.082 1.315a.75.75 0 0 1 1.06 0l2.186 2.186a.75.75 0 0 1 0 1.06l-2.186 2.186a.75.75 0 1 1-1.06-1.06L16.593 12l-1.656-1.655a.75.75 0 0 1 0-1.061Zm-6.94 0a.75.75 0 1 1 1.061 1.06L7.405 12l1.655 1.655A.75.75 0 1 1 8 14.715L5.813 12.53a.75.75 0 0 1 0-1.06l2.185-2.186Z","clip-rule":"evenodd"}]]

/**
 * @component @name Code
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS41MDQgMy43NzZhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NXYxMC45NDhhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWgxM2EyLjc1IDIuNzUgMCAwIDAgMi43NS0yLjc1VjYuNTI2YTIuNzUgMi43NSAwIDAgMC0yLjc1LTIuNzVoLTEzWm0tMS4yNSAyLjc1YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aDEzYy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1djEwLjk0OGMwIC42OS0uNTYgMS4yNS0xLjI1IDEuMjVoLTEzYy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjVWNi41MjZabTkuNjAzIDEuNDQzYS43NS43NSAwIDAgMC0xLjQ0OS0uMzg5bC0yLjI2NiA4LjQ2YS43NS43NSAwIDAgMCAxLjQ0OS4zODhsMi4yNjYtOC40NlptMS4wODIgMS4zMTVhLjc1Ljc1IDAgMCAxIDEuMDYgMGwyLjE4NiAyLjE4NmEuNzUuNzUgMCAwIDEgMCAxLjA2bC0yLjE4NiAyLjE4NmEuNzUuNzUgMCAxIDEtMS4wNi0xLjA2TDE2LjU5MyAxMmwtMS42NTYtMS42NTVhLjc1Ljc1IDAgMCAxIDAtMS4wNjFabS02Ljk0IDBhLjc1Ljc1IDAgMSAxIDEuMDYxIDEuMDZMNy40MDUgMTJsMS42NTUgMS42NTVBLjc1Ljc1IDAgMSAxIDggMTQuNzE1TDUuODEzIDEyLjUzYS43NS43NSAwIDAgMSAwLTEuMDZsMi4xODUtMi4xODZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Code = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-code',
        'staticon-Code',
        className
      ),
      ...props,
    })
);
Code.displayName = 'Code'

export default Code;
