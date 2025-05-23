
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.291 2.667c.32-.127.684.03.812.35l.71 1.79a3.18 3.18 0 0 1 .173-.006h.547c.053 0 .106.002.159.005l.714-1.79a.625.625 0 1 1 1.161.464l-.687 1.722A2.464 2.464 0 0 1 17 9.25l-.51.377c-.432.32-.73.789-.837 1.316l-.551 2.725a4.005 4.005 0 0 1-.93 1.865l-.44.495a4.005 4.005 0 0 1-2.995 1.347H3.963c-.635 0-1.245-.276-1.594-.749a1.374 1.374 0 0 1-.278-.886 1.45 1.45 0 0 1 .41-.918c.476-.51 1.118-.942 1.81-1.25a4.623 4.623 0 0 1-1.013-.9c-.852-1.016-1.296-2.388-1.296-3.86 0-3.04 2.45-5.512 5.48-5.512 2.086 0 3.978 1.107 4.932 2.824.306-.43.714-.772 1.18-1.001l-.653-1.645a.625.625 0 0 1 .35-.812ZM3.251 8.814c.001-2.358 1.9-4.263 4.232-4.263 2.376 0 4.33 1.79 4.33 4.106v.025c.026.623-.1 1.494-.527 2.247a3.14 3.14 0 0 1-.64.798 4.445 4.445 0 0 0 .14-1.966c-.189-1.224-.907-2.415-2.034-2.792-2.049-.685-3.453.686-3.635 1.91-.239 1.604.88 2.615 1.91 2.827a.625.625 0 0 0 .254-1.224c-.508-.105-1.05-.592-.928-1.42.077-.517.75-1.326 2.003-.907.523.174 1.047.84 1.194 1.795.14.914-.1 1.942-.905 2.704-.13.106-.36.216-.68.298a4.227 4.227 0 0 1-1.028.125c-1.156 0-2.058-.465-2.682-1.208-.632-.754-1.003-1.826-1.003-3.055Zm5.027 5.349c.363-.094.736-.238 1.043-.454 1.52-.309 2.486-1.17 3.051-2.162.567-.996.721-2.106.69-2.903a5.33 5.33 0 0 0-.077-.898l.261-.574a1.91 1.91 0 0 1 1.74-1.12h.547a1.217 1.217 0 0 1 .723 2.194l-.51.377a3.423 3.423 0 0 0-1.319 2.074l-.55 2.725a2.764 2.764 0 0 1-.64 1.283l-.44.494a2.755 2.755 0 0 1-2.06.927H3.963c-.299 0-.509-.134-.588-.241-.036-.048-.036-.075-.035-.082 0-.005.002-.048.075-.127.732-.784 2.043-1.35 3.054-1.35.04 0 .08-.003.117-.01a5.48 5.48 0 0 0 1.692-.153Z","clip-rule":"evenodd"}]]

/**
 * @component @name Slow
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMjkxIDIuNjY3Yy4zMi0uMTI3LjY4NC4wMy44MTIuMzVsLjcxIDEuNzlhMy4xOCAzLjE4IDAgMCAxIC4xNzMtLjAwNmguNTQ3Yy4wNTMgMCAuMTA2LjAwMi4xNTkuMDA1bC43MTQtMS43OWEuNjI1LjYyNSAwIDEgMSAxLjE2MS40NjRsLS42ODcgMS43MjJBMi40NjQgMi40NjQgMCAwIDEgMTcgOS4yNWwtLjUxLjM3N2MtLjQzMi4zMi0uNzMuNzg5LS44MzcgMS4zMTZsLS41NTEgMi43MjVhNC4wMDUgNC4wMDUgMCAwIDEtLjkzIDEuODY1bC0uNDQuNDk1YTQuMDA1IDQuMDA1IDAgMCAxLTIuOTk1IDEuMzQ3SDMuOTYzYy0uNjM1IDAtMS4yNDUtLjI3Ni0xLjU5NC0uNzQ5YTEuMzc0IDEuMzc0IDAgMCAxLS4yNzgtLjg4NiAxLjQ1IDEuNDUgMCAwIDEgLjQxLS45MThjLjQ3Ni0uNTEgMS4xMTgtLjk0MiAxLjgxLTEuMjVhNC42MjMgNC42MjMgMCAwIDEtMS4wMTMtLjljLS44NTItMS4wMTYtMS4yOTYtMi4zODgtMS4yOTYtMy44NiAwLTMuMDQgMi40NS01LjUxMiA1LjQ4LTUuNTEyIDIuMDg2IDAgMy45NzggMS4xMDcgNC45MzIgMi44MjQuMzA2LS40My43MTQtLjc3MiAxLjE4LTEuMDAxbC0uNjUzLTEuNjQ1YS42MjUuNjI1IDAgMCAxIC4zNS0uODEyWk0zLjI1MSA4LjgxNGMuMDAxLTIuMzU4IDEuOS00LjI2MyA0LjIzMi00LjI2MyAyLjM3NiAwIDQuMzMgMS43OSA0LjMzIDQuMTA2di4wMjVjLjAyNi42MjMtLjEgMS40OTQtLjUyNyAyLjI0N2EzLjE0IDMuMTQgMCAwIDEtLjY0Ljc5OCA0LjQ0NSA0LjQ0NSAwIDAgMCAuMTQtMS45NjZjLS4xODktMS4yMjQtLjkwNy0yLjQxNS0yLjAzNC0yLjc5Mi0yLjA0OS0uNjg1LTMuNDUzLjY4Ni0zLjYzNSAxLjkxLS4yMzkgMS42MDQuODggMi42MTUgMS45MSAyLjgyN2EuNjI1LjYyNSAwIDAgMCAuMjU0LTEuMjI0Yy0uNTA4LS4xMDUtMS4wNS0uNTkyLS45MjgtMS40Mi4wNzctLjUxNy43NS0xLjMyNiAyLjAwMy0uOTA3LjUyMy4xNzQgMS4wNDcuODQgMS4xOTQgMS43OTUuMTQuOTE0LS4xIDEuOTQyLS45MDUgMi43MDQtLjEzLjEwNi0uMzYuMjE2LS42OC4yOThhNC4yMjcgNC4yMjcgMCAwIDEtMS4wMjguMTI1Yy0xLjE1NiAwLTIuMDU4LS40NjUtMi42ODItMS4yMDgtLjYzMi0uNzU0LTEuMDAzLTEuODI2LTEuMDAzLTMuMDU1Wm01LjAyNyA1LjM0OWMuMzYzLS4wOTQuNzM2LS4yMzggMS4wNDMtLjQ1NCAxLjUyLS4zMDkgMi40ODYtMS4xNyAzLjA1MS0yLjE2Mi41NjctLjk5Ni43MjEtMi4xMDYuNjktMi45MDNhNS4zMyA1LjMzIDAgMCAwLS4wNzctLjg5OGwuMjYxLS41NzRhMS45MSAxLjkxIDAgMCAxIDEuNzQtMS4xMmguNTQ3YTEuMjE3IDEuMjE3IDAgMCAxIC43MjMgMi4xOTRsLS41MS4zNzdhMy40MjMgMy40MjMgMCAwIDAtMS4zMTkgMi4wNzRsLS41NSAyLjcyNWEyLjc2NCAyLjc2NCAwIDAgMS0uNjQgMS4yODNsLS40NC40OTRhMi43NTUgMi43NTUgMCAwIDEtMi4wNi45MjdIMy45NjNjLS4yOTkgMC0uNTA5LS4xMzQtLjU4OC0uMjQxLS4wMzYtLjA0OC0uMDM2LS4wNzUtLjAzNS0uMDgyIDAtLjAwNS4wMDItLjA0OC4wNzUtLjEyNy43MzItLjc4NCAyLjA0My0xLjM1IDMuMDU0LTEuMzUuMDQgMCAuMDgtLjAwMy4xMTctLjAxYTUuNDggNS40OCAwIDAgMCAxLjY5Mi0uMTUzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Slow = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-slow',
        'staticon-Slow',
        className
      ),
      ...props,
    })
);
Slow.displayName = 'Slow'

export default Slow;
