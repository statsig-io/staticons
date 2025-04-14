
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.624 1.998c.345 0 .625.28.625.625v9.765c0 .483.392.875.875.875h5.263v-.047c0-1.449.803-2.71 1.99-3.36a.88.88 0 0 1-.186-.155L8.276 6.48l-2.54 4.546a.625.625 0 1 1-1.091-.61L7.44 5.415a.875.875 0 0 1 1.412-.16l2.916 3.22 2.54-4.546a.625.625 0 0 1 1.091.61l-2.731 4.887a3.829 3.829 0 0 1 3.66 6.019l1.49 1.49a.625.625 0 1 1-.884.884l-1.49-1.49a3.83 3.83 0 0 1-5.833-1.816H4.125A2.125 2.125 0 0 1 2 12.388V2.623c0-.345.28-.625.625-.625Zm10.59 8.639a2.579 2.579 0 1 0 .001 5.158 2.579 2.579 0 0 0 0-5.158Z","clip-rule":"evenodd"}]]

/**
 * @component @name MetricsExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjQgMS45OThjLjM0NSAwIC42MjUuMjguNjI1LjYyNXY5Ljc2NWMwIC40ODMuMzkyLjg3NS44NzUuODc1aDUuMjYzdi0uMDQ3YzAtMS40NDkuODAzLTIuNzEgMS45OS0zLjM2YS44OC44OCAwIDAgMS0uMTg2LS4xNTVMOC4yNzYgNi40OGwtMi41NCA0LjU0NmEuNjI1LjYyNSAwIDEgMS0xLjA5MS0uNjFMNy40NCA1LjQxNWEuODc1Ljg3NSAwIDAgMSAxLjQxMi0uMTZsMi45MTYgMy4yMiAyLjU0LTQuNTQ2YS42MjUuNjI1IDAgMCAxIDEuMDkxLjYxbC0yLjczMSA0Ljg4N2EzLjgyOSAzLjgyOSAwIDAgMSAzLjY2IDYuMDE5bDEuNDkgMS40OWEuNjI1LjYyNSAwIDEgMS0uODg0Ljg4NGwtMS40OS0xLjQ5YTMuODMgMy44MyAwIDAgMS01LjgzMy0xLjgxNkg0LjEyNUEyLjEyNSAyLjEyNSAwIDAgMSAyIDEyLjM4OFYyLjYyM2MwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVptMTAuNTkgOC42MzlhMi41NzkgMi41NzkgMCAxIDAgLjAwMSA1LjE1OCAyLjU3OSAyLjU3OSAwIDAgMCAwLTUuMTU4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const MetricsExplorer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-metrics-explorer',
        'staticon-MetricsExplorer',
        className
      ),
      ...props,
    })
);
MetricsExplorer.displayName = 'MetricsExplorer'

export default MetricsExplorer;
