
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.158 3.5a.625.625 0 1 0 0 1.25h.74v1.73a.625.625 0 0 1-.067.282l-3.35 6.656c-.712 1.414.316 3.082 1.9 3.082h9.239c1.583 0 2.61-1.668 1.9-3.082l-3.35-6.656a.625.625 0 0 1-.067-.282V4.75h.693a.625.625 0 1 0 0-1.25H6.158Zm1.99 2.98V4.75h3.704v1.73c0 .293.069.582.2.844l1.283 2.55c-.122.081-.28.17-.477.242-.506.187-1.321.286-2.467-.27a4.826 4.826 0 0 0-3.56-.302l1.118-2.22c.131-.262.2-.55.2-.844Zm-2.25 4.917-1.3 2.583a.876.876 0 0 0 .783 1.27h9.239a.876.876 0 0 0 .782-1.27L13.9 10.996c-.17.104-.373.207-.61.294-.83.306-1.997.384-3.445-.318a3.585 3.585 0 0 0-2.82-.177 4.168 4.168 0 0 0-1.086.57l-.04.032Z","clip-rule":"evenodd"}]]

/**
 * @component @name Experiment
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xNTggMy41YS42MjUuNjI1IDAgMSAwIDAgMS4yNWguNzR2MS43M2EuNjI1LjYyNSAwIDAgMS0uMDY3LjI4MmwtMy4zNSA2LjY1NmMtLjcxMiAxLjQxNC4zMTYgMy4wODIgMS45IDMuMDgyaDkuMjM5YzEuNTgzIDAgMi42MS0xLjY2OCAxLjktMy4wODJsLTMuMzUtNi42NTZhLjYyNS42MjUgMCAwIDEtLjA2Ny0uMjgyVjQuNzVoLjY5M2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVINi4xNThabTEuOTkgMi45OFY0Ljc1aDMuNzA0djEuNzNjMCAuMjkzLjA2OS41ODIuMi44NDRsMS4yODMgMi41NWMtLjEyMi4wODEtLjI4LjE3LS40NzcuMjQyLS41MDYuMTg3LTEuMzIxLjI4Ni0yLjQ2Ny0uMjdhNC44MjYgNC44MjYgMCAwIDAtMy41Ni0uMzAybDEuMTE4LTIuMjJjLjEzMS0uMjYyLjItLjU1LjItLjg0NFptLTIuMjUgNC45MTctMS4zIDIuNTgzYS44NzYuODc2IDAgMCAwIC43ODMgMS4yN2g5LjIzOWEuODc2Ljg3NiAwIDAgMCAuNzgyLTEuMjdMMTMuOSAxMC45OTZjLS4xNy4xMDQtLjM3My4yMDctLjYxLjI5NC0uODMuMzA2LTEuOTk3LjM4NC0zLjQ0NS0uMzE4YTMuNTg1IDMuNTg1IDAgMCAwLTIuODItLjE3NyA0LjE2OCA0LjE2OCAwIDAgMC0xLjA4Ni41N2wtLjA0LjAzMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Experiment = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-experiment',
        'staticon-Experiment',
        className
      ),
      ...props,
    })
);
Experiment.displayName = 'Experiment'

export default Experiment;
