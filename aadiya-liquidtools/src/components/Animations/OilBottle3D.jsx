import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Zap, Sparkles, Shield, Award } from 'lucide-react';

const OilBottle3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const centerX = width / 2;
    const bottleHeight = height * 0.75;
    const bottleWidth = width * 0.35;

    const drawBrandedBottle = () => {
      ctx.clearRect(0, 0, width, height);

      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, '#fef3c7'); // Light amber
      bgGradient.addColorStop(1, '#fde68a'); // Lighter amber
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Bottle shadow for 3D effect
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.ellipse(centerX, height - 15, bottleWidth * 0.7, 15, 0, 0, Math.PI * 2);
      ctx.fill();

      // Main bottle body - Premium design
      ctx.beginPath();
      
      // Premium curved design
      ctx.moveTo(centerX - bottleWidth * 0.25, height - bottleHeight);
      ctx.bezierCurveTo(
        centerX - bottleWidth * 0.35, height - bottleHeight * 0.85,
        centerX - bottleWidth * 0.4, height - bottleHeight * 0.6,
        centerX - bottleWidth * 0.35, height - bottleHeight * 0.4
      );
      
      // Right side curve
      ctx.bezierCurveTo(
        centerX - bottleWidth * 0.3, height - bottleHeight * 0.2,
        centerX, height - bottleHeight * 0.15,
        centerX + bottleWidth * 0.35, height - bottleHeight * 0.4
      );
      
      // Bottom curve
      ctx.bezierCurveTo(
        centerX + bottleWidth * 0.4, height - bottleHeight * 0.6,
        centerX + bottleWidth * 0.35, height - bottleHeight * 0.85,
        centerX + bottleWidth * 0.25, height - bottleHeight
      );
      
      ctx.closePath();

      // Bottle gradient (Premium colors)
      const bottleGradient = ctx.createLinearGradient(
        centerX - bottleWidth * 0.35, height - bottleHeight,
        centerX + bottleWidth * 0.35, height - bottleHeight * 0.4
      );
      bottleGradient.addColorStop(0, '#f59e0b'); // Amber
      bottleGradient.addColorStop(0.3, '#dc2626'); // Energy red
      bottleGradient.addColorStop(0.7, '#b91c1c'); // Dark red
      bottleGradient.addColorStop(1, '#991b1b'); // Deep red
      
      ctx.fillStyle = bottleGradient;
      ctx.fill();
      
      // Premium outline
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#1e293b';
      ctx.stroke();

      // Neck and cap (Premium design)
      ctx.beginPath();
      const neckWidth = bottleWidth * 0.18;
      const neckHeight = bottleHeight * 0.12;
      
      // Premium neck design
      ctx.moveTo(centerX - neckWidth, height - bottleHeight);
      ctx.bezierCurveTo(
        centerX - neckWidth * 0.8, height - bottleHeight - neckHeight * 0.3,
        centerX - neckWidth * 0.7, height - bottleHeight - neckHeight * 0.7,
        centerX - neckWidth * 0.6, height - bottleHeight - neckHeight
      );
      ctx.lineTo(centerX + neckWidth * 0.6, height - bottleHeight - neckHeight);
      ctx.bezierCurveTo(
        centerX + neckWidth * 0.7, height - bottleHeight - neckHeight * 0.7,
        centerX + neckWidth * 0.8, height - bottleHeight - neckHeight * 0.3,
        centerX + neckWidth, height - bottleHeight
      );
      
      ctx.fillStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.fill();
      ctx.stroke();

      // Premium cap
      ctx.beginPath();
      const capWidth = neckWidth * 1.3;
      ctx.ellipse(
        centerX, 
        height - bottleHeight - neckHeight, 
        capWidth, 
        neckHeight * 0.25, 
        0, 0, Math.PI * 2
      );
      ctx.fillStyle = '#374151';
      ctx.fill();
      ctx.stroke();

      // Branding Section - Company Name and Logo
      ctx.save();
      ctx.translate(centerX, height - bottleHeight * 0.65);
      
      // Brand background plate (premium look)
      ctx.beginPath();
      ctx.roundRect(-bottleWidth * 0.4, -35, bottleWidth * 0.8, 70, 15);
      const plateGradient = ctx.createLinearGradient(
        -bottleWidth * 0.4, -35,
        bottleWidth * 0.4, 35
      );
      plateGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      plateGradient.addColorStop(1, 'rgba(245, 158, 11, 0.1)');
      ctx.fillStyle = plateGradient;
      ctx.fill();
      
      // Plate border
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();

      // Main Company Name - AADIYA LIQUIDTOOLS
      ctx.font = 'bold 22px "Segoe UI", "Arial", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Text shadow for 3D effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillText('AADIYA LIQUIDTOOLS', 2, -8);
      
      // Main text with gradient
      const textGradient = ctx.createLinearGradient(-80, -20, 80, 20);
      textGradient.addColorStop(0, '#dc2626'); // Energy red
      textGradient.addColorStop(0.5, '#f59e0b'); // Premium amber
      textGradient.addColorStop(1, '#dc2626'); // Energy red
      ctx.fillStyle = textGradient;
      ctx.fillText('AADIYA LIQUIDTOOLS', 0, -10);

      // Subtitle - INDIA PRIVATE LIMITED
      ctx.font = '12px "Segoe UI", sans-serif';
      ctx.fillStyle = '#374151';
      ctx.fillText('INDIA PRIVATE LIMITED', 0, 10);

      // Tagline
      ctx.font = 'italic 10px "Segoe UI", sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('Premium Lubricant Solutions', 0, 25);

      // Company Logo Mark (A inside shield)
      ctx.beginPath();
      ctx.arc(0, -40, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // "A" inside logo
      ctx.font = 'bold 16px "Segoe UI", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('A', 0, -38);

      ctx.restore();

      // Product details on bottle
      ctx.save();
      ctx.translate(centerX, height - bottleHeight * 0.35);
      
      // Product info background
      ctx.beginPath();
      ctx.roundRect(-bottleWidth * 0.35, -20, bottleWidth * 0.7, 40, 10);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
      
      // Product grade
      ctx.font = 'bold 16px "Segoe UI", sans-serif';
      ctx.fillStyle = '#dc2626';
      ctx.textAlign = 'center';
      ctx.fillText('SAE 20W-50', 0, -5);
      
      // Quality certification
      ctx.font = '9px "Segoe UI", sans-serif';
      ctx.fillStyle = '#374151';
      ctx.fillText('ISO 9001:2015 CERTIFIED', 0, 10);
      
      ctx.restore();

      // Liquid level with shine
      ctx.beginPath();
      const liquidY = height - bottleHeight * 0.45;
      ctx.moveTo(centerX - bottleWidth * 0.32, liquidY);
      ctx.bezierCurveTo(
        centerX - bottleWidth * 0.36, liquidY + 20,
        centerX - bottleWidth * 0.32, liquidY + 40,
        centerX - bottleWidth * 0.25, liquidY + 60
      );
      ctx.lineTo(centerX + bottleWidth * 0.25, liquidY + 60);
      ctx.bezierCurveTo(
        centerX + bottleWidth * 0.32, liquidY + 40,
        centerX + bottleWidth * 0.36, liquidY + 20,
        centerX + bottleWidth * 0.32, liquidY
      );
      
      const liquidGradient = ctx.createLinearGradient(
        centerX, liquidY,
        centerX, liquidY + 60
      );
      liquidGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      liquidGradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      ctx.fillStyle = liquidGradient;
      ctx.fill();

      // Shine effect on bottle
      ctx.beginPath();
      ctx.moveTo(centerX - bottleWidth * 0.15, height - bottleHeight * 0.55);
      ctx.bezierCurveTo(
        centerX - bottleWidth * 0.1, height - bottleHeight * 0.5,
        centerX, height - bottleHeight * 0.52,
        centerX + bottleWidth * 0.08, height - bottleHeight * 0.58
      );
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.stroke();

      // Add small droplets/particles
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = bottleWidth * 0.25;
        const x = centerX + Math.cos(angle) * radius;
        const y = height - bottleHeight * 0.65 + Math.sin(angle) * radius * 0.3;
        const dropRadius = 1.5 + Math.random() * 2;
        
        ctx.beginPath();
        ctx.arc(x, y, dropRadius, 0, Math.PI * 2);
        const dropGradient = ctx.createRadialGradient(x, y, 0, x, y, dropRadius);
        dropGradient.addColorStop(0, 'rgba(251, 191, 36, 0.8)');
        dropGradient.addColorStop(1, 'rgba(245, 158, 11, 0.3)');
        ctx.fillStyle = dropGradient;
        ctx.fill();
      }
    };

    // Draw rounded rectangle method
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    };

    drawBrandedBottle();

    // Floating certification badges animation
    const badges = [
      { icon: '🏆', x: centerX - bottleWidth * 0.6, y: height - bottleHeight * 0.8 },
      { icon: '⭐', x: centerX + bottleWidth * 0.6, y: height - bottleHeight * 0.7 },
      { icon: '✅', x: centerX - bottleWidth * 0.5, y: height - bottleHeight * 0.5 },
      { icon: '🛡️', x: centerX + bottleWidth * 0.55, y: height - bottleHeight * 0.6 }
    ];

    const animateBadges = () => {
      drawBrandedBottle();
      
      // Draw floating badges
      badges.forEach((badge, i) => {
        badge.y -= 0.5;
        if (badge.y < height - bottleHeight * 0.9) {
          badge.y = height - bottleHeight * 0.5;
        }
        
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge.icon, badge.x, badge.y);
      });

      requestAnimationFrame(animateBadges);
    };

    const animationId = requestAnimationFrame(animateBadges);

    const handleResize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      drawBrandedBottle();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative bg-gradient-to-br from-amber-50 to-red-50 rounded-3xl p-8 shadow-2xl">
        <canvas
          ref={canvasRef}
          className="w-full h-[500px] rounded-2xl"
        />
        
        {/* Animated company elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-6 left-6"
        >
          <Shield className="w-10 h-10 text-premium-amber/50" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-6 right-6"
        >
          <Award className="w-10 h-10 text-energy-red/50" />
        </motion.div>
        
        {/* Sparkles */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity
            }}
            className={`absolute ${i === 1 ? 'top-1/4 left-8' : i === 2 ? 'top-1/3 right-12' : i === 3 ? 'bottom-1/4 left-12' : 'bottom-1/3 right-8'}`}
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </motion.div>
        ))}
      </div>

      {/* Company info card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-r from-premium-amber to-energy-red rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">AADIYA LIQUIDTOOLS</h3>
            <p className="text-amber-100">INDIA PRIVATE LIMITED</p>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">CIN: U46610TN2025PTC182178</div>
            <div className="text-sm opacity-90">Est. 2025</div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">ISO</div>
            <div className="text-xs">9001:2015</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">27+</div>
            <div className="text-xs">Quality Checks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-xs">Cities Served</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OilBottle3D;