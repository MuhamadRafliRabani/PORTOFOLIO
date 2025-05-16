import { Mesh, Group, MeshStandardMaterial } from "three";
import { MeshBasicMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { themeColorMesh } from "@/app/data/theme";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useHandleTheme } from "@/app/hooks/use-handle-theme";
import gsap from "gsap";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

// GlobeModel.tsx
const GlobeModel = (props: any) => {
  const group = useRef<Group>(null);
  const corneaRef = useRef<Mesh | null>(null);
  const { theme } = useHandleTheme();
  const { scene } = useGLTF("/models/globe-wireframe.glb");
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  const MAX_X_ROTATION = 0.07;
  const MAX_Y_ROTATION = 0.1;
  const translateGlobe = 60;

  // Apply theme materials
  useEffect(() => {
    const applyMaterial = (
      name: string,
      color: string | number,
      isWireframe = false,
    ) => {
      const mesh = scene.getObjectByName(name) as Mesh;
      if (mesh) {
        mesh.material = new MeshBasicMaterial({
          color,
          wireframe: isWireframe,
        });
      }
      return mesh;
    };

    applyMaterial("globe", themeColorMesh[`${theme}Globe`], true);
    applyMaterial("eye-border", themeColorMesh[`${theme}Eye`]);
    corneaRef.current = applyMaterial(
      "cornea",
      themeColorMesh[`${theme}Cornea`],
    );
  }, [scene, theme]);

  // Mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.querySelector("canvas");
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const correctedMouseY = event.clientY + translateGlobe;

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((correctedMouseY - rect.top) / rect.height - 0.5) * 2;

      setTargetRotation({
        x: Math.max(-MAX_X_ROTATION, Math.min(MAX_X_ROTATION, y * 0.2)),
        y: Math.max(-MAX_Y_ROTATION, Math.min(MAX_Y_ROTATION, x * 0.16)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intro animation + idle float
  useEffect(() => {
    const globe = group.current;
    if (!globe) return;

    globe.visible = false;
    globe.position.set(0, -50, -0.5); // Z langsung benar
    globe.scale.set(0, 0, 0);

    requestAnimationFrame(() => {
      globe.visible = true;

      gsap
        .timeline()
        .to(
          globe.position,
          {
            y: 0,
            duration: 3,
            ease: "power4.out",
          },
          0,
        )
        .to(
          globe.scale,
          {
            x: 2.6,
            y: 2.6,
            z: 2.6,
            duration: 3,
            ease: "back.out(1.7)",
          },
          0,
        )
        .to(
          globe.position,
          {
            y: -0.3,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2",
          },
          3,
        );
    });
  }, []);

  // Rotation follow mouse
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x +=
        (targetRotation.x - group.current.rotation.x) * 0.8;
      group.current.rotation.y +=
        (targetRotation.y - group.current.rotation.y) * 0.8;
    }

    if (corneaRef.current) {
      corneaRef.current.rotation.x +=
        (targetRotation.x - corneaRef.current.rotation.x) * 0.5;
      corneaRef.current.rotation.y +=
        (targetRotation.y - corneaRef.current.rotation.y) * 0.5;
    }
  });

  return <primitive ref={group} object={scene} {...props} />;
};

// Globe.tsx
const Globe = () => (
  <Canvas className="globe max-h-115 h-full -translate-y-5 md:-translate-y-12">
    <ambientLight intensity={0} />
    <directionalLight position={[10, 10, 5]} intensity={0} />
    <pointLight position={[10, 10, -10]} intensity={0} />

    <GlobeModel
      scale={[2.6, 2.6, 2.6]}
      // ❌ Tidak set position di sini, hanya di dalam animasi!
      rotation={[-0.02, -0.2, -0.1]}
    />
  </Canvas>
);

export default Globe;
