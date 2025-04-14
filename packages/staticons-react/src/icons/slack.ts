
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M6.263 3.611c0 .887.72 1.613 1.606 1.613h1.616v-1.62a1.61 1.61 0 0 0-3.222.007Zm5.866-1.506c-.887 0-1.613.719-1.613 1.605v4.062a1.612 1.612 0 0 0 3.225 0V3.71c0-.886-.726-1.605-1.612-1.605Zm4.259 4.158c-.887 0-1.613.72-1.613 1.606v1.616h1.62a1.61 1.61 0 0 0-.007-3.222ZM9.483 16.288c0 .887-.725 1.606-1.612 1.606a1.611 1.611 0 0 1-1.612-1.606v-4.061c0-.887.725-1.606 1.612-1.606.887 0 1.612.719 1.612 1.606v4.061Zm-5.871-2.552c.887 0 1.613-.719 1.613-1.606v-1.615h-1.62a1.61 1.61 0 0 0 .007 3.22Zm12.677-3.219a1.612 1.612 0 0 1 0 3.224h-4.062a1.611 1.611 0 0 1-1.605-1.612 1.61 1.61 0 0 1 1.605-1.612h4.062Zm-2.553 5.87a1.61 1.61 0 0 0-1.605-1.612h-1.616v1.619a1.61 1.61 0 0 0 3.221-.007ZM3.71 9.483A1.611 1.611 0 0 1 2.106 7.87c0-.886.719-1.612 1.606-1.612h4.061a1.612 1.612 0 0 1 0 3.225H3.711Z"}]]

/**
 * @component @name Slack
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTYuMjYzIDMuNjExYzAgLjg4Ny43MiAxLjYxMyAxLjYwNiAxLjYxM2gxLjYxNnYtMS42MmExLjYxIDEuNjEgMCAwIDAtMy4yMjIuMDA3Wm01Ljg2Ni0xLjUwNmMtLjg4NyAwLTEuNjEzLjcxOS0xLjYxMyAxLjYwNXY0LjA2MmExLjYxMiAxLjYxMiAwIDAgMCAzLjIyNSAwVjMuNzFjMC0uODg2LS43MjYtMS42MDUtMS42MTItMS42MDVabTQuMjU5IDQuMTU4Yy0uODg3IDAtMS42MTMuNzItMS42MTMgMS42MDZ2MS42MTZoMS42MmExLjYxIDEuNjEgMCAwIDAtLjAwNy0zLjIyMlpNOS40ODMgMTYuMjg4YzAgLjg4Ny0uNzI1IDEuNjA2LTEuNjEyIDEuNjA2YTEuNjExIDEuNjExIDAgMCAxLTEuNjEyLTEuNjA2di00LjA2MWMwLS44ODcuNzI1LTEuNjA2IDEuNjEyLTEuNjA2Ljg4NyAwIDEuNjEyLjcxOSAxLjYxMiAxLjYwNnY0LjA2MVptLTUuODcxLTIuNTUyYy44ODcgMCAxLjYxMy0uNzE5IDEuNjEzLTEuNjA2di0xLjYxNWgtMS42MmExLjYxIDEuNjEgMCAwIDAgLjAwNyAzLjIyWm0xMi42NzctMy4yMTlhMS42MTIgMS42MTIgMCAwIDEgMCAzLjIyNGgtNC4wNjJhMS42MTEgMS42MTEgMCAwIDEtMS42MDUtMS42MTIgMS42MSAxLjYxIDAgMCAxIDEuNjA1LTEuNjEyaDQuMDYyWm0tMi41NTMgNS44N2ExLjYxIDEuNjEgMCAwIDAtMS42MDUtMS42MTJoLTEuNjE2djEuNjE5YTEuNjEgMS42MSAwIDAgMCAzLjIyMS0uMDA3Wk0zLjcxIDkuNDgzQTEuNjExIDEuNjExIDAgMCAxIDIuMTA2IDcuODdjMC0uODg2LjcxOS0xLjYxMiAxLjYwNi0xLjYxMmg0LjA2MWExLjYxMiAxLjYxMiAwIDAgMSAwIDMuMjI1SDMuNzExWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Slack = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-slack',
        'staticon-Slack',
        className
      ),
      ...props,
    })
);
Slack.displayName = 'Slack'

export default Slack;
