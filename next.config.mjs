/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'], // ✅ Agregar aquí el dominio permitido
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Ignorar errores de ESLint en el build
  },
};

export default nextConfig;
