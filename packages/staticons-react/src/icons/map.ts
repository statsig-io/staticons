
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.832 5.339 9.83 17.182l4.337 1.479V6.817L9.832 5.34Zm5.835 1.478v11.844l4.163-1.42a.25.25 0 0 0 .169-.237l.002-11.315a.25.25 0 0 0-.33-.237l-4.004 1.365ZM8.33 17.183l.002-11.844L4.17 6.76a.25.25 0 0 0-.17.237l-.002 11.315a.25.25 0 0 0 .33.237l4.002-1.365Zm.026-13.437a2.26 2.26 0 0 1 1.453 0l4.866 1.66a.75.75 0 0 0 .484 0l4.027-1.374a1.75 1.75 0 0 1 2.315 1.657L21.5 17.004a1.75 1.75 0 0 1-1.185 1.656l-4.67 1.594a2.26 2.26 0 0 1-1.453 0l-4.869-1.66a.75.75 0 0 0-.484 0l-4.025 1.373a1.75 1.75 0 0 1-2.315-1.656L2.5 6.996A1.75 1.75 0 0 1 3.685 5.34l4.671-1.594Z","clip-rule":"evenodd"}]]

/**
 * @component @name Map
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS44MzIgNS4zMzkgOS44MyAxNy4xODJsNC4zMzcgMS40NzlWNi44MTdMOS44MzIgNS4zNFptNS44MzUgMS40Nzh2MTEuODQ0bDQuMTYzLTEuNDJhLjI1LjI1IDAgMCAwIC4xNjktLjIzN2wuMDAyLTExLjMxNWEuMjUuMjUgMCAwIDAtLjMzLS4yMzdsLTQuMDA0IDEuMzY1Wk04LjMzIDE3LjE4M2wuMDAyLTExLjg0NEw0LjE3IDYuNzZhLjI1LjI1IDAgMCAwLS4xNy4yMzdsLS4wMDIgMTEuMzE1YS4yNS4yNSAwIDAgMCAuMzMuMjM3bDQuMDAyLTEuMzY1Wm0uMDI2LTEzLjQzN2EyLjI2IDIuMjYgMCAwIDEgMS40NTMgMGw0Ljg2NiAxLjY2YS43NS43NSAwIDAgMCAuNDg0IDBsNC4wMjctMS4zNzRhMS43NSAxLjc1IDAgMCAxIDIuMzE1IDEuNjU3TDIxLjUgMTcuMDA0YTEuNzUgMS43NSAwIDAgMS0xLjE4NSAxLjY1NmwtNC42NyAxLjU5NGEyLjI2IDIuMjYgMCAwIDEtMS40NTMgMGwtNC44NjktMS42NmEuNzUuNzUgMCAwIDAtLjQ4NCAwbC00LjAyNSAxLjM3M2ExLjc1IDEuNzUgMCAwIDEtMi4zMTUtMS42NTZMMi41IDYuOTk2QTEuNzUgMS43NSAwIDAgMSAzLjY4NSA1LjM0bDQuNjcxLTEuNTk0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Map = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-map',
        'staticon-Map',
        className
      ),
      ...props,
    })
);
Map.displayName = 'Map'

export default Map;
