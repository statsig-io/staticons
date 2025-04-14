
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.5 4.123c0-.345.28-.625.625-.625h1.177c.428 0 .775.347.775.775v3.884a.625.625 0 1 1-1.25 0V4.748h-.702a.625.625 0 0 1-.625-.625Zm5.44 1.219c0-.345.279-.625.624-.625h8.312a.625.625 0 1 1 0 1.25H8.564a.625.625 0 0 1-.625-.625Zm0 4.63c0-.345.279-.625.624-.625h8.312a.625.625 0 1 1 0 1.25H8.564a.625.625 0 0 1-.625-.625Zm.624 4.015a.625.625 0 1 0 0 1.25h8.312a.625.625 0 1 0 0-1.25H8.564Zm-3.853-2.35c-.92-.375-1.817.11-2.14.73a.625.625 0 1 0 1.108.578.47.47 0 0 1 .56-.15.36.36 0 0 1 .195.236c.022.086.025.232-.154.424a5.26 5.26 0 0 1-.312.284c-.147.129-.328.288-.504.465-.328.327-.757.823-.854 1.422-.087.53.357.875.754.875H5.11a.625.625 0 1 0 0-1.25h-.917c.046-.052.098-.107.155-.163a9.26 9.26 0 0 1 .444-.409l.032-.028c.127-.111.27-.235.37-.343.452-.485.586-1.065.45-1.59a1.61 1.61 0 0 0-.933-1.08Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatListNumbered
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDQuMTIzYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDEuMTc3Yy40MjggMCAuNzc1LjM0Ny43NzUuNzc1djMuODg0YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY0Ljc0OGgtLjcwMmEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabTUuNDQgMS4yMTljMC0uMzQ1LjI3OS0uNjI1LjYyNC0uNjI1aDguMzEyYS42MjUuNjI1IDAgMSAxIDAgMS4yNUg4LjU2NGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabTAgNC42M2MwLS4zNDUuMjc5LS42MjUuNjI0LS42MjVoOC4zMTJhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDguNTY0YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptLjYyNCA0LjAxNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoOC4zMTJhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDguNTY0Wm0tMy44NTMtMi4zNWMtLjkyLS4zNzUtMS44MTcuMTEtMi4xNC43M2EuNjI1LjYyNSAwIDEgMCAxLjEwOC41NzguNDcuNDcgMCAwIDEgLjU2LS4xNS4zNi4zNiAwIDAgMSAuMTk1LjIzNmMuMDIyLjA4Ni4wMjUuMjMyLS4xNTQuNDI0YTUuMjYgNS4yNiAwIDAgMS0uMzEyLjI4NGMtLjE0Ny4xMjktLjMyOC4yODgtLjUwNC40NjUtLjMyOC4zMjctLjc1Ny44MjMtLjg1NCAxLjQyMi0uMDg3LjUzLjM1Ny44NzUuNzU0Ljg3NUg1LjExYS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtLjkxN2MuMDQ2LS4wNTIuMDk4LS4xMDcuMTU1LS4xNjNhOS4yNiA5LjI2IDAgMCAxIC40NDQtLjQwOWwuMDMyLS4wMjhjLjEyNy0uMTExLjI3LS4yMzUuMzctLjM0My40NTItLjQ4NS41ODYtMS4wNjUuNDUtMS41OWExLjYxIDEuNjEgMCAwIDAtLjkzMy0xLjA4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatListNumbered = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-list-numbered',
        'staticon-FormatListNumbered',
        className
      ),
      ...props,
    })
);
FormatListNumbered.displayName = 'FormatListNumbered'

export default FormatListNumbered;
