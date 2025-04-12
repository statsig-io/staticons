
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.938.751c-1.036 0-1.875.84-1.875 1.875V6.75c0 .22.037.43.107.626H2.625c-1.036 0-1.875.84-1.875 1.875v4.124c0 1.036.84 1.875 1.875 1.875H6.75c.48 0 .918-.18 1.25-.477.332.297.77.477 1.25.477h4.125c1.036 0 1.875-.84 1.875-1.875V9.251c0-1.036-.84-1.875-1.875-1.875h-1.544c.07-.196.107-.406.107-.626V2.626c0-1.036-.84-1.875-1.875-1.875H5.938Zm1.437 8.5v-.017a.625.625 0 0 0-.625-.608H2.625A.625.625 0 0 0 2 9.251v4.124c0 .345.28.625.625.625H6.75c.34 0 .616-.27.625-.608V9.25Zm1.875 4.75a.625.625 0 0 1-.625-.61V9.235a.625.625 0 0 1 .625-.608h4.125c.345 0 .625.28.625.625v4.124c0 .345-.28.625-.625.625H9.25ZM5.313 2.625c0-.345.28-.625.625-.625h4.125c.345 0 .625.28.625.625V6.75c0 .345-.28.625-.625.625H5.938a.625.625 0 0 1-.625-.625V2.626Zm1.919.534a.625.625 0 0 0 0 1.25h1.536a.625.625 0 1 0 0-1.25H7.232Zm-3.889 7.145c0-.346.28-.625.625-.625h1.537a.625.625 0 1 1 0 1.25H3.968a.625.625 0 0 1-.625-.625Zm7.154-.626a.625.625 0 1 0 0 1.25h1.537a.625.625 0 1 0 0-1.25h-1.537Z","clip-rule":"evenodd"}]]

/**
 * @component @name ParameterStore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45MzguNzUxYy0xLjAzNiAwLTEuODc1Ljg0LTEuODc1IDEuODc1VjYuNzVjMCAuMjIuMDM3LjQzLjEwNy42MjZIMi42MjVjLTEuMDM2IDAtMS44NzUuODQtMS44NzUgMS44NzV2NC4xMjRjMCAxLjAzNi44NCAxLjg3NSAxLjg3NSAxLjg3NUg2Ljc1Yy40OCAwIC45MTgtLjE4IDEuMjUtLjQ3Ny4zMzIuMjk3Ljc3LjQ3NyAxLjI1LjQ3N2g0LjEyNWMxLjAzNiAwIDEuODc1LS44NCAxLjg3NS0xLjg3NVY5LjI1MWMwLTEuMDM2LS44NC0xLjg3NS0xLjg3NS0xLjg3NWgtMS41NDRjLjA3LS4xOTYuMTA3LS40MDYuMTA3LS42MjZWMi42MjZjMC0xLjAzNi0uODQtMS44NzUtMS44NzUtMS44NzVINS45MzhabTEuNDM3IDguNXYtLjAxN2EuNjI1LjYyNSAwIDAgMC0uNjI1LS42MDhIMi42MjVBLjYyNS42MjUgMCAwIDAgMiA5LjI1MXY0LjEyNGMwIC4zNDUuMjguNjI1LjYyNS42MjVINi43NWMuMzQgMCAuNjE2LS4yNy42MjUtLjYwOFY5LjI1Wm0xLjg3NSA0Ljc1YS42MjUuNjI1IDAgMCAxLS42MjUtLjYxVjkuMjM1YS42MjUuNjI1IDAgMCAxIC42MjUtLjYwOGg0LjEyNWMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djQuMTI0YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDkuMjVaTTUuMzEzIDIuNjI1YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDQuMTI1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVWNi43NWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUg1LjkzOGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWMi42MjZabTEuOTE5LjUzNGEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoMS41MzZhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDcuMjMyWm0tMy44ODkgNy4xNDVjMC0uMzQ2LjI4LS42MjUuNjI1LS42MjVoMS41MzdhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDMuOTY4YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptNy4xNTQtLjYyNmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMS41MzdhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC0xLjUzN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ParameterStore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-parameter-store',
        'staticon-ParameterStore',
        className
      ),
      ...props,
    })
);
ParameterStore.displayName = 'ParameterStore'

export default ParameterStore;
