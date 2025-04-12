
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.118.684a.625.625 0 0 1 .884 0l1.472 1.472a.775.775 0 0 1 0 1.096L9.002 4.724a.625.625 0 0 1-.884-.884l.483-.482a6.253 6.253 0 0 0-6.221 8.956.625.625 0 0 1-1.124.547A7.503 7.503 0 0 1 8.658 2.108l-.54-.54a.625.625 0 0 1 0-.884Zm3.395 2.922a.625.625 0 0 1 .873-.138 7.558 7.558 0 0 1 2.37 9.378.625.625 0 1 1-1.126-.545 6.309 6.309 0 0 0-1.98-7.822.625.625 0 0 1-.137-.873ZM8.989 6.5a1.125 1.125 0 0 0-2.005 0l-.957 1.882-2.085.328a1.125 1.125 0 0 0-.62 1.908l1.494 1.491-.332 2.085a1.125 1.125 0 0 0 1.623 1.178l1.88-.96 1.88.96c.82.419 1.767-.27 1.622-1.178l-.331-2.085 1.493-1.491c.651-.65.29-1.764-.62-1.908l-2.085-.328L8.99 6.5ZM7.031 9.165l.956-1.878.955 1.878a.775.775 0 0 0 .57.415l2.082.328-1.491 1.489a.775.775 0 0 0-.218.67l.331 2.081-1.877-.958a.775.775 0 0 0-.705 0l-1.877.958.332-2.08a.775.775 0 0 0-.218-.671l-1.492-1.49 2.082-.327a.775.775 0 0 0 .57-.415Z","clip-rule":"evenodd"}]]

/**
 * @component @name Autotune
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xMTguNjg0YS42MjUuNjI1IDAgMCAxIC44ODQgMGwxLjQ3MiAxLjQ3MmEuNzc1Ljc3NSAwIDAgMSAwIDEuMDk2TDkuMDAyIDQuNzI0YS42MjUuNjI1IDAgMCAxLS44ODQtLjg4NGwuNDgzLS40ODJhNi4yNTMgNi4yNTMgMCAwIDAtNi4yMjEgOC45NTYuNjI1LjYyNSAwIDAgMS0xLjEyNC41NDdBNy41MDMgNy41MDMgMCAwIDEgOC42NTggMi4xMDhsLS41NC0uNTRhLjYyNS42MjUgMCAwIDEgMC0uODg0Wm0zLjM5NSAyLjkyMmEuNjI1LjYyNSAwIDAgMSAuODczLS4xMzggNy41NTggNy41NTggMCAwIDEgMi4zNyA5LjM3OC42MjUuNjI1IDAgMSAxLTEuMTI2LS41NDUgNi4zMDkgNi4zMDkgMCAwIDAtMS45OC03LjgyMi42MjUuNjI1IDAgMCAxLS4xMzctLjg3M1pNOC45ODkgNi41YTEuMTI1IDEuMTI1IDAgMCAwLTIuMDA1IDBsLS45NTcgMS44ODItMi4wODUuMzI4YTEuMTI1IDEuMTI1IDAgMCAwLS42MiAxLjkwOGwxLjQ5NCAxLjQ5MS0uMzMyIDIuMDg1YTEuMTI1IDEuMTI1IDAgMCAwIDEuNjIzIDEuMTc4bDEuODgtLjk2IDEuODguOTZjLjgyLjQxOSAxLjc2Ny0uMjcgMS42MjItMS4xNzhsLS4zMzEtMi4wODUgMS40OTMtMS40OTFjLjY1MS0uNjUuMjktMS43NjQtLjYyLTEuOTA4bC0yLjA4NS0uMzI4TDguOTkgNi41Wk03LjAzMSA5LjE2NWwuOTU2LTEuODc4Ljk1NSAxLjg3OGEuNzc1Ljc3NSAwIDAgMCAuNTcuNDE1bDIuMDgyLjMyOC0xLjQ5MSAxLjQ4OWEuNzc1Ljc3NSAwIDAgMC0uMjE4LjY3bC4zMzEgMi4wODEtMS44NzctLjk1OGEuNzc1Ljc3NSAwIDAgMC0uNzA1IDBsLTEuODc3Ljk1OC4zMzItMi4wOGEuNzc1Ljc3NSAwIDAgMC0uMjE4LS42NzFsLTEuNDkyLTEuNDkgMi4wODItLjMyN2EuNzc1Ljc3NSAwIDAgMCAuNTctLjQxNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Autotune = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-autotune',
        'staticon-Autotune',
        className
      ),
      ...props,
    })
);
Autotune.displayName = 'Autotune'

export default Autotune;
