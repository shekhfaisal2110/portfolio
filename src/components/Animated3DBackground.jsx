import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Animated3DBackground = ({ 
  opacity = 0.8,
  particleCount = 50,
  lineCount = 100,
  animationSpeed = 1,
  colors = {
    primary: 0x22d3ee,
    secondary: 0x3b82f6,
    accent: 0x8b5cf6,
    tertiary: 0x06b6d4,
    quaternary: 0x10b981,
    quinary: 0xf59e0b
  },
  gradient = 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(88, 28, 135, 0.95) 50%, rgba(59, 130, 246, 0.95) 100%)',
  mouseInteraction = true,
  className = ""
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
      new THREE.CylinderGeometry(0.3, 0.3, 1, 32),
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.5),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: colors.primary, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: colors.secondary, 
        transparent: true, 
        opacity: 0.4,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: colors.accent, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: colors.tertiary, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: colors.quaternary, 
        transparent: true, 
        opacity: 0.4,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: colors.quinary, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true 
      }),
    ];

    const meshes = [];
    
    // Create multiple floating objects
    for (let i = 0; i < particleCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 100;
      mesh.position.y = (Math.random() - 0.5) * 100;
      mesh.position.z = (Math.random() - 0.5) * 100;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Random scale
      const scale = Math.random() * 2 + 0.5;
      mesh.scale.set(scale, scale, scale);
      
      // Store animation properties
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02 * animationSpeed,
          y: (Math.random() - 0.5) * 0.02 * animationSpeed,
          z: (Math.random() - 0.5) * 0.02 * animationSpeed,
        },
        floatSpeed: (Math.random() * 0.5 + 0.1) * animationSpeed,
        floatOffset: Math.random() * Math.PI * 2,
        originalY: mesh.position.y,
        originalScale: scale,
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCountPoints = 200;
    const positions = new Float32Array(particleCountPoints * 3);
    
    for (let i = 0; i < particleCountPoints * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: colors.primary,
      size: 2,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    
    for (let i = 0; i < lineCount; i++) {
      linePositions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5);
      lineColors.push(color.r, color.g, color.b, color.r, color.g, color.b);
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(lineColors), 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Camera positioning
    camera.position.z = 30;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    // Mouse interaction
    const handleMouseMove = (event) => {
      if (!mouseInteraction) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({ x: event.clientX, y: event.clientY });
      
      // Move camera based on mouse
      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 5;
      camera.lookAt(0, 0, 0);
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate meshes
      meshes.forEach((mesh) => {
        // Rotation
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;
        
        // Float animation
        mesh.position.y = mesh.userData.originalY + Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 5;
        
        // Pulse scale
        const pulse = Math.sin(time * 2 + mesh.userData.floatOffset) * 0.1 + 1;
        mesh.scale.setScalar(pulse * (mesh.userData.originalScale || 1));
      });
      
      // Animate particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.01 * animationSpeed;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Rotate particles
      particles.rotation.y = time * 0.1 * animationSpeed;
      
      // Animate lines
      lines.rotation.x = time * 0.1 * animationSpeed;
      lines.rotation.y = time * 0.05 * animationSpeed;
      
      // Scene rotation
      scene.rotation.y = time * 0.02 * animationSpeed;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [opacity, particleCount, lineCount, animationSpeed, colors, mouseInteraction]);

  return (
    <>
      {/* 3D Background Canvas */}
      <div 
        ref={mountRef} 
        className={`fixed inset-0 z-0 pointer-events-none ${className}`}
        style={{ 
          background: gradient,
          opacity: opacity
        }}
      />
    </>
  );
};

export default Animated3DBackground;







