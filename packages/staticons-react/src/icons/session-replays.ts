
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M15.955 5.04V3.953a.624.624 0 1 1 1.248 0v2.346a.87.87 0 0 1-.87.869h-2.345a.624.624 0 0 1 0-1.248h1.077A6.502 6.502 0 1 0 16.503 10v-.204a.624.624 0 1 1 1.247-.037c.002.061 0 .136 0 .19V10a7.75 7.75 0 1 1-1.795-4.96Z"}],["path",{"fill-rule":"evenodd","d":"M13.316 8.83a1.372 1.372 0 0 1 0 2.338l-3.999 2.46a1.372 1.372 0 0 1-2.09-1.17V7.54a1.372 1.372 0 0 1 2.09-1.169l4 2.46Zm-.653 1.276a.125.125 0 0 0 0-.213l-3.999-2.46a.125.125 0 0 0-.19.107v4.919c0 .097.107.157.19.106l3.999-2.46Z","clip-rule":"evenodd"}]]

/**
 * @component @name SessionReplays
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE1Ljk1NSA1LjA0VjMuOTUzYS42MjQuNjI0IDAgMSAxIDEuMjQ4IDB2Mi4zNDZhLjg3Ljg3IDAgMCAxLS44Ny44NjloLTIuMzQ1YS42MjQuNjI0IDAgMCAxIDAtMS4yNDhoMS4wNzdBNi41MDIgNi41MDIgMCAxIDAgMTYuNTAzIDEwdi0uMjA0YS42MjQuNjI0IDAgMSAxIDEuMjQ3LS4wMzdjLjAwMi4wNjEgMCAuMTM2IDAgLjE5VjEwYTcuNzUgNy43NSAwIDEgMS0xLjc5NS00Ljk2WiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjMxNiA4LjgzYTEuMzcyIDEuMzcyIDAgMCAxIDAgMi4zMzhsLTMuOTk5IDIuNDZhMS4zNzIgMS4zNzIgMCAwIDEtMi4wOS0xLjE3VjcuNTRhMS4zNzIgMS4zNzIgMCAwIDEgMi4wOS0xLjE2OWw0IDIuNDZabS0uNjUzIDEuMjc2YS4xMjUuMTI1IDAgMCAwIDAtLjIxM2wtMy45OTktMi40NmEuMTI1LjEyNSAwIDAgMC0uMTkuMTA3djQuOTE5YzAgLjA5Ny4xMDcuMTU3LjE5LjEwNmwzLjk5OS0yLjQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SessionReplays = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-session-replays',
        'staticon-SessionReplays',
        className
      ),
      ...props,
    })
);
SessionReplays.displayName = 'SessionReplays'

export default SessionReplays;
