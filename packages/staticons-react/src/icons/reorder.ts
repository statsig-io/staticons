
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M.625 1.624c0-.483.391-.874.874-.874h4.508c.483 0 .874.391.874.874v2.032a.874.874 0 0 1-.874.873H1.5a.874.874 0 0 1-.874-.873V1.624ZM1.875 2v1.28h3.756V2H1.875ZM.625 6.787c0-.482.391-.874.874-.874h4.508c.483 0 .874.392.874.874V8.82a.874.874 0 0 1-.874.874H1.5a.874.874 0 0 1-.874-.874V6.787Zm1.25.376v1.28h3.756v-1.28H1.875Zm-.376 3.914a.874.874 0 0 0-.874.873v2.033c0 .482.391.873.874.873h4.508a.874.874 0 0 0 .874-.873V11.95a.874.874 0 0 0-.874-.873H1.5Zm.376 2.53v-1.28h3.756v1.28H1.875Zm8.136-1.265.57-.57a.625.625 0 0 0-.884-.884l-1.541 1.543a.775.775 0 0 0 0 1.095l1.54 1.542a.624.624 0 1 0 .885-.884l-.592-.592H13.5c1.036 0 1.875-.84 1.875-1.875V3.89A1.874 1.874 0 0 0 13.5 2.015H8.573a.625.625 0 1 0 0 1.25H13.5c.346 0 .625.28.625.625v7.827c0 .345-.28.625-.625.625h-3.489Z","clip-rule":"evenodd"}]]

/**
 * @component @name Reorder
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjYyNSAxLjYyNGMwLS40ODMuMzkxLS44NzQuODc0LS44NzRoNC41MDhjLjQ4MyAwIC44NzQuMzkxLjg3NC44NzR2Mi4wMzJhLjg3NC44NzQgMCAwIDEtLjg3NC44NzNIMS41YS44NzQuODc0IDAgMCAxLS44NzQtLjg3M1YxLjYyNFpNMS44NzUgMnYxLjI4aDMuNzU2VjJIMS44NzVaTS42MjUgNi43ODdjMC0uNDgyLjM5MS0uODc0Ljg3NC0uODc0aDQuNTA4Yy40ODMgMCAuODc0LjM5Mi44NzQuODc0VjguODJhLjg3NC44NzQgMCAwIDEtLjg3NC44NzRIMS41YS44NzQuODc0IDAgMCAxLS44NzQtLjg3NFY2Ljc4N1ptMS4yNS4zNzZ2MS4yOGgzLjc1NnYtMS4yOEgxLjg3NVptLS4zNzYgMy45MTRhLjg3NC44NzQgMCAwIDAtLjg3NC44NzN2Mi4wMzNjMCAuNDgyLjM5MS44NzMuODc0Ljg3M2g0LjUwOGEuODc0Ljg3NCAwIDAgMCAuODc0LS44NzNWMTEuOTVhLjg3NC44NzQgMCAwIDAtLjg3NC0uODczSDEuNVptLjM3NiAyLjUzdi0xLjI4aDMuNzU2djEuMjhIMS44NzVabTguMTM2LTEuMjY1LjU3LS41N2EuNjI1LjYyNSAwIDAgMC0uODg0LS44ODRsLTEuNTQxIDEuNTQzYS43NzUuNzc1IDAgMCAwIDAgMS4wOTVsMS41NCAxLjU0MmEuNjI0LjYyNCAwIDEgMCAuODg1LS44ODRsLS41OTItLjU5MkgxMy41YzEuMDM2IDAgMS44NzUtLjg0IDEuODc1LTEuODc1VjMuODlBMS44NzQgMS44NzQgMCAwIDAgMTMuNSAyLjAxNUg4LjU3M2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVIMTMuNWMuMzQ2IDAgLjYyNS4yOC42MjUuNjI1djcuODI3YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1aC0zLjQ4OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Reorder = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-reorder',
        'staticon-Reorder',
        className
      ),
      ...props,
    })
);
Reorder.displayName = 'Reorder'

export default Reorder;
