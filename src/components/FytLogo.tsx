const FytLogo = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="/lovable-uploads/2add0509-1571-4311-9731-59eae02f8512.png" 
        alt="Fyt Logo" 
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default FytLogo;