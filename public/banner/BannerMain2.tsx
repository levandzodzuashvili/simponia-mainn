import React, { useState } from "react";
import Img from "./img";
import Link from "next/link";
import BannerCard from "@/app/components/cards/BannerCard";
interface MousePosition {
  x: number;
  y: number;
}

const BannerMain = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [hoveredFloor, setHoveredFloor] = useState(null) as any;
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent): void => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="banner-main w-full h-full relative">
      {/* Info Box */}
      {hoveredFloor && (
        <div onMouseMove={handleMouseMove}>
          <BannerCard
            hoveredFloor={hoveredFloor}
            mousePosition={mousePosition}
          />
        </div>
      )}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="1920" height="1800" fill="url(#pattern0_445_2)" />
        <Link href="/floor/3">
          <path
            className="hover-path"
            d="M1333.5 1339C1180 1379.17 872.7 1459.5 871.5 1459.5V1451L836.5 1459.5V1426.5L871.5 1415V1395.5L1328.5 1258L1676 1299V1339L1707.5 1342L1699.5 1374.5L1333.5 1339Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(3)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>
        <Link href="/floor/4">
          <path
            className="hover-path"
            d="M1328.5 1256L866 1396V1388L836.5 1397V1371L866 1361V1341.5L1328.5 1174L1676 1228.5V1248.5L1732 1256V1303.5L1328.5 1256Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(4)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>
        <Link href="/floor/5">
          <path
            className="hover-path"
            d="M1328.5 1172L866 1340V1333.5L836.5 1344.5V1320L852.5 1313V1307L1090.5 1199L1328.5 1091L1676 1152.5V1188.5L1708.5 1195.5V1231.5L1328.5 1172Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(5)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/6">
          <path
            className="hover-path"
            d="M1327.5 1089L851 1306V1288.5L834.5 1295.5V1268.5L865 1251V1238L1327.5 1006.5L1672 1074V1095.5L1728.5 1102.5V1160L1327.5 1089Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(6)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/7">
          <path
            className="hover-path"
            d="M1327.5 1004L836 1250.5V1213.5L865 1196.5V1187.5L1327.5 924L1677.5 1004.5V1041.5L1707.5 1049.5V1079.5L1327.5 1004Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(7)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/8">
          <path
            className="hover-path"
            d="M1327.5 921L839.5 1199.5V1158L865 1140V1134.5L1327.5 834L1677.5 926V940.5L1732 952V1014.5L1327.5 921Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(8)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/9">
          <path
            className="hover-path"
            d="M1327.5 830L849 1142L834.5 1136.5L838 1105L1260.5 777.5L1327.5 751L1675.5 854.5L1677.5 893L1709 903V931.5L1327.5 830Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(9)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/10">
          <path
            className="hover-path"
            d="M1260.5 775L842.5 1098.5L832.5 1092L835 1056L1249.5 701L1327.5 670L1723 794.5V866.5L1327.5 748.5L1260.5 775Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(10)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/11">
          <path
            className="hover-path"
            d="M1249 698.5L851 1039.5L839.5 1035.5L836.5 1001.5L1257 609.5L1327.5 583.5L1675.5 702V742.5L1708 756V787.5L1327.5 667.5L1249 698.5Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(11)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/12">
          <path
            className="hover-path"
            d="M1256 607.5L839.5 995L831.5 985V953L1249 535.5L1327.5 503L1675.5 629V634.5L1725.5 651.5V716L1328 581L1256 607.5Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(12)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/13">
          <path
            className="hover-path"
            d="M1247.5 534L874.5 906.5V877L1327.5 414.5L1675.5 555V626L1327.5 500.5L1247.5 534Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(13)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/14">
          <path
            className="hover-path"
            d="M874.5 874V856V825.5L1327.5 331.5L1675.5 479V552.5L1327.5 410.5L874.5 874Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(14)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/15">
          <path
            className="hover-path"
            d="M874.5 822V804V778.5L1327.5 248L1675.5 405.5V475.5L1327.5 325L874.5 822Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(15)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>

        <Link href="/floor/16">
          <path
            className="hover-path"
            d="M874.5 774V734L905 699V690L951.5 629V577L1051 440.5L1188 337L1331 162L1675.5 332V402.5L1327.5 244L874.5 774Z"
            stroke="#D7A569"
            onMouseEnter={() => setHoveredFloor(16)}
            onMouseLeave={() => setHoveredFloor(null)}
          />
        </Link>
        <defs>
          <pattern
            id="pattern0_445_2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_445_2"
              transform="matrix(0.00025 0 0 0.000266667 0 -0.0333333)"
            />
          </pattern>
          <Img />
        </defs>
      </svg>
      <style jsx>{`
        .hover-path {
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: all;
          cursor: pointer;
        }
        .hover-path:hover {
          opacity: 1;
        }
        .info-box {
          background-color: rgba(255, 255, 255, 0.75);
          padding: 8px;
          font-size: 16px;
          border-radius: 4px;
        }
        .box_contianer {
          top: 20%;
          left: 20%;
          transform: translate(-50%, -50);
        }
        .inside_box {
          padding: 40px;
          background-color: #18181820;
          bacgrkound-blur: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default BannerMain;
