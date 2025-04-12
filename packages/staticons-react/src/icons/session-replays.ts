
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M13.145 3.44v-.744a.625.625 0 1 1 1.249 0V4.82a.774.774 0 0 1-.775.774h-2.122a.625.625 0 1 1 0-1.249h.779A5.625 5.625 0 1 0 13.626 8v-.175a.625.625 0 0 1 1.248-.038c.002.056.001.125 0 .173V8a6.875 6.875 0 1 1-1.73-4.559Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.057 7.042a1.124 1.124 0 0 1 0 1.915L7.31 11.261a1.124 1.124 0 0 1-1.713-.958V5.696c0-.88.964-1.419 1.713-.958l3.746 2.304Zm-.828.957L6.848 5.92v4.16L10.229 8Z","clip-rule":"evenodd"}]]

/**
 * @component @name SessionReplays
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjE0NSAzLjQ0di0uNzQ0YS42MjUuNjI1IDAgMSAxIDEuMjQ5IDBWNC44MmEuNzc0Ljc3NCAwIDAgMS0uNzc1Ljc3NGgtMi4xMjJhLjYyNS42MjUgMCAxIDEgMC0xLjI0OWguNzc5QTUuNjI1IDUuNjI1IDAgMSAwIDEzLjYyNiA4di0uMTc1YS42MjUuNjI1IDAgMCAxIDEuMjQ4LS4wMzhjLjAwMi4wNTYuMDAxLjEyNSAwIC4xNzNWOGE2Ljg3NSA2Ljg3NSAwIDEgMS0xLjczLTQuNTU5WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjA1NyA3LjA0MmExLjEyNCAxLjEyNCAwIDAgMSAwIDEuOTE1TDcuMzEgMTEuMjYxYTEuMTI0IDEuMTI0IDAgMCAxLTEuNzEzLS45NThWNS42OTZjMC0uODguOTY0LTEuNDE5IDEuNzEzLS45NThsMy43NDYgMi4zMDRabS0uODI4Ljk1N0w2Ljg0OCA1LjkydjQuMTZMMTAuMjI5IDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
