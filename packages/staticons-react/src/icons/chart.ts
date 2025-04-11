
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.75 4.623a.75.75 0 1 0-1.5 0v12.754A2.75 2.75 0 0 0 6 20.127h14a.75.75 0 0 0 0-1.5H6c-.69 0-1.25-.56-1.25-1.25V4.623Zm15.323 2.603a.75.75 0 0 0-1.45-.384l-.098.376c-.213.82-.48 1.848-.865 2.78-.221.539-.47 1.01-.744 1.37-.276.36-.545.564-.798.648-.37.123-.674.123-.977-.02-.33-.155-.761-.528-1.26-1.366-.575-.97-1.198-1.626-1.91-1.96-.74-.349-1.464-.3-2.116-.082-.615.205-1.103.645-1.485 1.13-.385.488-.704 1.076-.97 1.666-.5 1.113-.851 2.338-1.08 3.135l-.039.135a.75.75 0 1 0 1.442.415l.034-.119c.232-.808.558-1.94 1.012-2.951.238-.53.499-.997.78-1.354.284-.36.549-.557.78-.634.389-.13.7-.128 1.003.015.332.157.762.531 1.26 1.37.577.972 1.202 1.624 1.91 1.958.734.346 1.452.298 2.09.085.637-.212 1.133-.66 1.516-1.16.384-.504.69-1.106.939-1.708.428-1.037.723-2.179.934-2.99l.092-.355Z","clip-rule":"evenodd"}]]

/**
 * @component @name Chart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NSA0LjYyM2EuNzUuNzUgMCAxIDAtMS41IDB2MTIuNzU0QTIuNzUgMi43NSAwIDAgMCA2IDIwLjEyN2gxNGEuNzUuNzUgMCAwIDAgMC0xLjVINmMtLjY5IDAtMS4yNS0uNTYtMS4yNS0xLjI1VjQuNjIzWm0xNS4zMjMgMi42MDNhLjc1Ljc1IDAgMCAwLTEuNDUtLjM4NGwtLjA5OC4zNzZjLS4yMTMuODItLjQ4IDEuODQ4LS44NjUgMi43OC0uMjIxLjUzOS0uNDcgMS4wMS0uNzQ0IDEuMzctLjI3Ni4zNi0uNTQ1LjU2NC0uNzk4LjY0OC0uMzcuMTIzLS42NzQuMTIzLS45NzctLjAyLS4zMy0uMTU1LS43NjEtLjUyOC0xLjI2LTEuMzY2LS41NzUtLjk3LTEuMTk4LTEuNjI2LTEuOTEtMS45Ni0uNzQtLjM0OS0xLjQ2NC0uMy0yLjExNi0uMDgyLS42MTUuMjA1LTEuMTAzLjY0NS0xLjQ4NSAxLjEzLS4zODUuNDg4LS43MDQgMS4wNzYtLjk3IDEuNjY2LS41IDEuMTEzLS44NTEgMi4zMzgtMS4wOCAzLjEzNWwtLjAzOS4xMzVhLjc1Ljc1IDAgMSAwIDEuNDQyLjQxNWwuMDM0LS4xMTljLjIzMi0uODA4LjU1OC0xLjk0IDEuMDEyLTIuOTUxLjIzOC0uNTMuNDk5LS45OTcuNzgtMS4zNTQuMjg0LS4zNi41NDktLjU1Ny43OC0uNjM0LjM4OS0uMTMuNy0uMTI4IDEuMDAzLjAxNS4zMzIuMTU3Ljc2Mi41MzEgMS4yNiAxLjM3LjU3Ny45NzIgMS4yMDIgMS42MjQgMS45MSAxLjk1OC43MzQuMzQ2IDEuNDUyLjI5OCAyLjA5LjA4NS42MzctLjIxMiAxLjEzMy0uNjYgMS41MTYtMS4xNi4zODQtLjUwNC42OS0xLjEwNi45MzktMS43MDguNDI4LTEuMDM3LjcyMy0yLjE3OS45MzQtMi45OWwuMDkyLS4zNTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Chart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chart',
        'staticon-Chart',
        className
      ),
      ...props,
    })
);
Chart.displayName = 'Chart'

export default Chart;
