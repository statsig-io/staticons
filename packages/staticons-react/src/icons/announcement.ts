
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.498 8.344v3.478c0 .69.56 1.25 1.25 1.25H8V7.093H4.748c-.69 0-1.25.56-1.25 1.25ZM9.5 7.085v5.995a8.75 8.75 0 0 1 3.454.88l3.94 1.925a.25.25 0 0 0 .36-.225V4.505a.25.25 0 0 0-.36-.225l-3.94 1.925a8.75 8.75 0 0 1-3.454.88ZM1.998 8.344v3.478a2.75 2.75 0 0 0 2.385 2.725C4.7 16.62 5.41 18.493 6.376 20.33c.303.576.9.919 1.532.919h2.563c.947 0 1.536-1.002 1.116-1.828-.869-1.705-1.598-3.395-1.937-4.829.918.068 1.816.31 2.646.716l3.94 1.926a1.75 1.75 0 0 0 2.518-1.573v-1.879a3.73 3.73 0 0 0 0-7.397v-1.88a1.75 1.75 0 0 0-2.518-1.572l-3.94 1.926a7.25 7.25 0 0 1-3.183.736H4.748a2.75 2.75 0 0 0-2.75 2.75Zm16.756-.439v4.355a2.23 2.23 0 0 0 0-4.355ZM7.704 19.63c-.87-1.649-1.495-3.286-1.797-5.059H8.11c.324 1.614 1.095 3.44 1.96 5.177H7.909a.229.229 0 0 1-.205-.118Z","clip-rule":"evenodd"}]]

/**
 * @component @name Announcement
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy40OTggOC4zNDR2My40NzhjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVIOFY3LjA5M0g0Ljc0OGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjVaTTkuNSA3LjA4NXY1Ljk5NWE4Ljc1IDguNzUgMCAwIDEgMy40NTQuODhsMy45NCAxLjkyNWEuMjUuMjUgMCAwIDAgLjM2LS4yMjVWNC41MDVhLjI1LjI1IDAgMCAwLS4zNi0uMjI1bC0zLjk0IDEuOTI1YTguNzUgOC43NSAwIDAgMS0zLjQ1NC44OFpNMS45OTggOC4zNDR2My40NzhhMi43NSAyLjc1IDAgMCAwIDIuMzg1IDIuNzI1QzQuNyAxNi42MiA1LjQxIDE4LjQ5MyA2LjM3NiAyMC4zM2MuMzAzLjU3Ni45LjkxOSAxLjUzMi45MTloMi41NjNjLjk0NyAwIDEuNTM2LTEuMDAyIDEuMTE2LTEuODI4LS44NjktMS43MDUtMS41OTgtMy4zOTUtMS45MzctNC44MjkuOTE4LjA2OCAxLjgxNi4zMSAyLjY0Ni43MTZsMy45NCAxLjkyNmExLjc1IDEuNzUgMCAwIDAgMi41MTgtMS41NzN2LTEuODc5YTMuNzMgMy43MyAwIDAgMCAwLTcuMzk3di0xLjg4YTEuNzUgMS43NSAwIDAgMC0yLjUxOC0xLjU3MmwtMy45NCAxLjkyNmE3LjI1IDcuMjUgMCAwIDEtMy4xODMuNzM2SDQuNzQ4YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzVabTE2Ljc1Ni0uNDM5djQuMzU1YTIuMjMgMi4yMyAwIDAgMCAwLTQuMzU1Wk03LjcwNCAxOS42M2MtLjg3LTEuNjQ5LTEuNDk1LTMuMjg2LTEuNzk3LTUuMDU5SDguMTFjLjMyNCAxLjYxNCAxLjA5NSAzLjQ0IDEuOTYgNS4xNzdINy45MDlhLjIyOS4yMjkgMCAwIDEtLjIwNS0uMTE4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Announcement = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-announcement',
        'staticon-Announcement',
        className
      ),
      ...props,
    })
);
Announcement.displayName = 'Announcement'

export default Announcement;
