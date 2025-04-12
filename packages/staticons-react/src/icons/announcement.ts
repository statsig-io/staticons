
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.749 5.291v2.746c0 .431.35.78.78.78h2.43V4.51H2.53a.781.781 0 0 0-.78.781Zm4.46-.798v4.331a6.249 6.249 0 0 1 2.463.628l3.053 1.492a.078.078 0 0 0 .113-.07v-8.42a.078.078 0 0 0-.113-.07L8.867 3.78a7.186 7.186 0 0 1-2.657.713ZM.5 5.29v2.746a2.03 2.03 0 0 0 1.722 2.007c.254 1.537.82 2.922 1.582 4.278.195.347.56.553.949.553h2.331a.861.861 0 0 0 .757-1.271c-.672-1.242-1.241-2.475-1.517-3.52a5 5 0 0 1 1.8.491l3.054 1.492a1.328 1.328 0 0 0 1.91-1.193V9.471a2.84 2.84 0 0 0 0-5.616V2.454a1.328 1.328 0 0 0-1.91-1.193l-2.86 1.396a5.936 5.936 0 0 1-2.606.603H2.53c-1.122 0-2.031.91-2.031 2.031Zm12.588-.16v3.064a1.59 1.59 0 0 0 0-3.064Zm-8.241 8.494c-.648-1.166-1.116-2.317-1.351-3.557h1.538c.245 1.117.79 2.366 1.404 3.557H4.846Z","clip-rule":"evenodd"}]]

/**
 * @component @name Announcement
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS43NDkgNS4yOTF2Mi43NDZjMCAuNDMxLjM1Ljc4Ljc4Ljc4aDIuNDNWNC41MUgyLjUzYS43ODEuNzgxIDAgMCAwLS43OC43ODFabTQuNDYtLjc5OHY0LjMzMWE2LjI0OSA2LjI0OSAwIDAgMSAyLjQ2My42MjhsMy4wNTMgMS40OTJhLjA3OC4wNzggMCAwIDAgLjExMy0uMDd2LTguNDJhLjA3OC4wNzggMCAwIDAtLjExMy0uMDdMOC44NjcgMy43OGE3LjE4NiA3LjE4NiAwIDAgMS0yLjY1Ny43MTNaTS41IDUuMjl2Mi43NDZhMi4wMyAyLjAzIDAgMCAwIDEuNzIyIDIuMDA3Yy4yNTQgMS41MzcuODIgMi45MjIgMS41ODIgNC4yNzguMTk1LjM0Ny41Ni41NTMuOTQ5LjU1M2gyLjMzMWEuODYxLjg2MSAwIDAgMCAuNzU3LTEuMjcxYy0uNjcyLTEuMjQyLTEuMjQxLTIuNDc1LTEuNTE3LTMuNTJhNSA1IDAgMCAxIDEuOC40OTFsMy4wNTQgMS40OTJhMS4zMjggMS4zMjggMCAwIDAgMS45MS0xLjE5M1Y5LjQ3MWEyLjg0IDIuODQgMCAwIDAgMC01LjYxNlYyLjQ1NGExLjMyOCAxLjMyOCAwIDAgMC0xLjkxLTEuMTkzbC0yLjg2IDEuMzk2YTUuOTM2IDUuOTM2IDAgMCAxLTIuNjA2LjYwM0gyLjUzYy0xLjEyMiAwLTIuMDMxLjkxLTIuMDMxIDIuMDMxWm0xMi41ODgtLjE2djMuMDY0YTEuNTkgMS41OSAwIDAgMCAwLTMuMDY0Wm0tOC4yNDEgOC40OTRjLS42NDgtMS4xNjYtMS4xMTYtMi4zMTctMS4zNTEtMy41NTdoMS41MzhjLjI0NSAxLjExNy43OSAyLjM2NiAxLjQwNCAzLjU1N0g0Ljg0NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Announcement = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-announcement',
        'staticon-Announcement',
        className
      ),
      ...props,
    })
);
Announcement.displayName = 'Announcement'

export default Announcement;
