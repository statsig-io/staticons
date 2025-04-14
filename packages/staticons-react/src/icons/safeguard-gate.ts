
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.274 2.415c-.769-.516-1.796-.47-2.53.046-.992.698-2.515 1.49-4.103 1.728-.935.14-1.766.92-1.766 1.968v3.166c0 2.803 1.435 4.97 2.987 6.415a11.014 11.014 0 0 0 2.311 1.656c.357.189.694.336.993.438.287.098.58.168.835.168s.548-.07.835-.168a7.08 7.08 0 0 0 .992-.438 11.01 11.01 0 0 0 2.31-1.656c1.552-1.445 2.987-3.612 2.987-6.415V6.152c0-1.055-.845-1.817-1.758-1.98-1.582-.283-3.088-1.083-4.093-1.757Zm-1.81 1.068c.334-.235.798-.242 1.114-.03 1.079.724 2.75 1.624 4.569 1.95.446.08.728.423.728.749v3.17c0 2.348-1.198 4.207-2.588 5.5a9.762 9.762 0 0 1-2.043 1.467 5.79 5.79 0 0 1-.812.36 1.59 1.59 0 0 1-.431.101c-.053 0-.194-.02-.432-.1a5.795 5.795 0 0 1-.812-.361 9.764 9.764 0 0 1-2.043-1.466c-1.39-1.295-2.59-3.154-2.59-5.5V6.157c0-.338.283-.67.702-.732 1.843-.275 3.548-1.174 4.638-1.942Zm2.194 6.04a1.658 1.658 0 1 1-3.317 0 1.658 1.658 0 0 1 3.317 0Zm1.25 0a2.908 2.908 0 1 1-5.817 0 2.908 2.908 0 0 1 5.817 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name SafeguardGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjc0IDIuNDE1Yy0uNzY5LS41MTYtMS43OTYtLjQ3LTIuNTMuMDQ2LS45OTIuNjk4LTIuNTE1IDEuNDktNC4xMDMgMS43MjgtLjkzNS4xNC0xLjc2Ni45Mi0xLjc2NiAxLjk2OHYzLjE2NmMwIDIuODAzIDEuNDM1IDQuOTcgMi45ODcgNi40MTVhMTEuMDE0IDExLjAxNCAwIDAgMCAyLjMxMSAxLjY1NmMuMzU3LjE4OS42OTQuMzM2Ljk5My40MzguMjg3LjA5OC41OC4xNjguODM1LjE2OHMuNTQ4LS4wNy44MzUtLjE2OGE3LjA4IDcuMDggMCAwIDAgLjk5Mi0uNDM4IDExLjAxIDExLjAxIDAgMCAwIDIuMzEtMS42NTZjMS41NTItMS40NDUgMi45ODctMy42MTIgMi45ODctNi40MTVWNi4xNTJjMC0xLjA1NS0uODQ1LTEuODE3LTEuNzU4LTEuOTgtMS41ODItLjI4My0zLjA4OC0xLjA4My00LjA5My0xLjc1N1ptLTEuODEgMS4wNjhjLjMzNC0uMjM1Ljc5OC0uMjQyIDEuMTE0LS4wMyAxLjA3OS43MjQgMi43NSAxLjYyNCA0LjU2OSAxLjk1LjQ0Ni4wOC43MjguNDIzLjcyOC43NDl2My4xN2MwIDIuMzQ4LTEuMTk4IDQuMjA3LTIuNTg4IDUuNWE5Ljc2MiA5Ljc2MiAwIDAgMS0yLjA0MyAxLjQ2NyA1Ljc5IDUuNzkgMCAwIDEtLjgxMi4zNiAxLjU5IDEuNTkgMCAwIDEtLjQzMS4xMDFjLS4wNTMgMC0uMTk0LS4wMi0uNDMyLS4xYTUuNzk1IDUuNzk1IDAgMCAxLS44MTItLjM2MSA5Ljc2NCA5Ljc2NCAwIDAgMS0yLjA0My0xLjQ2NmMtMS4zOS0xLjI5NS0yLjU5LTMuMTU0LTIuNTktNS41VjYuMTU3YzAtLjMzOC4yODMtLjY3LjcwMi0uNzMyIDEuODQzLS4yNzUgMy41NDgtMS4xNzQgNC42MzgtMS45NDJabTIuMTk0IDYuMDRhMS42NTggMS42NTggMCAxIDEtMy4zMTcgMCAxLjY1OCAxLjY1OCAwIDAgMSAzLjMxNyAwWm0xLjI1IDBhMi45MDggMi45MDggMCAxIDEtNS44MTcgMCAyLjkwOCAyLjkwOCAwIDAgMSA1LjgxNyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SafeguardGate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-safeguard-gate',
        'staticon-SafeguardGate',
        className
      ),
      ...props,
    })
);
SafeguardGate.displayName = 'SafeguardGate'

export default SafeguardGate;
