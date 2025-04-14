
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.104 2.623v.9h5.23v-.9a.625.625 0 1 1 1.25 0v.9h.747c1.174 0 2.125.95 2.125 2.124v3.387a4.756 4.756 0 1 1-6.669 5.875H4.125A2.125 2.125 0 0 1 2 12.784V5.647c0-1.173.95-2.125 2.125-2.125h.729v-.899a.625.625 0 1 1 1.25 0Zm8.102 5.083v.881a4.756 4.756 0 0 0-5.7 5.072H4.125a.875.875 0 0 1-.875-.875V7.706h10.956Zm0-1.25v-.809a.875.875 0 0 0-.875-.875H4.125a.875.875 0 0 0-.875.875v.809h10.956Zm-.961 10.296a3.506 3.506 0 1 0 0-7.012 3.506 3.506 0 0 0 0 7.012Zm2.286-3.899a.625.625 0 1 0-.884-.884l-1.936 1.937-.87-.87a.625.625 0 0 0-.883.885l1.134 1.134a.875.875 0 0 0 1.237 0l2.202-2.202Z","clip-rule":"evenodd"}]]

/**
 * @component @name QualifiedEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMDQgMi42MjN2LjloNS4yM3YtLjlhLjYyNS42MjUgMCAxIDEgMS4yNSAwdi45aC43NDdjMS4xNzQgMCAyLjEyNS45NSAyLjEyNSAyLjEyNHYzLjM4N2E0Ljc1NiA0Ljc1NiAwIDEgMS02LjY2OSA1Ljg3NUg0LjEyNUEyLjEyNSAyLjEyNSAwIDAgMSAyIDEyLjc4NFY1LjY0N2MwLTEuMTczLjk1LTIuMTI1IDIuMTI1LTIuMTI1aC43Mjl2LS44OTlhLjYyNS42MjUgMCAxIDEgMS4yNSAwWm04LjEwMiA1LjA4M3YuODgxYTQuNzU2IDQuNzU2IDAgMCAwLTUuNyA1LjA3Mkg0LjEyNWEuODc1Ljg3NSAwIDAgMS0uODc1LS44NzVWNy43MDZoMTAuOTU2Wm0wLTEuMjV2LS44MDlhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc1SDQuMTI1YS44NzUuODc1IDAgMCAwLS44NzUuODc1di44MDloMTAuOTU2Wm0tLjk2MSAxMC4yOTZhMy41MDYgMy41MDYgMCAxIDAgMC03LjAxMiAzLjUwNiAzLjUwNiAwIDAgMCAwIDcuMDEyWm0yLjI4Ni0zLjg5OWEuNjI1LjYyNSAwIDEgMC0uODg0LS44ODRsLTEuOTM2IDEuOTM3LS44Ny0uODdhLjYyNS42MjUgMCAwIDAtLjg4My44ODVsMS4xMzQgMS4xMzRhLjg3NS44NzUgMCAwIDAgMS4yMzcgMGwyLjIwMi0yLjIwMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const QualifiedEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-qualified-events',
        'staticon-QualifiedEvents',
        className
      ),
      ...props,
    })
);
QualifiedEvents.displayName = 'QualifiedEvents'

export default QualifiedEvents;
