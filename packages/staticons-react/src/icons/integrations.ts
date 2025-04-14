
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.761 3.375a1.393 1.393 0 0 0-1.36 1.695c.104.467-.215 1.052-.827 1.052H4.592c-.597 0-1.081.484-1.081 1.081v1.53c.036-.002.072-.002.108-.002a2.643 2.643 0 1 1-.108 5.283v1.53c0 .597.484 1.081 1.081 1.081h1.58a2.644 2.644 0 0 1 5.18 0h1.579a1.08 1.08 0 0 0 1.081-1.08V13.56c0-.612.586-.93 1.054-.827a1.393 1.393 0 1 0 0-2.719c-.468.104-1.054-.214-1.054-.827V7.203a1.08 1.08 0 0 0-1.081-1.08h-1.982c-.612 0-.93-.586-.828-1.053a1.393 1.393 0 0 0-1.36-1.695Zm0-1.25a2.643 2.643 0 0 1 2.641 2.747h1.529a2.331 2.331 0 0 1 2.331 2.331v1.53l.108-.002a2.643 2.643 0 1 1-.108 5.283v1.53a2.331 2.331 0 0 1-2.331 2.331h-2.056a.722.722 0 0 1-.72-.723 1.393 1.393 0 1 0-2.786 0c0 .38-.303.723-.721.723H4.592a2.331 2.331 0 0 1-2.331-2.33V13.56c0-.612.585-.931 1.053-.827a1.393 1.393 0 1 0 0-2.719c-.466.104-1.053-.213-1.053-.827V7.203a2.331 2.331 0 0 1 2.331-2.33h1.529a2.643 2.643 0 0 1 2.64-2.747Z","clip-rule":"evenodd"}]]

/**
 * @component @name Integrations
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC43NjEgMy4zNzVhMS4zOTMgMS4zOTMgMCAwIDAtMS4zNiAxLjY5NWMuMTA0LjQ2Ny0uMjE1IDEuMDUyLS44MjcgMS4wNTJINC41OTJjLS41OTcgMC0xLjA4MS40ODQtMS4wODEgMS4wODF2MS41M2MuMDM2LS4wMDIuMDcyLS4wMDIuMTA4LS4wMDJhMi42NDMgMi42NDMgMCAxIDEtLjEwOCA1LjI4M3YxLjUzYzAgLjU5Ny40ODQgMS4wODEgMS4wODEgMS4wODFoMS41OGEyLjY0NCAyLjY0NCAwIDAgMSA1LjE4IDBoMS41NzlhMS4wOCAxLjA4IDAgMCAwIDEuMDgxLTEuMDhWMTMuNTZjMC0uNjEyLjU4Ni0uOTMgMS4wNTQtLjgyN2ExLjM5MyAxLjM5MyAwIDEgMCAwLTIuNzE5Yy0uNDY4LjEwNC0xLjA1NC0uMjE0LTEuMDU0LS44MjdWNy4yMDNhMS4wOCAxLjA4IDAgMCAwLTEuMDgxLTEuMDhoLTEuOTgyYy0uNjEyIDAtLjkzLS41ODYtLjgyOC0xLjA1M2ExLjM5MyAxLjM5MyAwIDAgMC0xLjM2LTEuNjk1Wm0wLTEuMjVhMi42NDMgMi42NDMgMCAwIDEgMi42NDEgMi43NDdoMS41MjlhMi4zMzEgMi4zMzEgMCAwIDEgMi4zMzEgMi4zMzF2MS41M2wuMTA4LS4wMDJhMi42NDMgMi42NDMgMCAxIDEtLjEwOCA1LjI4M3YxLjUzYTIuMzMxIDIuMzMxIDAgMCAxLTIuMzMxIDIuMzMxaC0yLjA1NmEuNzIyLjcyMiAwIDAgMS0uNzItLjcyMyAxLjM5MyAxLjM5MyAwIDEgMC0yLjc4NiAwYzAgLjM4LS4zMDMuNzIzLS43MjEuNzIzSDQuNTkyYTIuMzMxIDIuMzMxIDAgMCAxLTIuMzMxLTIuMzNWMTMuNTZjMC0uNjEyLjU4NS0uOTMxIDEuMDUzLS44MjdhMS4zOTMgMS4zOTMgMCAxIDAgMC0yLjcxOWMtLjQ2Ni4xMDQtMS4wNTMtLjIxMy0xLjA1My0uODI3VjcuMjAzYTIuMzMxIDIuMzMxIDAgMCAxIDIuMzMxLTIuMzNoMS41MjlhMi42NDMgMi42NDMgMCAwIDEgMi42NC0yLjc0N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Integrations = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-integrations',
        'staticon-Integrations',
        className
      ),
      ...props,
    })
);
Integrations.displayName = 'Integrations'

export default Integrations;
