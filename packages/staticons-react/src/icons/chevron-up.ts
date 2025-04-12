
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.299 10.457a.625.625 0 0 0 .035-.883L8.768 5.712a1.045 1.045 0 0 0-1.536 0L3.666 9.574a.625.625 0 0 0 .918.848L8 6.723l3.416 3.7c.234.253.63.268.883.034Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMjk5IDEwLjQ1N2EuNjI1LjYyNSAwIDAgMCAuMDM1LS44ODNMOC43NjggNS43MTJhMS4wNDUgMS4wNDUgMCAwIDAtMS41MzYgMEwzLjY2NiA5LjU3NGEuNjI1LjYyNSAwIDAgMCAuOTE4Ljg0OEw4IDYuNzIzbDMuNDE2IDMuN2MuMjM0LjI1My42My4yNjguODgzLjAzNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-up',
        'staticon-ChevronUp',
        className
      ),
      ...props,
    })
);
ChevronUp.displayName = 'ChevronUp'

export default ChevronUp;
