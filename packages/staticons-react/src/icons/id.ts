
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.118 4.749H3.876a.625.625 0 0 0-.625.625l.006 9.252c0 .3.21.549.49.61.02-.971.383-2.07 1.045-2.944a4.2 4.2 0 0 1 1.42-1.216 2.796 2.796 0 1 1 3.334-.005 4.17 4.17 0 0 1 1.426 1.223c.66.878 1.017 1.984 1.033 2.957h4.118c.346 0 .626-.28.625-.625l-.005-9.252a.625.625 0 0 0-.625-.625Zm-5.363 10.502c-.016-.704-.285-1.544-.783-2.207-.504-.671-1.208-1.118-2.086-1.118-.88 0-1.588.447-2.098 1.12-.502.664-.774 1.504-.79 2.205h5.756ZM3.876 3.499h12.242c1.035 0 1.874.839 1.875 1.874l.005 9.252a1.873 1.873 0 0 1-1.875 1.875H3.882a1.875 1.875 0 0 1-1.875-1.874l-.006-9.252c0-1.036.84-1.876 1.875-1.876Zm8.029 4.198c0-.345.28-.625.625-.625h2.528a.625.625 0 1 1 0 1.25H12.53a.625.625 0 0 1-.625-.625Zm.625 1.89a.625.625 0 1 0 0 1.25h2.528a.625.625 0 0 0 0-1.25H12.53ZM7.876 7.281a1.546 1.546 0 1 0 .001 3.093 1.546 1.546 0 0 0-.001-3.093Z","clip-rule":"evenodd"}]]

/**
 * @component @name Id
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTE4IDQuNzQ5SDMuODc2YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1bC4wMDYgOS4yNTJjMCAuMy4yMS41NDkuNDkuNjEuMDItLjk3MS4zODMtMi4wNyAxLjA0NS0yLjk0NGE0LjIgNC4yIDAgMCAxIDEuNDItMS4yMTYgMi43OTYgMi43OTYgMCAxIDEgMy4zMzQtLjAwNSA0LjE3IDQuMTcgMCAwIDEgMS40MjYgMS4yMjNjLjY2Ljg3OCAxLjAxNyAxLjk4NCAxLjAzMyAyLjk1N2g0LjExOGMuMzQ2IDAgLjYyNi0uMjguNjI1LS42MjVsLS4wMDUtOS4yNTJhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1Wm0tNS4zNjMgMTAuNTAyYy0uMDE2LS43MDQtLjI4NS0xLjU0NC0uNzgzLTIuMjA3LS41MDQtLjY3MS0xLjIwOC0xLjExOC0yLjA4Ni0xLjExOC0uODggMC0xLjU4OC40NDctMi4wOTggMS4xMi0uNTAyLjY2NC0uNzc0IDEuNTA0LS43OSAyLjIwNWg1Ljc1NlpNMy44NzYgMy40OTloMTIuMjQyYzEuMDM1IDAgMS44NzQuODM5IDEuODc1IDEuODc0bC4wMDUgOS4yNTJhMS44NzMgMS44NzMgMCAwIDEtMS44NzUgMS44NzVIMy44ODJhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzRsLS4wMDYtOS4yNTJjMC0xLjAzNi44NC0xLjg3NiAxLjg3NS0xLjg3NlptOC4wMjkgNC4xOThjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoMi41MjhhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEyLjUzYS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptLjYyNSAxLjg5YS42MjUuNjI1IDAgMSAwIDAgMS4yNWgyLjUyOGEuNjI1LjYyNSAwIDAgMCAwLTEuMjVIMTIuNTNaTTcuODc2IDcuMjgxYTEuNTQ2IDEuNTQ2IDAgMSAwIC4wMDEgMy4wOTMgMS41NDYgMS41NDYgMCAwIDAtLjAwMS0zLjA5M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Id = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-id',
        'staticon-Id',
        className
      ),
      ...props,
    })
);
Id.displayName = 'Id'

export default Id;
