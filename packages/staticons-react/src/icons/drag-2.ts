
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.148 2.728a1.625 1.625 0 0 0-2.298 0L7.026 4.552a.625.625 0 0 0 .884.883l1.465-1.464v5.507H3.869l1.57-1.571a.625.625 0 1 0-.883-.884l-1.83 1.829a1.625 1.625 0 0 0 0 2.298l1.825 1.823a.625.625 0 1 0 .883-.884l-1.361-1.361h5.302v5.3L7.907 14.56a.625.625 0 1 0-.884.884l1.829 1.829a1.625 1.625 0 0 0 2.298 0l1.823-1.824a.625.625 0 0 0-.884-.884l-1.464 1.464v-5.301h5.301l-1.366 1.366a.625.625 0 0 0 .884.883l1.829-1.828a1.625 1.625 0 0 0 0-2.298l-1.824-1.824a.625.625 0 0 0-.884.884l1.567 1.567h-5.507V3.972l1.468 1.468a.625.625 0 0 0 .884-.883l-1.829-1.83Z","clip-rule":"evenodd"}]]

/**
 * @component @name Drag2
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTQ4IDIuNzI4YTEuNjI1IDEuNjI1IDAgMCAwLTIuMjk4IDBMNy4wMjYgNC41NTJhLjYyNS42MjUgMCAwIDAgLjg4NC44ODNsMS40NjUtMS40NjR2NS41MDdIMy44NjlsMS41Ny0xLjU3MWEuNjI1LjYyNSAwIDEgMC0uODgzLS44ODRsLTEuODMgMS44MjlhMS42MjUgMS42MjUgMCAwIDAgMCAyLjI5OGwxLjgyNSAxLjgyM2EuNjI1LjYyNSAwIDEgMCAuODgzLS44ODRsLTEuMzYxLTEuMzYxaDUuMzAydjUuM0w3LjkwNyAxNC41NmEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4NGwxLjgyOSAxLjgyOWExLjYyNSAxLjYyNSAwIDAgMCAyLjI5OCAwbDEuODIzLTEuODI0YS42MjUuNjI1IDAgMCAwLS44ODQtLjg4NGwtMS40NjQgMS40NjR2LTUuMzAxaDUuMzAxbC0xLjM2NiAxLjM2NmEuNjI1LjYyNSAwIDAgMCAuODg0Ljg4M2wxLjgyOS0xLjgyOGExLjYyNSAxLjYyNSAwIDAgMCAwLTIuMjk4bC0xLjgyNC0xLjgyNGEuNjI1LjYyNSAwIDAgMC0uODg0Ljg4NGwxLjU2NyAxLjU2N2gtNS41MDdWMy45NzJsMS40NjggMS40NjhhLjYyNS42MjUgMCAwIDAgLjg4NC0uODgzbC0xLjgyOS0xLjgzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag2 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag2',
        'staticon-Drag2',
        className
      ),
      ...props,
    })
);
Drag2.displayName = 'Drag2'

export default Drag2;
