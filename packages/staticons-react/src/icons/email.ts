
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.501 5.025h10.993c.483 0 .875.392.875.875v.705L10.5 10.68a.875.875 0 0 1-.998 0L3.626 6.602v-.701c0-.484.392-.876.875-.876Zm-.874 3.1.004 5.976c0 .483.392.874.875.874h10.993a.875.875 0 0 0 .875-.875l-.003-5.974-5.16 3.58a2.125 2.125 0 0 1-2.422 0L3.627 8.125Zm11.867-4.35H4.501a2.125 2.125 0 0 0-2.125 2.127l.005 8.2c0 1.173.952 2.123 2.125 2.123h10.993a2.125 2.125 0 0 0 2.125-2.126l-.005-8.2a2.125 2.125 0 0 0-2.125-2.124Z","clip-rule":"evenodd"}]]

/**
 * @component @name Email
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC41MDEgNS4wMjVoMTAuOTkzYy40ODMgMCAuODc1LjM5Mi44NzUuODc1di43MDVMMTAuNSAxMC42OGEuODc1Ljg3NSAwIDAgMS0uOTk4IDBMMy42MjYgNi42MDJ2LS43MDFjMC0uNDg0LjM5Mi0uODc2Ljg3NS0uODc2Wm0tLjg3NCAzLjEuMDA0IDUuOTc2YzAgLjQ4My4zOTIuODc0Ljg3NS44NzRoMTAuOTkzYS44NzUuODc1IDAgMCAwIC44NzUtLjg3NWwtLjAwMy01Ljk3NC01LjE2IDMuNThhMi4xMjUgMi4xMjUgMCAwIDEtMi40MjIgMEwzLjYyNyA4LjEyNVptMTEuODY3LTQuMzVINC41MDFhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjdsLjAwNSA4LjJjMCAxLjE3My45NTIgMi4xMjMgMi4xMjUgMi4xMjNoMTAuOTkzYTIuMTI1IDIuMTI1IDAgMCAwIDIuMTI1LTIuMTI2bC0uMDA1LTguMmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Email = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-email',
        'staticon-Email',
        className
      ),
      ...props,
    })
);
Email.displayName = 'Email'

export default Email;
