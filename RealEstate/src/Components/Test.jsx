const SketchfabEmbed = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Responsive 3D Viewer */}
      <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Blue faceted diamond"
          src="https://sketchfab.com/models/d0da6563d69d4277accc5a40b938b105/embed"
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export default SketchfabEmbed;
