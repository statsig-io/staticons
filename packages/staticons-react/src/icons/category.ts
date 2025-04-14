
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.16 3.175a1.375 1.375 0 0 0-2.364 0L6.322 7.337a1.375 1.375 0 0 0 1.182 2.078h4.947a1.375 1.375 0 0 0 1.182-2.078L11.16 3.175Zm-1.29.638a.125.125 0 0 1 .215 0l2.474 4.163a.125.125 0 0 1-.108.189H7.504a.125.125 0 0 1-.107-.19L9.87 3.814Zm-.734 8.631c0-1.035-.84-1.875-1.875-1.875h-3.01c-1.036 0-1.876.84-1.876 1.875v3.01c0 1.036.84 1.875 1.875 1.875h3.011c1.036 0 1.875-.84 1.875-1.875v-3.01Zm-1.875-.625c.345 0 .625.28.625.625v3.01c0 .345-.28.625-.625.625h-3.01a.625.625 0 0 1-.626-.625v-3.01c0-.345.28-.625.625-.625h3.011Zm9.113 2.12a2.31 2.31 0 1 1-4.621 0 2.31 2.31 0 0 1 4.621 0Zm1.25 0a3.56 3.56 0 1 1-7.121 0 3.56 3.56 0 0 1 7.121 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Category
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMTYgMy4xNzVhMS4zNzUgMS4zNzUgMCAwIDAtMi4zNjQgMEw2LjMyMiA3LjMzN2ExLjM3NSAxLjM3NSAwIDAgMCAxLjE4MiAyLjA3OGg0Ljk0N2ExLjM3NSAxLjM3NSAwIDAgMCAxLjE4Mi0yLjA3OEwxMS4xNiAzLjE3NVptLTEuMjkuNjM4YS4xMjUuMTI1IDAgMCAxIC4yMTUgMGwyLjQ3NCA0LjE2M2EuMTI1LjEyNSAwIDAgMS0uMTA4LjE4OUg3LjUwNGEuMTI1LjEyNSAwIDAgMS0uMTA3LS4xOUw5Ljg3IDMuODE0Wm0tLjczNCA4LjYzMWMwLTEuMDM1LS44NC0xLjg3NS0xLjg3NS0xLjg3NWgtMy4wMWMtMS4wMzYgMC0xLjg3Ni44NC0xLjg3NiAxLjg3NXYzLjAxYzAgMS4wMzYuODQgMS44NzUgMS44NzUgMS44NzVoMy4wMTFjMS4wMzYgMCAxLjg3NS0uODQgMS44NzUtMS44NzV2LTMuMDFabS0xLjg3NS0uNjI1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2My4wMWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNWgtMy4wMWEuNjI1LjYyNSAwIDAgMS0uNjI2LS42MjV2LTMuMDFjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoMy4wMTFabTkuMTEzIDIuMTJhMi4zMSAyLjMxIDAgMSAxLTQuNjIxIDAgMi4zMSAyLjMxIDAgMCAxIDQuNjIxIDBabTEuMjUgMGEzLjU2IDMuNTYgMCAxIDEtNy4xMjEgMCAzLjU2IDMuNTYgMCAwIDEgNy4xMjEgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Category = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-category',
        'staticon-Category',
        className
      ),
      ...props,
    })
);
Category.displayName = 'Category'

export default Category;
