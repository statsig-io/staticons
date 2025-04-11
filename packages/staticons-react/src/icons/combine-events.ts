
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.499 14.75a2.75 2.75 0 0 0 2.75 2.75H16v.752c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25V9.256c0-.69.56-1.25 1.25-1.25h.749v6.743Zm1.5-6.744v6.743c0 .69.56 1.25 1.25 1.25H16V9.256c0-.69-.56-1.25-1.25-1.25H8Zm9.503 7.993V9.256a2.75 2.75 0 0 0-2.75-2.75H7.998v-.757c0-.69.56-1.25 1.25-1.25h9c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25h-.747Zm0 1.5h.748A2.75 2.75 0 0 0 21 14.75v-9A2.75 2.75 0 0 0 18.25 3H9.249a2.75 2.75 0 0 0-2.75 2.75v.757H5.75A2.75 2.75 0 0 0 3 9.256v8.996a2.75 2.75 0 0 0 2.75 2.75h9.002a2.75 2.75 0 0 0 2.75-2.75V17.5ZM9.248 12a.75.75 0 0 1 .75-.75h1.25V10a.75.75 0 0 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5h-1.252v1.252a.75.75 0 0 1-1.5 0V12.75H10a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi40OTkgMTQuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NUgxNnYuNzUyYzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNWgtOWMtLjY5IDAtMS4yNS0uNTYtMS4yNS0xLjI1VjkuMjU2YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aC43NDl2Ni43NDNabTEuNS02Ljc0NHY2Ljc0M2MwIC42OS41NiAxLjI1IDEuMjUgMS4yNUgxNlY5LjI1NmMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVIOFptOS41MDMgNy45OTNWOS4yNTZhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NUg3Ljk5OHYtLjc1N2MwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWg5Yy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1djljMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1aC0uNzQ3Wm0wIDEuNWguNzQ4QTIuNzUgMi43NSAwIDAgMCAyMSAxNC43NXYtOUEyLjc1IDIuNzUgMCAwIDAgMTguMjUgM0g5LjI0OWEyLjc1IDIuNzUgMCAwIDAtMi43NSAyLjc1di43NTdINS43NUEyLjc1IDIuNzUgMCAwIDAgMyA5LjI1NnY4Ljk5NmEyLjc1IDIuNzUgMCAwIDAgMi43NSAyLjc1aDkuMDAyYTIuNzUgMi43NSAwIDAgMCAyLjc1LTIuNzVWMTcuNVpNOS4yNDggMTJhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMS4yNVYxMGEuNzUuNzUgMCAwIDEgMS41IDB2MS4yNUgxNGEuNzUuNzUgMCAwIDEgMCAxLjVoLTEuMjUydjEuMjUyYS43NS43NSAwIDAgMS0xLjUgMFYxMi43NUgxMGEuNzUuNzUgMCAwIDEtLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-events',
        'staticon-CombineEvents',
        className
      ),
      ...props,
    })
);
CombineEvents.displayName = 'CombineEvents'

export default CombineEvents;
