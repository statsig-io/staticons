
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.496 3.627H2.499a.375.375 0 0 0-.375.375l.005 7.996c0 .207.168.375.375.375h10.997a.375.375 0 0 0 .375-.375l-.005-7.996a.375.375 0 0 0-.375-.375ZM2.499 2.377h10.997c.897 0 1.624.727 1.625 1.624l.005 7.996c0 .898-.727 1.626-1.625 1.626H2.504A1.625 1.625 0 0 1 .879 12L.874 4.003c0-.898.727-1.626 1.625-1.626Zm4.307 6.179c0-.346.28-.625.625-.625h4.83a.625.625 0 1 1 0 1.25H7.43a.625.625 0 0 1-.625-.625ZM3.727 7.93a.625.625 0 0 0 0 1.25h1.485a.625.625 0 1 0 0-1.25H3.727Zm5.082 2.846c0 .346-.28.625-.625.625H3.727a.625.625 0 1 1 0-1.25h4.457c.345 0 .625.28.625.625Zm3.452.625a.625.625 0 1 0 0-1.25h-1.855a.625.625 0 0 0 0 1.25h1.855Z","clip-rule":"evenodd"}]]

/**
 * @component @name Subtitles
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDk2IDMuNjI3SDIuNDk5YS4zNzUuMzc1IDAgMCAwLS4zNzUuMzc1bC4wMDUgNy45OTZjMCAuMjA3LjE2OC4zNzUuMzc1LjM3NWgxMC45OTdhLjM3NS4zNzUgMCAwIDAgLjM3NS0uMzc1bC0uMDA1LTcuOTk2YS4zNzUuMzc1IDAgMCAwLS4zNzUtLjM3NVpNMi40OTkgMi4zNzdoMTAuOTk3Yy44OTcgMCAxLjYyNC43MjcgMS42MjUgMS42MjRsLjAwNSA3Ljk5NmMwIC44OTgtLjcyNyAxLjYyNi0xLjYyNSAxLjYyNkgyLjUwNEExLjYyNSAxLjYyNSAwIDAgMSAuODc5IDEyTC44NzQgNC4wMDNjMC0uODk4LjcyNy0xLjYyNiAxLjYyNS0xLjYyNlptNC4zMDcgNi4xNzljMC0uMzQ2LjI4LS42MjUuNjI1LS42MjVoNC44M2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVINy40M2EuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVaTTMuNzI3IDcuOTNhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDEuNDg1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUgzLjcyN1ptNS4wODIgMi44NDZjMCAuMzQ2LS4yOC42MjUtLjYyNS42MjVIMy43MjdhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDQuNDU3Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabTMuNDUyLjYyNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTEuODU1YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgxLjg1NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Subtitles = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-subtitles',
        'staticon-Subtitles',
        className
      ),
      ...props,
    })
);
Subtitles.displayName = 'Subtitles'

export default Subtitles;
