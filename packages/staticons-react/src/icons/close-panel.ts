
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.999 14.877a1.875 1.875 0 0 1-1.875-1.875V2.997c0-1.035.839-1.875 1.875-1.875H13c1.036 0 1.875.84 1.875 1.875v10.005c0 1.035-.84 1.875-1.875 1.875H2.999Zm-.625-1.875c0 .345.28.625.625.625h7.156V2.372H2.999a.625.625 0 0 0-.625.625v10.005Zm9.031-10.63v11.255h1.596c.345 0 .625-.28.625-.625V2.997a.625.625 0 0 0-.625-.625h-1.596ZM4.682 5.444a.625.625 0 0 1 .881-.067l2.28 1.959a.875.875 0 0 1 0 1.327l-2.28 1.958a.625.625 0 1 1-.814-.948L6.697 8 4.75 6.326a.625.625 0 0 1-.067-.882Z","clip-rule":"evenodd"}]]

/**
 * @component @name ClosePanel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi45OTkgMTQuODc3YTEuODc1IDEuODc1IDAgMCAxLTEuODc1LTEuODc1VjIuOTk3YzAtMS4wMzUuODM5LTEuODc1IDEuODc1LTEuODc1SDEzYzEuMDM2IDAgMS44NzUuODQgMS44NzUgMS44NzV2MTAuMDA1YzAgMS4wMzUtLjg0IDEuODc1LTEuODc1IDEuODc1SDIuOTk5Wm0tLjYyNS0xLjg3NWMwIC4zNDUuMjguNjI1LjYyNS42MjVoNy4xNTZWMi4zNzJIMi45OTlhLjYyNS42MjUgMCAwIDAtLjYyNS42MjV2MTAuMDA1Wm05LjAzMS0xMC42M3YxMS4yNTVoMS41OTZjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1VjIuOTk3YS42MjUuNjI1IDAgMCAwLS42MjUtLjYyNWgtMS41OTZaTTQuNjgyIDUuNDQ0YS42MjUuNjI1IDAgMCAxIC44ODEtLjA2N2wyLjI4IDEuOTU5YS44NzUuODc1IDAgMCAxIDAgMS4zMjdsLTIuMjggMS45NThhLjYyNS42MjUgMCAxIDEtLjgxNC0uOTQ4TDYuNjk3IDggNC43NSA2LjMyNmEuNjI1LjYyNSAwIDAgMS0uMDY3LS44ODJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ClosePanel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-close-panel',
        'staticon-ClosePanel',
        className
      ),
      ...props,
    })
);
ClosePanel.displayName = 'ClosePanel'

export default ClosePanel;
