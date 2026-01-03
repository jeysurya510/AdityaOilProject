import { motion } from 'framer-motion';

const FloatingParticles = ({ count = 15 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    color: i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#DC2626' : '#0A2463',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -window.innerHeight],
            x: [0, Math.sin(particle.id) * 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;