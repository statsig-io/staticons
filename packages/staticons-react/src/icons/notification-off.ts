
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.005 11.82a3 3 0 0 0-.505 1.666v.116a2 2 0 0 0 2 2h2.116c.299 1.44 1.795 2.4 3.384 2.4s3.085-.96 3.384-2.4h1.334l2.223 2.224a.625.625 0 0 0 .884-.884l-1.512-1.512a2 2 0 0 0 1.187-1.828v-.138a3 3 0 0 0-.483-1.632l-.698-1.077a1.499 1.499 0 0 1-.235-.685l-.239-2.735A5.845 5.845 0 0 0 5.292 4.41l-2.22-2.22a.625.625 0 1 0-.883.884L4.65 5.535a5.837 5.837 0 0 0-.452 1.8l-.237 2.719a1.5 1.5 0 0 1-.247.702l-.71 1.065Zm2.62-5.311a4.58 4.58 0 0 0-.18.934l-.238 2.72a2.75 2.75 0 0 1-.452 1.287l-.71 1.065a1.75 1.75 0 0 0-.295.971v.116c0 .415.336.75.75.75h8.968L5.624 6.51Zm9.61 7.843h.265a.75.75 0 0 0 .75-.75v-.138a1.75 1.75 0 0 0-.282-.952l-.698-1.077a2.75 2.75 0 0 1-.432-1.256L14.6 7.444a4.595 4.595 0 0 0-8.41-2.137l9.046 9.045ZM10 16.752c-1.041 0-1.793-.528-2.07-1.15h4.14c-.277.622-1.029 1.15-2.07 1.15Z","clip-rule":"evenodd"}]]

/**
 * @component @name NotificationOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wMDUgMTEuODJhMyAzIDAgMCAwLS41MDUgMS42NjZ2LjExNmEyIDIgMCAwIDAgMiAyaDIuMTE2Yy4yOTkgMS40NCAxLjc5NSAyLjQgMy4zODQgMi40czMuMDg1LS45NiAzLjM4NC0yLjRoMS4zMzRsMi4yMjMgMi4yMjRhLjYyNS42MjUgMCAwIDAgLjg4NC0uODg0bC0xLjUxMi0xLjUxMmEyIDIgMCAwIDAgMS4xODctMS44Mjh2LS4xMzhhMyAzIDAgMCAwLS40ODMtMS42MzJsLS42OTgtMS4wNzdhMS40OTkgMS40OTkgMCAwIDEtLjIzNS0uNjg1bC0uMjM5LTIuNzM1QTUuODQ1IDUuODQ1IDAgMCAwIDUuMjkyIDQuNDFsLTIuMjItMi4yMmEuNjI1LjYyNSAwIDEgMC0uODgzLjg4NEw0LjY1IDUuNTM1YTUuODM3IDUuODM3IDAgMCAwLS40NTIgMS44bC0uMjM3IDIuNzE5YTEuNSAxLjUgMCAwIDEtLjI0Ny43MDJsLS43MSAxLjA2NVptMi42Mi01LjMxMWE0LjU4IDQuNTggMCAwIDAtLjE4LjkzNGwtLjIzOCAyLjcyYTIuNzUgMi43NSAwIDAgMS0uNDUyIDEuMjg3bC0uNzEgMS4wNjVhMS43NSAxLjc1IDAgMCAwLS4yOTUuOTcxdi4xMTZjMCAuNDE1LjMzNi43NS43NS43NWg4Ljk2OEw1LjYyNCA2LjUxWm05LjYxIDcuODQzaC4yNjVhLjc1Ljc1IDAgMCAwIC43NS0uNzV2LS4xMzhhMS43NSAxLjc1IDAgMCAwLS4yODItLjk1MmwtLjY5OC0xLjA3N2EyLjc1IDIuNzUgMCAwIDEtLjQzMi0xLjI1NkwxNC42IDcuNDQ0YTQuNTk1IDQuNTk1IDAgMCAwLTguNDEtMi4xMzdsOS4wNDYgOS4wNDVaTTEwIDE2Ljc1MmMtMS4wNDEgMC0xLjc5My0uNTI4LTIuMDctMS4xNWg0LjE0Yy0uMjc3LjYyMi0xLjAyOSAxLjE1LTIuMDcgMS4xNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const NotificationOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-notification-off',
        'staticon-NotificationOff',
        className
      ),
      ...props,
    })
);
NotificationOff.displayName = 'NotificationOff'

export default NotificationOff;
