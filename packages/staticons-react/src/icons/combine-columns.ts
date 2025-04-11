
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.737 18c0 .69-.56 1.25-1.25 1.25H5.748c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h2.74c.69 0 1.25.56 1.25 1.25v.576a5.878 5.878 0 0 0 0 10.849V18Zm1.5-.173V18a2.75 2.75 0 0 1-2.75 2.75H5.748A2.75 2.75 0 0 1 2.998 18V6a2.75 2.75 0 0 1 2.75-2.75h2.74A2.75 2.75 0 0 1 11.237 6v.173a5.93 5.93 0 0 1 1.526 0V6a2.75 2.75 0 0 1 2.75-2.75h2.739A2.75 2.75 0 0 1 21.003 6v12a2.75 2.75 0 0 1-2.75 2.75h-2.74a2.75 2.75 0 0 1-2.75-2.75v-.173a5.931 5.931 0 0 1-1.526 0Zm3.027-.402V18c0 .69.56 1.25 1.25 1.25h2.739c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-2.74c-.69 0-1.25.56-1.25 1.25v.576a5.878 5.878 0 0 1 0 10.849ZM7.624 12a4.376 4.376 0 1 1 8.753 0 4.376 4.376 0 0 1-8.753 0Zm5.126-2.45a.75.75 0 0 0-1.5 0v1.699H9.551a.75.75 0 0 0 0 1.5h1.7v1.7a.75.75 0 0 0 1.5 0v-1.7h1.699a.75.75 0 0 0 0-1.5h-1.7V9.551Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineColumns
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS43MzcgMThjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDUuNzQ4Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjVWNmMwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWgyLjc0Yy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1di41NzZhNS44NzggNS44NzggMCAwIDAgMCAxMC44NDlWMThabTEuNS0uMTczVjE4YTIuNzUgMi43NSAwIDAgMS0yLjc1IDIuNzVINS43NDhBMi43NSAyLjc1IDAgMCAxIDIuOTk4IDE4VjZhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgyLjc0QTIuNzUgMi43NSAwIDAgMSAxMS4yMzcgNnYuMTczYTUuOTMgNS45MyAwIDAgMSAxLjUyNiAwVjZhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgyLjczOUEyLjc1IDIuNzUgMCAwIDEgMjEuMDAzIDZ2MTJhMi43NSAyLjc1IDAgMCAxLTIuNzUgMi43NWgtMi43NGEyLjc1IDIuNzUgMCAwIDEtMi43NS0yLjc1di0uMTczYTUuOTMxIDUuOTMxIDAgMCAxLTEuNTI2IDBabTMuMDI3LS40MDJWMThjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVoMi43MzljLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1VjZjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1aC0yLjc0Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYuNTc2YTUuODc4IDUuODc4IDAgMCAxIDAgMTAuODQ5Wk03LjYyNCAxMmE0LjM3NiA0LjM3NiAwIDEgMSA4Ljc1MyAwIDQuMzc2IDQuMzc2IDAgMCAxLTguNzUzIDBabTUuMTI2LTIuNDVhLjc1Ljc1IDAgMCAwLTEuNSAwdjEuNjk5SDkuNTUxYS43NS43NSAwIDAgMCAwIDEuNWgxLjd2MS43YS43NS43NSAwIDAgMCAxLjUgMHYtMS43aDEuNjk5YS43NS43NSAwIDAgMCAwLTEuNWgtMS43VjkuNTUxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineColumns = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-columns',
        'staticon-CombineColumns',
        className
      ),
      ...props,
    })
);
CombineColumns.displayName = 'CombineColumns'

export default CombineColumns;
