
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.752 2.625a.75.75 0 0 1 .75.75v11.35c0 .691.56 1.25 1.25 1.25h6.546a4.757 4.757 0 0 1 1.707-4.252 1.256 1.256 0 0 1-.283-.227l-3.27-3.508-3.008 5.227a.75.75 0 1 1-1.3-.748l3.176-5.52a1.25 1.25 0 0 1 1.998-.23l3.27 3.51 3.008-5.228a.75.75 0 0 1 1.3.748l-2.877 5.001a4.767 4.767 0 0 1 4.871 7.457l1.889 1.889a.75.75 0 0 1-1.061 1.06l-1.889-1.888a4.767 4.767 0 0 1-7.094-1.79H4.753a2.75 2.75 0 0 1-2.75-2.75V3.376a.75.75 0 0 1 .75-.75Zm13.279 9.516a3.267 3.267 0 1 0 0 6.533 3.267 3.267 0 0 0 0-6.533Z","clip-rule":"evenodd"}]]

/**
 * @component @name MetricsExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi43NTIgMi42MjVhLjc1Ljc1IDAgMCAxIC43NS43NXYxMS4zNWMwIC42OTEuNTYgMS4yNSAxLjI1IDEuMjVoNi41NDZhNC43NTcgNC43NTcgMCAwIDEgMS43MDctNC4yNTIgMS4yNTYgMS4yNTYgMCAwIDEtLjI4My0uMjI3bC0zLjI3LTMuNTA4LTMuMDA4IDUuMjI3YS43NS43NSAwIDEgMS0xLjMtLjc0OGwzLjE3Ni01LjUyYTEuMjUgMS4yNSAwIDAgMSAxLjk5OC0uMjNsMy4yNyAzLjUxIDMuMDA4LTUuMjI4YS43NS43NSAwIDAgMSAxLjMuNzQ4bC0yLjg3NyA1LjAwMWE0Ljc2NyA0Ljc2NyAwIDAgMSA0Ljg3MSA3LjQ1N2wxLjg4OSAxLjg4OWEuNzUuNzUgMCAwIDEtMS4wNjEgMS4wNmwtMS44ODktMS44ODhhNC43NjcgNC43NjcgMCAwIDEtNy4wOTQtMS43OUg0Ljc1M2EyLjc1IDIuNzUgMCAwIDEtMi43NS0yLjc1VjMuMzc2YS43NS43NSAwIDAgMSAuNzUtLjc1Wm0xMy4yNzkgOS41MTZhMy4yNjcgMy4yNjcgMCAxIDAgMCA2LjUzMyAzLjI2NyAzLjI2NyAwIDAgMCAwLTYuNTMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const MetricsExplorer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-metrics-explorer',
        'staticon-MetricsExplorer',
        className
      ),
      ...props,
    })
);
MetricsExplorer.displayName = 'MetricsExplorer'

export default MetricsExplorer;
