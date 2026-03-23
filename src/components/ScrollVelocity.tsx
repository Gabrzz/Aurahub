import ScrollVelocity from "@/components/ui/scrollVelocity";

const ScrollVelocityText = () => {
  return (
    <div
      className="md:block hidden"
      style={{ marginTop: 20, marginBottom: 20 }}
      >
      <ScrollVelocity
        texts={['AURA ✦ I.A ✦ AURA ✦ I.A ✦ ', 'AURA ✦ AURA ✦ I.A ✦']} 
        velocity={40} 
        className="custom-scroll-text jofont-1"
     />
    </div>
  );
};

export default ScrollVelocityText;