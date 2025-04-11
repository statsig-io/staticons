
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.07-1.5a7.502 7.502 0 0 0 7.346-6.374l-1.117.788a3.75 3.75 0 0 1-4.36-.028l-.371-.268a3.547 3.547 0 0 1-1.445-3.26c.084-.77-.66-1.407-1.436-1.188-1.676.473-3.39-.773-3.39-2.542v-.471A7.486 7.486 0 0 0 4.5 12c0 .825.133 1.62.38 2.363h1.39a.75.75 0 0 0 .627-.338l.217-.33c.904-1.373 2.927-1.345 3.792.053l.443.715a5.75 5.75 0 0 1 .844 3.473L12.07 19.5Zm-1.493-.135.12-1.546c.07-.9-.148-1.799-.623-2.566l-.443-.716a.75.75 0 0 0-1.264-.017l-.217.33a2.25 2.25 0 0 1-1.88 1.013h-.7a7.508 7.508 0 0 0 5.007 3.502Zm6.857-6.677 2.03-1.43A7.5 7.5 0 0 0 8.798 5.216v1.412c0 .748.736 1.309 1.482 1.098 1.769-.499 3.538.936 3.334 2.795-.08.732.238 1.45.834 1.882l.37.268a2.25 2.25 0 0 0 2.616.017Z","clip-rule":"evenodd"}]]

/**
 * @component @name Public
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjFhOSA5IDAgMSAwIDAtMTggOSA5IDAgMCAwIDAgMThabS4wNy0xLjVhNy41MDIgNy41MDIgMCAwIDAgNy4zNDYtNi4zNzRsLTEuMTE3Ljc4OGEzLjc1IDMuNzUgMCAwIDEtNC4zNi0uMDI4bC0uMzcxLS4yNjhhMy41NDcgMy41NDcgMCAwIDEtMS40NDUtMy4yNmMuMDg0LS43Ny0uNjYtMS40MDctMS40MzYtMS4xODgtMS42NzYuNDczLTMuMzktLjc3My0zLjM5LTIuNTQydi0uNDcxQTcuNDg2IDcuNDg2IDAgMCAwIDQuNSAxMmMwIC44MjUuMTMzIDEuNjIuMzggMi4zNjNoMS4zOWEuNzUuNzUgMCAwIDAgLjYyNy0uMzM4bC4yMTctLjMzYy45MDQtMS4zNzMgMi45MjctMS4zNDUgMy43OTIuMDUzbC40NDMuNzE1YTUuNzUgNS43NSAwIDAgMSAuODQ0IDMuNDczTDEyLjA3IDE5LjVabS0xLjQ5My0uMTM1LjEyLTEuNTQ2Yy4wNy0uOS0uMTQ4LTEuNzk5LS42MjMtMi41NjZsLS40NDMtLjcxNmEuNzUuNzUgMCAwIDAtMS4yNjQtLjAxN2wtLjIxNy4zM2EyLjI1IDIuMjUgMCAwIDEtMS44OCAxLjAxM2gtLjdhNy41MDggNy41MDggMCAwIDAgNS4wMDcgMy41MDJabTYuODU3LTYuNjc3IDIuMDMtMS40M0E3LjUgNy41IDAgMCAwIDguNzk4IDUuMjE2djEuNDEyYzAgLjc0OC43MzYgMS4zMDkgMS40ODIgMS4wOTggMS43NjktLjQ5OSAzLjUzOC45MzYgMy4zMzQgMi43OTUtLjA4LjczMi4yMzggMS40NS44MzQgMS44ODJsLjM3LjI2OGEyLjI1IDIuMjUgMCAwIDAgMi42MTYuMDE3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Public = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-public',
        'staticon-Public',
        className
      ),
      ...props,
    })
);
Public.displayName = 'Public'

export default Public;
