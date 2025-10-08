import ScrollVelocity from "@/components/ui/scrollVelocity";

const ScrollVelocityText = () => {
  return (
    <div
      className="md:block hidden"
      style={{ marginTop: 20, marginBottom: 50 }}
      >
      <ScrollVelocity
        texts={['AURA ✦ I.A ✦ AURA ✦', 'AURA ✦ AURA ✦ I.A ✦']} 
        velocity={40} 
        className="custom-scroll-text"
     />
    </div>
  );
};

export default ScrollVelocityText;