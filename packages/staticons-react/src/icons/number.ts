
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.25 20.248a.75.75 0 0 1-.69-.806l.248-3.23H9.543l-.257 3.346a.75.75 0 1 1-1.496-.116l.249-3.23H4.5a.75.75 0 0 1 0-1.5h3.654l.417-5.423H4.5a.75.75 0 0 1 0-1.5h4.187l.257-3.347a.75.75 0 0 1 1.496.116l-.249 3.23h4.265l.258-3.346a.75.75 0 1 1 1.495.116l-.248 3.23H19.5a.75.75 0 0 1 0 1.5h-3.655l-.417 5.423H19.5a.75.75 0 0 1 0 1.5h-4.187l-.258 3.347a.75.75 0 0 1-.805.69Zm-4.174-10.96-.417 5.423h4.265l.417-5.422h-4.265Z","clip-rule":"evenodd"}]]

/**
 * @component @name Number
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMjUgMjAuMjQ4YS43NS43NSAwIDAgMS0uNjktLjgwNmwuMjQ4LTMuMjNIOS41NDNsLS4yNTcgMy4zNDZhLjc1Ljc1IDAgMSAxLTEuNDk2LS4xMTZsLjI0OS0zLjIzSDQuNWEuNzUuNzUgMCAwIDEgMC0xLjVoMy42NTRsLjQxNy01LjQyM0g0LjVhLjc1Ljc1IDAgMCAxIDAtMS41aDQuMTg3bC4yNTctMy4zNDdhLjc1Ljc1IDAgMCAxIDEuNDk2LjExNmwtLjI0OSAzLjIzaDQuMjY1bC4yNTgtMy4zNDZhLjc1Ljc1IDAgMSAxIDEuNDk1LjExNmwtLjI0OCAzLjIzSDE5LjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0zLjY1NWwtLjQxNyA1LjQyM0gxOS41YS43NS43NSAwIDAgMSAwIDEuNWgtNC4xODdsLS4yNTggMy4zNDdhLjc1Ljc1IDAgMCAxLS44MDUuNjlabS00LjE3NC0xMC45Ni0uNDE3IDUuNDIzaDQuMjY1bC40MTctNS40MjJoLTQuMjY1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Number = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-number',
        'staticon-Number',
        className
      ),
      ...props,
    })
);
Number.displayName = 'Number'

export default Number;
