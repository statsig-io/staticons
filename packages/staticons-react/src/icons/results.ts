
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.125 13.001c0 1.036.839 1.875 1.875 1.875h10c1.036 0 1.875-.84 1.875-1.875V2.998c0-1.035-.84-1.875-1.875-1.875H3c-1.036 0-1.875.84-1.875 1.875v10.003ZM3 13.626a.625.625 0 0 1-.625-.625V2.998c0-.345.28-.625.625-.625h10c.345 0 .625.28.625.625v10.003c0 .345-.28.625-.625.625H3Zm8.587-9.751c.346 0 .625.28.625.625v6.999a.625.625 0 1 1-1.25 0V4.5c0-.345.28-.625.625-.625ZM6.805 6.087c.345 0 .625.28.625.625V11.5a.625.625 0 1 1-1.25 0V6.712c0-.345.28-.625.625-.625ZM4.413 8.853c.345 0 .625.28.625.625v2.021a.625.625 0 1 1-1.25 0v-2.02c0-.345.28-.625.625-.625Zm5.408-1.131a.625.625 0 1 0-1.25 0v3.777a.625.625 0 1 0 1.25 0V7.722Z","clip-rule":"evenodd"}]]

/**
 * @component @name Results
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjUgMTMuMDAxYzAgMS4wMzYuODM5IDEuODc1IDEuODc1IDEuODc1aDEwYzEuMDM2IDAgMS44NzUtLjg0IDEuODc1LTEuODc1VjIuOTk4YzAtMS4wMzUtLjg0LTEuODc1LTEuODc1LTEuODc1SDNjLTEuMDM2IDAtMS44NzUuODQtMS44NzUgMS44NzV2MTAuMDAzWk0zIDEzLjYyNmEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWMi45OThjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoMTBjLjM0NSAwIC42MjUuMjguNjI1LjYyNXYxMC4wMDNjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVIM1ptOC41ODctOS43NTFjLjM0NiAwIC42MjUuMjguNjI1LjYyNXY2Ljk5OWEuNjI1LjYyNSAwIDEgMS0xLjI1IDBWNC41YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wk02LjgwNSA2LjA4N2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1VjExLjVhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjYuNzEyYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wk00LjQxMyA4Ljg1M2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djIuMDIxYS42MjUuNjI1IDAgMSAxLTEuMjUgMHYtMi4wMmMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVptNS40MDgtMS4xMzFhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjMuNzc3YS42MjUuNjI1IDAgMSAwIDEuMjUgMFY3LjcyMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Results = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-results',
        'staticon-Results',
        className
      ),
      ...props,
    })
);
Results.displayName = 'Results'

export default Results;
