
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.866 4.57v3.085a4.723 4.723 0 0 1 2.448 2.294h3.105c-.744-2.664-2.877-4.737-5.553-5.38Zm-1.5-.332c0-.734.658-1.365 1.45-1.213 3.539.68 6.344 3.42 7.153 6.931.185.805-.453 1.493-1.205 1.493h-3.593c-.542 0-.974-.34-1.168-.765a3.221 3.221 0 0 0-1.786-1.672c-.463-.175-.85-.623-.85-1.203v-3.57Zm-2.534.472C6.745 5.684 4.5 8.595 4.5 12.04s2.245 6.354 5.332 7.328V16.18a4.734 4.734 0 0 1-2.424-4.14c0-1.781.978-3.334 2.424-4.14V4.71Zm-.027-1.553c.816-.214 1.527.432 1.527 1.196v3.681c0 .515-.309.931-.701 1.138a3.233 3.233 0 0 0-1.723 2.867c0 1.248.7 2.33 1.723 2.867.392.206.7.623.7 1.138v3.68c0 .765-.71 1.41-1.526 1.196C5.886 19.893 3 16.303 3 12.04c0-4.265 2.886-7.854 6.805-8.882Zm6.51 10.893a4.722 4.722 0 0 1-2.449 2.295v3.085c2.676-.642 4.81-2.716 5.554-5.38h-3.106Zm-.145-1.5h3.594c.752 0 1.39.687 1.205 1.492-.808 3.511-3.614 6.253-7.153 6.933-.792.152-1.45-.479-1.45-1.214v-3.57c0-.58.388-1.028.851-1.203a3.221 3.221 0 0 0 1.786-1.673 1.293 1.293 0 0 1 1.167-.765Z","clip-rule":"evenodd"}]]

/**
 * @component @name DonutChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuODY2IDQuNTd2My4wODVhNC43MjMgNC43MjMgMCAwIDEgMi40NDggMi4yOTRoMy4xMDVjLS43NDQtMi42NjQtMi44NzctNC43MzctNS41NTMtNS4zOFptLTEuNS0uMzMyYzAtLjczNC42NTgtMS4zNjUgMS40NS0xLjIxMyAzLjUzOS42OCA2LjM0NCAzLjQyIDcuMTUzIDYuOTMxLjE4NS44MDUtLjQ1MyAxLjQ5My0xLjIwNSAxLjQ5M2gtMy41OTNjLS41NDIgMC0uOTc0LS4zNC0xLjE2OC0uNzY1YTMuMjIxIDMuMjIxIDAgMCAwLTEuNzg2LTEuNjcyYy0uNDYzLS4xNzUtLjg1LS42MjMtLjg1LTEuMjAzdi0zLjU3Wm0tMi41MzQuNDcyQzYuNzQ1IDUuNjg0IDQuNSA4LjU5NSA0LjUgMTIuMDRzMi4yNDUgNi4zNTQgNS4zMzIgNy4zMjhWMTYuMThhNC43MzQgNC43MzQgMCAwIDEtMi40MjQtNC4xNGMwLTEuNzgxLjk3OC0zLjMzNCAyLjQyNC00LjE0VjQuNzFabS0uMDI3LTEuNTUzYy44MTYtLjIxNCAxLjUyNy40MzIgMS41MjcgMS4xOTZ2My42ODFjMCAuNTE1LS4zMDkuOTMxLS43MDEgMS4xMzhhMy4yMzMgMy4yMzMgMCAwIDAtMS43MjMgMi44NjdjMCAxLjI0OC43IDIuMzMgMS43MjMgMi44NjcuMzkyLjIwNi43LjYyMy43IDEuMTM4djMuNjhjMCAuNzY1LS43MSAxLjQxLTEuNTI2IDEuMTk2QzUuODg2IDE5Ljg5MyAzIDE2LjMwMyAzIDEyLjA0YzAtNC4yNjUgMi44ODYtNy44NTQgNi44MDUtOC44ODJabTYuNTEgMTAuODkzYTQuNzIyIDQuNzIyIDAgMCAxLTIuNDQ5IDIuMjk1djMuMDg1YzIuNjc2LS42NDIgNC44MS0yLjcxNiA1LjU1NC01LjM4aC0zLjEwNlptLS4xNDUtMS41aDMuNTk0Yy43NTIgMCAxLjM5LjY4NyAxLjIwNSAxLjQ5Mi0uODA4IDMuNTExLTMuNjE0IDYuMjUzLTcuMTUzIDYuOTMzLS43OTIuMTUyLTEuNDUtLjQ3OS0xLjQ1LTEuMjE0di0zLjU3YzAtLjU4LjM4OC0xLjAyOC44NTEtMS4yMDNhMy4yMjEgMy4yMjEgMCAwIDAgMS43ODYtMS42NzMgMS4yOTMgMS4yOTMgMCAwIDEgMS4xNjctLjc2NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DonutChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-donut-chart',
        'staticon-DonutChart',
        className
      ),
      ...props,
    })
);
DonutChart.displayName = 'DonutChart'

export default DonutChart;
