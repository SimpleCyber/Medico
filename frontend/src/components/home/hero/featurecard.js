
const FeatureCard = ({ icon, iconBgColor, title, description }) => {
  return (
    <div className="relative rounded-2xl bg-white p-6 max-w-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">

      <div className="relative mb-4 h-16 w-16">
        <div className="absolute -left-4 top-0 h-16 w-8 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_1px,transparent_1px,transparent_6px)] z-0" />
        <div
          className={`absolute left-0 top-0 h-16 w-16 rounded-full ${iconBgColor} z-10`}
        />
        <div className="absolute left-0 top-0 z-20 h-16 w-16 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
