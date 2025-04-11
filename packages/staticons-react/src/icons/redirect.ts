
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M18.348 4.22a.75.75 0 0 1 1.061 0l2.121 2.122a.75.75 0 0 1 0 1.06l-2.12 2.123a.75.75 0 0 1-1.06-1.06l.835-.836h-1.689a5.25 5.25 0 0 0-4.518 2.576l-1.064 1.799 1.064 1.798a5.25 5.25 0 0 0 4.518 2.577h1.694l-.84-.841a.75.75 0 1 1 1.06-1.061l2.121 2.121a.75.75 0 0 1 0 1.06L19.41 19.78a.75.75 0 0 1-1.06-1.06l.84-.841h-1.694a6.75 6.75 0 0 1-5.81-3.313l-.644-1.09-.644 1.09a6.75 6.75 0 0 1-5.81 3.313H3a.75.75 0 0 1 0-1.5h1.588A5.25 5.25 0 0 0 9.106 13.8l1.064-1.798-1.064-1.799a5.25 5.25 0 0 0-4.518-2.576H3a.75.75 0 1 1 0-1.5h1.588a6.75 6.75 0 0 1 5.809 3.312l.644 1.09.645-1.09a6.75 6.75 0 0 1 5.81-3.312h1.699l-.847-.847a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"}]]

/**
 * @component @name Redirect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzQ4IDQuMjJhLjc1Ljc1IDAgMCAxIDEuMDYxIDBsMi4xMjEgMi4xMjJhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtMi4xMiAyLjEyM2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2bC44MzUtLjgzNmgtMS42ODlhNS4yNSA1LjI1IDAgMCAwLTQuNTE4IDIuNTc2bC0xLjA2NCAxLjc5OSAxLjA2NCAxLjc5OGE1LjI1IDUuMjUgMCAwIDAgNC41MTggMi41NzdoMS42OTRsLS44NC0uODQxYS43NS43NSAwIDEgMSAxLjA2LTEuMDYxbDIuMTIxIDIuMTIxYS43NS43NSAwIDAgMSAwIDEuMDZMMTkuNDEgMTkuNzhhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNmwuODQtLjg0MWgtMS42OTRhNi43NSA2Ljc1IDAgMCAxLTUuODEtMy4zMTNsLS42NDQtMS4wOS0uNjQ0IDEuMDlhNi43NSA2Ljc1IDAgMCAxLTUuODEgMy4zMTNIM2EuNzUuNzUgMCAwIDEgMC0xLjVoMS41ODhBNS4yNSA1LjI1IDAgMCAwIDkuMTA2IDEzLjhsMS4wNjQtMS43OTgtMS4wNjQtMS43OTlhNS4yNSA1LjI1IDAgMCAwLTQuNTE4LTIuNTc2SDNhLjc1Ljc1IDAgMSAxIDAtMS41aDEuNTg4YTYuNzUgNi43NSAwIDAgMSA1LjgwOSAzLjMxMmwuNjQ0IDEuMDkuNjQ1LTEuMDlhNi43NSA2Ljc1IDAgMCAxIDUuODEtMy4zMTJoMS42OTlsLS44NDctLjg0N2EuNzUuNzUgMCAwIDEgMC0xLjA2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Redirect = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-redirect',
        'staticon-Redirect',
        className
      ),
      ...props,
    })
);
Redirect.displayName = 'Redirect'

export default Redirect;
