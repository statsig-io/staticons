
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.002 5.749c-.69 0-1.25.56-1.25 1.25L4.75 17c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25l.003-7.499c0-.69-.56-1.25-1.25-1.25H12.49a1.75 1.75 0 0 1-1.37-.66L9.73 5.843a.25.25 0 0 0-.196-.094H6.002Zm-2.75 1.25a2.75 2.75 0 0 1 2.75-2.75h3.532a1.75 1.75 0 0 1 1.37.66l1.391 1.748a.25.25 0 0 0 .196.095H18a2.75 2.75 0 0 1 2.75 2.75l-.002 7.5a2.75 2.75 0 0 1-2.75 2.75h-12A2.75 2.75 0 0 1 3.249 17l.003-10.002Z","clip-rule":"evenodd"}]]

/**
 * @component @name Project
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wMDIgNS43NDljLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1TDQuNzUgMTdjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVoMTJjLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1bC4wMDMtNy40OTljMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1SDEyLjQ5YTEuNzUgMS43NSAwIDAgMS0xLjM3LS42Nkw5LjczIDUuODQzYS4yNS4yNSAwIDAgMC0uMTk2LS4wOTRINi4wMDJabS0yLjc1IDEuMjVhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgzLjUzMmExLjc1IDEuNzUgMCAwIDEgMS4zNy42NmwxLjM5MSAxLjc0OGEuMjUuMjUgMCAwIDAgLjE5Ni4wOTVIMThhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NWwtLjAwMiA3LjVhMi43NSAyLjc1IDAgMCAxLTIuNzUgMi43NWgtMTJBMi43NSAyLjc1IDAgMCAxIDMuMjQ5IDE3bC4wMDMtMTAuMDAyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Project = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-project',
        'staticon-Project',
        className
      ),
      ...props,
    })
);
Project.displayName = 'Project'

export default Project;
