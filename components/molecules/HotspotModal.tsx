import React, { ReactNode } from "react";

interface HotspotModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const HotspotModal: React.FC<HotspotModalProps> = ({
  open,
  onClose,
  children,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60  z-[999] flex items-center justify-center p-4"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[1000] p-6 pointer-events-none">
        <div className="w-[380px]  pointer-events-auto">
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default HotspotModal;
