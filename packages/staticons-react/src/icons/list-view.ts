
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.72 6.422a1.547 1.547 0 1 1-3.094 0 1.547 1.547 0 0 1 3.095 0Zm0 5.571a1.547 1.547 0 1 1-3.094 0 1.547 1.547 0 0 1 3.095 0Zm-1.547 7.132a1.547 1.547 0 1 0 0-3.094 1.547 1.547 0 0 0 0 3.094ZM9.666 5.672a.75.75 0 1 0 0 1.5h9.96a.75.75 0 0 0 0-1.5h-9.96Zm-.751 6.321a.75.75 0 0 1 .75-.75h9.96a.75.75 0 0 1 0 1.5h-9.96a.75.75 0 0 1-.75-.75Zm.75 4.835a.75.75 0 0 0 0 1.5h9.96a.75.75 0 1 0 0-1.5h-9.96Z","clip-rule":"evenodd"}]]

/**
 * @component @name ListView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43MiA2LjQyMmExLjU0NyAxLjU0NyAwIDEgMS0zLjA5NCAwIDEuNTQ3IDEuNTQ3IDAgMCAxIDMuMDk1IDBabTAgNS41NzFhMS41NDcgMS41NDcgMCAxIDEtMy4wOTQgMCAxLjU0NyAxLjU0NyAwIDAgMSAzLjA5NSAwWm0tMS41NDcgNy4xMzJhMS41NDcgMS41NDcgMCAxIDAgMC0zLjA5NCAxLjU0NyAxLjU0NyAwIDAgMCAwIDMuMDk0Wk05LjY2NiA1LjY3MmEuNzUuNzUgMCAxIDAgMCAxLjVoOS45NmEuNzUuNzUgMCAwIDAgMC0xLjVoLTkuOTZabS0uNzUxIDYuMzIxYS43NS43NSAwIDAgMSAuNzUtLjc1aDkuOTZhLjc1Ljc1IDAgMCAxIDAgMS41aC05Ljk2YS43NS43NSAwIDAgMS0uNzUtLjc1Wm0uNzUgNC44MzVhLjc1Ljc1IDAgMCAwIDAgMS41aDkuOTZhLjc1Ljc1IDAgMSAwIDAtMS41aC05Ljk2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ListView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-list-view',
        'staticon-ListView',
        className
      ),
      ...props,
    })
);
ListView.displayName = 'ListView'

export default ListView;
