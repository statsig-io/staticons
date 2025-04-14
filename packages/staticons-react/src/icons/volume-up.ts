
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.181 3.985a.625.625 0 0 1 .832-.3C16.267 4.745 18 6.991 18 10c0 3.008-1.733 5.255-3.987 6.314a.625.625 0 1 1-.532-1.132C15.338 14.31 16.75 12.48 16.75 10c0-2.48-1.412-4.31-3.269-5.183a.625.625 0 0 1-.3-.832Zm-.553 3.373a.625.625 0 0 1 .823-.323c1.115.485 1.865 1.65 1.865 2.97 0 1.32-.75 2.484-1.865 2.97a.625.625 0 0 1-.499-1.146c.63-.275 1.114-.97 1.114-1.824 0-.854-.483-1.55-1.114-1.824a.625.625 0 0 1-.324-.823ZM9.881 4.983a.116.116 0 0 1 .065-.036.132.132 0 0 1 .072.01.132.132 0 0 1 .057.044.11.11 0 0 1 .02.07v9.868a.11.11 0 0 1-.02.07.133.133 0 0 1-.057.045.132.132 0 0 1-.072.01.116.116 0 0 1-.065-.036l-2.036-2.012a2.125 2.125 0 0 0-1.494-.613H4.125a.875.875 0 0 1-.875-.875V8.484c0-.483.392-.875.875-.875h2.226c.56 0 1.096-.22 1.494-.613L9.88 4.983Zm1.463.089c0-1.222-1.473-1.837-2.341-.978L6.966 6.106a.875.875 0 0 1-.615.253H4.125A2.125 2.125 0 0 0 2 8.484v3.044c0 1.173.951 2.125 2.125 2.125h2.226c.23 0 .451.09.615.252l2.037 2.012c.869.858 2.341.243 2.341-.978V5.072Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTgxIDMuOTg1YS42MjUuNjI1IDAgMCAxIC44MzItLjNDMTYuMjY3IDQuNzQ1IDE4IDYuOTkxIDE4IDEwYzAgMy4wMDgtMS43MzMgNS4yNTUtMy45ODcgNi4zMTRhLjYyNS42MjUgMCAxIDEtLjUzMi0xLjEzMkMxNS4zMzggMTQuMzEgMTYuNzUgMTIuNDggMTYuNzUgMTBjMC0yLjQ4LTEuNDEyLTQuMzEtMy4yNjktNS4xODNhLjYyNS42MjUgMCAwIDEtLjMtLjgzMlptLS41NTMgMy4zNzNhLjYyNS42MjUgMCAwIDEgLjgyMy0uMzIzYzEuMTE1LjQ4NSAxLjg2NSAxLjY1IDEuODY1IDIuOTcgMCAxLjMyLS43NSAyLjQ4NC0xLjg2NSAyLjk3YS42MjUuNjI1IDAgMCAxLS40OTktMS4xNDZjLjYzLS4yNzUgMS4xMTQtLjk3IDEuMTE0LTEuODI0IDAtLjg1NC0uNDgzLTEuNTUtMS4xMTQtMS44MjRhLjYyNS42MjUgMCAwIDEtLjMyNC0uODIzWk05Ljg4MSA0Ljk4M2EuMTE2LjExNiAwIDAgMSAuMDY1LS4wMzYuMTMyLjEzMiAwIDAgMSAuMDcyLjAxLjEzMi4xMzIgMCAwIDEgLjA1Ny4wNDQuMTEuMTEgMCAwIDEgLjAyLjA3djkuODY4YS4xMS4xMSAwIDAgMS0uMDIuMDcuMTMzLjEzMyAwIDAgMS0uMDU3LjA0NS4xMzIuMTMyIDAgMCAxLS4wNzIuMDEuMTE2LjExNiAwIDAgMS0uMDY1LS4wMzZsLTIuMDM2LTIuMDEyYTIuMTI1IDIuMTI1IDAgMCAwLTEuNDk0LS42MTNINC4xMjVhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1VjguNDg0YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgyLjIyNmMuNTYgMCAxLjA5Ni0uMjIgMS40OTQtLjYxM0w5Ljg4IDQuOTgzWm0xLjQ2My4wODljMC0xLjIyMi0xLjQ3My0xLjgzNy0yLjM0MS0uOTc4TDYuOTY2IDYuMTA2YS44NzUuODc1IDAgMCAxLS42MTUuMjUzSDQuMTI1QTIuMTI1IDIuMTI1IDAgMCAwIDIgOC40ODR2My4wNDRjMCAxLjE3My45NTEgMi4xMjUgMi4xMjUgMi4xMjVoMi4yMjZjLjIzIDAgLjQ1MS4wOS42MTUuMjUybDIuMDM3IDIuMDEyYy44NjkuODU4IDIuMzQxLjI0MyAyLjM0MS0uOTc4VjUuMDcyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-up',
        'staticon-VolumeUp',
        className
      ),
      ...props,
    })
);
VolumeUp.displayName = 'VolumeUp'

export default VolumeUp;
