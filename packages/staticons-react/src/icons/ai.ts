
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m17.61 11.653.832-2.08a.838.838 0 0 1 .467-.467l2.08-.832c.85-.34.85-1.544 0-1.884l-2.08-.832a.838.838 0 0 1-.467-.467l-.832-2.08c-.34-.85-1.544-.85-1.884 0l-.832 2.08a.838.838 0 0 1-.467.467l-2.08.832c-.85.34-.85 1.544 0 1.884l2.08.832a.838.838 0 0 1 .467.467l.832 2.08c.34.85 1.544.85 1.884 0Zm-.942-1.684-.381-.953a2.339 2.339 0 0 0-1.303-1.303l-.953-.381.953-.381a2.339 2.339 0 0 0 1.303-1.303l.381-.953.381.953a2.338 2.338 0 0 0 1.303 1.303l.953.381-.953.381a2.339 2.339 0 0 0-1.303 1.303l-.381.953ZM2.373 17.876a3.75 3.75 0 0 0 3.75 3.75h10.881a3.75 3.75 0 0 0 3.75-3.75v-5.731a.75.75 0 0 0-1.5 0v5.731a2.25 2.25 0 0 1-2.25 2.25H6.123a2.25 2.25 0 0 1-2.25-2.25V7.577a2.25 2.25 0 0 1 2.25-2.25h5.15a.75.75 0 0 0 0-1.5h-5.15a3.75 3.75 0 0 0-3.75 3.75v10.3Zm11.275-6.007a.75.75 0 0 0-1.5 0v1.72a.75.75 0 1 0 1.5 0v-1.72Zm-6.765-.736a.75.75 0 0 1 .75.75v1.82a.75.75 0 0 1-1.5 0v-1.82a.75.75 0 0 1 .75-.75Zm1.744 5.152a.75.75 0 0 0-1.061 1.06 3.326 3.326 0 0 0 4.7 0 .75.75 0 1 0-1.06-1.06 1.827 1.827 0 0 1-2.58 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Ai
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTcuNjEgMTEuNjUzLjgzMi0yLjA4YS44MzguODM4IDAgMCAxIC40NjctLjQ2N2wyLjA4LS44MzJjLjg1LS4zNC44NS0xLjU0NCAwLTEuODg0bC0yLjA4LS44MzJhLjgzOC44MzggMCAwIDEtLjQ2Ny0uNDY3bC0uODMyLTIuMDhjLS4zNC0uODUtMS41NDQtLjg1LTEuODg0IDBsLS44MzIgMi4wOGEuODM4LjgzOCAwIDAgMS0uNDY3LjQ2N2wtMi4wOC44MzJjLS44NS4zNC0uODUgMS41NDQgMCAxLjg4NGwyLjA4LjgzMmEuODM4LjgzOCAwIDAgMSAuNDY3LjQ2N2wuODMyIDIuMDhjLjM0Ljg1IDEuNTQ0Ljg1IDEuODg0IDBabS0uOTQyLTEuNjg0LS4zODEtLjk1M2EyLjMzOSAyLjMzOSAwIDAgMC0xLjMwMy0xLjMwM2wtLjk1My0uMzgxLjk1My0uMzgxYTIuMzM5IDIuMzM5IDAgMCAwIDEuMzAzLTEuMzAzbC4zODEtLjk1My4zODEuOTUzYTIuMzM4IDIuMzM4IDAgMCAwIDEuMzAzIDEuMzAzbC45NTMuMzgxLS45NTMuMzgxYTIuMzM5IDIuMzM5IDAgMCAwLTEuMzAzIDEuMzAzbC0uMzgxLjk1M1pNMi4zNzMgMTcuODc2YTMuNzUgMy43NSAwIDAgMCAzLjc1IDMuNzVoMTAuODgxYTMuNzUgMy43NSAwIDAgMCAzLjc1LTMuNzV2LTUuNzMxYS43NS43NSAwIDAgMC0xLjUgMHY1LjczMWEyLjI1IDIuMjUgMCAwIDEtMi4yNSAyLjI1SDYuMTIzYTIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjVWNy41NzdhMi4yNSAyLjI1IDAgMCAxIDIuMjUtMi4yNWg1LjE1YS43NS43NSAwIDAgMCAwLTEuNWgtNS4xNWEzLjc1IDMuNzUgMCAwIDAtMy43NSAzLjc1djEwLjNabTExLjI3NS02LjAwN2EuNzUuNzUgMCAwIDAtMS41IDB2MS43MmEuNzUuNzUgMCAxIDAgMS41IDB2LTEuNzJabS02Ljc2NS0uNzM2YS43NS43NSAwIDAgMSAuNzUuNzV2MS44MmEuNzUuNzUgMCAwIDEtMS41IDB2LTEuODJhLjc1Ljc1IDAgMCAxIC43NS0uNzVabTEuNzQ0IDUuMTUyYS43NS43NSAwIDAgMC0xLjA2MSAxLjA2IDMuMzI2IDMuMzI2IDAgMCAwIDQuNyAwIC43NS43NSAwIDEgMC0xLjA2LTEuMDYgMS44MjcgMS44MjcgMCAwIDEtMi41OCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Ai = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-ai',
        'staticon-Ai',
        className
      ),
      ...props,
    })
);
Ai.displayName = 'Ai'

export default Ai;
