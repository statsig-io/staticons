
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M20.624 17.873a2.75 2.75 0 0 1-2.75 2.75H6.126a2.75 2.75 0 0 1-2.75-2.75v-2.112a.75.75 0 0 1 1.5 0v2.112c0 .69.56 1.25 1.25 1.25h11.748c.69 0 1.25-.56 1.25-1.25V6.128c0-.69-.56-1.25-1.25-1.25H6.126c-.69 0-1.25.56-1.25 1.25v2.15a.75.75 0 1 1-1.5 0v-2.15a2.75 2.75 0 0 1 2.75-2.75h11.748a2.75 2.75 0 0 1 2.75 2.75v11.745Zm-3.995-4.987a1.25 1.25 0 0 0 0-1.768l-3.36-3.36a.75.75 0 0 0-1.061 1.06l2.431 2.432H4.126a.75.75 0 0 0 0 1.5h10.517l-2.43 2.43a.75.75 0 1 0 1.06 1.061l3.356-3.355Z","clip-rule":"evenodd"}]]

/**
 * @component @name Source
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNjI0IDE3Ljg3M2EyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMTI2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzV2LTIuMTEyYS43NS43NSAwIDAgMSAxLjUgMHYyLjExMmMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgxMS43NDhjLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1VjYuMTI4YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg2LjEyNmMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2Mi4xNWEuNzUuNzUgMCAxIDEtMS41IDB2LTIuMTVhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NDhhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NXYxMS43NDVabS0zLjk5NS00Ljk4N2ExLjI1IDEuMjUgMCAwIDAgMC0xLjc2OGwtMy4zNi0zLjM2YS43NS43NSAwIDAgMC0xLjA2MSAxLjA2bDIuNDMxIDIuNDMySDQuMTI2YS43NS43NSAwIDAgMCAwIDEuNWgxMC41MTdsLTIuNDMgMi40M2EuNzUuNzUgMCAxIDAgMS4wNiAxLjA2MWwzLjM1Ni0zLjM1NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Source = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-source',
        'staticon-Source',
        className
      ),
      ...props,
    })
);
Source.displayName = 'Source'

export default Source;
