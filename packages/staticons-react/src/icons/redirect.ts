
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.794 1.682a.625.625 0 0 1 .884 0l1.762 1.762a.625.625 0 0 1 0 .884L13.678 6.09a.625.625 0 0 1-.884-.883l.695-.696h-1.11a4.063 4.063 0 0 0-3.515 2.026L8.016 8l.848 1.463a4.064 4.064 0 0 0 3.516 2.026h1.109l-.695-.695a.625.625 0 1 1 .884-.884l1.762 1.762a.625.625 0 0 1 0 .884l-1.762 1.762a.625.625 0 1 1-.884-.884l.695-.695h-1.11a5.314 5.314 0 0 1-4.596-2.649l-.49-.844-.47.813a5.314 5.314 0 0 1-4.598 2.649H1.002a.625.625 0 0 1 0-1.25h1.223c1.45 0 2.789-.772 3.516-2.026L6.57 8l-.83-1.432a4.064 4.064 0 0 0-3.516-2.026H1.002a.625.625 0 1 1 0-1.25h1.223a5.314 5.314 0 0 1 4.597 2.649l.471.813.49-.844a5.314 5.314 0 0 1 4.597-2.649h1.11l-.696-.695a.625.625 0 0 1 0-.884Z","clip-rule":"evenodd"}]]

/**
 * @component @name Redirect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzk0IDEuNjgyYS42MjUuNjI1IDAgMCAxIC44ODQgMGwxLjc2MiAxLjc2MmEuNjI1LjYyNSAwIDAgMSAwIC44ODRMMTMuNjc4IDYuMDlhLjYyNS42MjUgMCAwIDEtLjg4NC0uODgzbC42OTUtLjY5NmgtMS4xMWE0LjA2MyA0LjA2MyAwIDAgMC0zLjUxNSAyLjAyNkw4LjAxNiA4bC44NDggMS40NjNhNC4wNjQgNC4wNjQgMCAwIDAgMy41MTYgMi4wMjZoMS4xMDlsLS42OTUtLjY5NWEuNjI1LjYyNSAwIDEgMSAuODg0LS44ODRsMS43NjIgMS43NjJhLjYyNS42MjUgMCAwIDEgMCAuODg0bC0xLjc2MiAxLjc2MmEuNjI1LjYyNSAwIDEgMS0uODg0LS44ODRsLjY5NS0uNjk1aC0xLjExYTUuMzE0IDUuMzE0IDAgMCAxLTQuNTk2LTIuNjQ5bC0uNDktLjg0NC0uNDcuODEzYTUuMzE0IDUuMzE0IDAgMCAxLTQuNTk4IDIuNjQ5SDEuMDAyYS42MjUuNjI1IDAgMCAxIDAtMS4yNWgxLjIyM2MxLjQ1IDAgMi43ODktLjc3MiAzLjUxNi0yLjAyNkw2LjU3IDhsLS44My0xLjQzMmE0LjA2NCA0LjA2NCAwIDAgMC0zLjUxNi0yLjAyNkgxLjAwMmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMS4yMjNhNS4zMTQgNS4zMTQgMCAwIDEgNC41OTcgMi42NDlsLjQ3MS44MTMuNDktLjg0NGE1LjMxNCA1LjMxNCAwIDAgMSA0LjU5Ny0yLjY0OWgxLjExbC0uNjk2LS42OTVhLjYyNS42MjUgMCAwIDEgMC0uODg0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
