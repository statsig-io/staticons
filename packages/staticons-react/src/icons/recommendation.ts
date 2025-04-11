
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.162 4.81a.751.751 0 1 1-1.303.752l-.823-1.425a.751.751 0 1 1 1.303-.752l.823 1.425Zm3.2 13.251c.336.84 1.525.84 1.861 0l1.488-3.717c.127-.317.378-.568.696-.695l3.72-1.487c.84-.336.84-1.526 0-1.862l-3.72-1.487a1.248 1.248 0 0 1-.696-.695L14.223 4.4c-.336-.84-1.525-.84-1.862 0l-1.488 3.718a1.248 1.248 0 0 1-.695.695L6.458 10.3c-.84.336-.84 1.526 0 1.862l3.457 1.382-5.939 5.932a.751.751 0 1 0 1.064 1.063l5.939-5.932 1.382 3.454Zm1.953-4.276-1.023 2.554-1.022-2.554a2.752 2.752 0 0 0-1.534-1.533l-2.555-1.021 2.555-1.022c.7-.28 1.254-.833 1.534-1.532l1.022-2.555 1.023 2.555a2.75 2.75 0 0 0 1.533 1.532l2.555 1.022-2.555 1.021c-.7.28-1.253.834-1.533 1.533ZM7.356 7.399a.751.751 0 0 0-.275-1.027L5.655 5.55a.753.753 0 0 0-.753 1.302l1.426.822c.36.208.82.085 1.028-.275Z","clip-rule":"evenodd"}]]

/**
 * @component @name Recommendation
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4xNjIgNC44MWEuNzUxLjc1MSAwIDEgMS0xLjMwMy43NTJsLS44MjMtMS40MjVhLjc1MS43NTEgMCAxIDEgMS4zMDMtLjc1MmwuODIzIDEuNDI1Wm0zLjIgMTMuMjUxYy4zMzYuODQgMS41MjUuODQgMS44NjEgMGwxLjQ4OC0zLjcxN2MuMTI3LS4zMTcuMzc4LS41NjguNjk2LS42OTVsMy43Mi0xLjQ4N2MuODQtLjMzNi44NC0xLjUyNiAwLTEuODYybC0zLjcyLTEuNDg3YTEuMjQ4IDEuMjQ4IDAgMCAxLS42OTYtLjY5NUwxNC4yMjMgNC40Yy0uMzM2LS44NC0xLjUyNS0uODQtMS44NjIgMGwtMS40ODggMy43MThhMS4yNDggMS4yNDggMCAwIDEtLjY5NS42OTVMNi40NTggMTAuM2MtLjg0LjMzNi0uODQgMS41MjYgMCAxLjg2MmwzLjQ1NyAxLjM4Mi01LjkzOSA1LjkzMmEuNzUxLjc1MSAwIDEgMCAxLjA2NCAxLjA2M2w1LjkzOS01LjkzMiAxLjM4MiAzLjQ1NFptMS45NTMtNC4yNzYtMS4wMjMgMi41NTQtMS4wMjItMi41NTRhMi43NTIgMi43NTIgMCAwIDAtMS41MzQtMS41MzNsLTIuNTU1LTEuMDIxIDIuNTU1LTEuMDIyYy43LS4yOCAxLjI1NC0uODMzIDEuNTM0LTEuNTMybDEuMDIyLTIuNTU1IDEuMDIzIDIuNTU1YTIuNzUgMi43NSAwIDAgMCAxLjUzMyAxLjUzMmwyLjU1NSAxLjAyMi0yLjU1NSAxLjAyMWMtLjcuMjgtMS4yNTMuODM0LTEuNTMzIDEuNTMzWk03LjM1NiA3LjM5OWEuNzUxLjc1MSAwIDAgMC0uMjc1LTEuMDI3TDUuNjU1IDUuNTVhLjc1My43NTMgMCAwIDAtLjc1MyAxLjMwMmwxLjQyNi44MjJjLjM2LjIwOC44Mi4wODUgMS4wMjgtLjI3NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Recommendation = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-recommendation',
        'staticon-Recommendation',
        className
      ),
      ...props,
    })
);
Recommendation.displayName = 'Recommendation'

export default Recommendation;
