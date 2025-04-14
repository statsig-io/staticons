
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.483 6.016v1.578h5.034V6.016a2.517 2.517 0 1 0-5.034 0Zm-1.25 0v1.578H5A2.125 2.125 0 0 0 2.875 9.72v5.906c0 1.174.951 2.125 2.125 2.125h10a2.125 2.125 0 0 0 2.125-2.125V9.72A2.125 2.125 0 0 0 15 7.594h-1.233V6.016a3.767 3.767 0 0 0-7.534 0ZM5 8.844a.875.875 0 0 0-.875.875v5.906c0 .484.392.875.875.875h10a.875.875 0 0 0 .875-.875V9.72A.875.875 0 0 0 15 8.844H5Zm5 5.267a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z","clip-rule":"evenodd"}]]

/**
 * @component @name Private
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40ODMgNi4wMTZ2MS41NzhoNS4wMzRWNi4wMTZhMi41MTcgMi41MTcgMCAxIDAtNS4wMzQgMFptLTEuMjUgMHYxLjU3OEg1QTIuMTI1IDIuMTI1IDAgMCAwIDIuODc1IDkuNzJ2NS45MDZjMCAxLjE3NC45NTEgMi4xMjUgMi4xMjUgMi4xMjVoMTBhMi4xMjUgMi4xMjUgMCAwIDAgMi4xMjUtMi4xMjVWOS43MkEyLjEyNSAyLjEyNSAwIDAgMCAxNSA3LjU5NGgtMS4yMzNWNi4wMTZhMy43NjcgMy43NjcgMCAwIDAtNy41MzQgMFpNNSA4Ljg0NGEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXY1LjkwNmMwIC40ODQuMzkyLjg3NS44NzUuODc1aDEwYS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVY5LjcyQS44NzUuODc1IDAgMCAwIDE1IDguODQ0SDVabTUgNS4yNjdhMS40IDEuNCAwIDEgMCAwLTIuOCAxLjQgMS40IDAgMCAwIDAgMi44WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Private = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-private',
        'staticon-Private',
        className
      ),
      ...props,
    })
);
Private.displayName = 'Private'

export default Private;
