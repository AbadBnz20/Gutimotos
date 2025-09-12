import { useState } from "react";
import { createPortal } from "react-dom";
import { MdCloseFullscreen } from "react-icons/md";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
interface Props {
  source: string;
  height: string;
}

export const ContentImg = ({ source, height }: Props) => {
  const [zoomed, setZoomed] = useState(false);
  return (
    <>
      {/* Imagen miniatura */}
      <img
        src={source}
        alt=""
        className={`w-full object-cover rounded-sm cursor-pointer ${height}`}
        onClick={() => setZoomed(true)}
      />
      {zoomed &&
        createPortal(
          <div className="fixed inset-0 z-[90] bg-gray-200 bg-opacity-90 flex items-center justify-center pointer-events-auto">
            <div
              className="absolute w-[40px] h-[40px] bg-black text-white rounded-full top-2 left-2  z-[100] pointer-events-auto flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                console.log("cerrar");
                setZoomed(false);
              }}
            >
              <MdCloseFullscreen />
            </div>
            <InnerImageZoom width={1050} height={600} src={source}  />
          </div>,
          document.body
        )}
    </>
  );
};
