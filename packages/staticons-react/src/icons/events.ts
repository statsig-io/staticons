
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.14 2.845v-1.03a.564.564 0 1 0-1.13 0v1.03H2.815A1.814 1.814 0 0 0 1 4.66v8.274c0 1.002.812 1.815 1.814 1.815h10.372A1.814 1.814 0 0 0 15 12.934V4.66a1.814 1.814 0 0 0-1.814-1.815h-1.214v-1.03a.564.564 0 0 0-1.129 0v1.03H5.14Zm-2.326 1.13a.686.686 0 0 0-.685.685v1.253H13.87V4.66a.686.686 0 0 0-.685-.686H2.814Zm-.685 8.96V7.041H13.87v5.892a.686.686 0 0 1-.685.686H2.814a.686.686 0 0 1-.685-.686Zm2.242-4.81A.875.875 0 0 0 3.496 9v2.604c0 .483.391.875.875.875h2.603a.875.875 0 0 0 .875-.875V9a.875.875 0 0 0-.875-.875H4.371Zm.375 3.104V9.375h1.853v1.854H4.746Z","clip-rule":"evenodd"}]]

/**
 * @component @name Events
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xNCAyLjg0NXYtMS4wM2EuNTY0LjU2NCAwIDEgMC0xLjEzIDB2MS4wM0gyLjgxNUExLjgxNCAxLjgxNCAwIDAgMCAxIDQuNjZ2OC4yNzRjMCAxLjAwMi44MTIgMS44MTUgMS44MTQgMS44MTVoMTAuMzcyQTEuODE0IDEuODE0IDAgMCAwIDE1IDEyLjkzNFY0LjY2YTEuODE0IDEuODE0IDAgMCAwLTEuODE0LTEuODE1aC0xLjIxNHYtMS4wM2EuNTY0LjU2NCAwIDAgMC0xLjEyOSAwdjEuMDNINS4xNFptLTIuMzI2IDEuMTNhLjY4Ni42ODYgMCAwIDAtLjY4NS42ODV2MS4yNTNIMTMuODdWNC42NmEuNjg2LjY4NiAwIDAgMC0uNjg1LS42ODZIMi44MTRabS0uNjg1IDguOTZWNy4wNDFIMTMuODd2NS44OTJhLjY4Ni42ODYgMCAwIDEtLjY4NS42ODZIMi44MTRhLjY4Ni42ODYgMCAwIDEtLjY4NS0uNjg2Wm0yLjI0Mi00LjgxQS44NzUuODc1IDAgMCAwIDMuNDk2IDl2Mi42MDRjMCAuNDgzLjM5MS44NzUuODc1Ljg3NWgyLjYwM2EuODc1Ljg3NSAwIDAgMCAuODc1LS44NzVWOWEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVINC4zNzFabS4zNzUgMy4xMDRWOS4zNzVoMS44NTN2MS44NTRINC43NDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Events = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-events',
        'staticon-Events',
        className
      ),
      ...props,
    })
);
Events.displayName = 'Events'

export default Events;
