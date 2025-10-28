---
title: 'SantyTec: Panel de Administración & Gestión Centralizada'
client: 'SantyTec'
duration: 'Agosto 2024 - Presente'
subtitle: 'Sistema de Back-Office Full-Stack para la automatización de inventario, precios, pedidos y clientes.'
description: 'Desarrollé el sistema de gestión centralizada (back-office) de SantyTec para automatizar la administración del e-commerce. Esto incluye la gestión de inventario, la aplicación de políticas de precios dinámicas, el manejo completo de órdenes y el seguimiento detallado de clientes, permitiendo una toma de decisiones basada en datos.'
summary: 'Solución integral para el administrador de SantyTec. Este panel permite el control total de las operaciones del e-commerce, desde la gestión de categorías y productos con CRUD, hasta la aplicación de descuentos y la impresión de comprobantes. Su principal valor es la **automatización de la administración** y la provisión de datos clave para la toma de decisiones estratégicas, impulsando la eficiencia del negocio.'
keyTech: ['Next.js 15', 'Prisma', 'Vercel Postgres', 'Auth.js', 'shadcn/ui', 'Recharts']
# mainImg: '/images/santytec-admin/dashboard.webp'
mainImg: '/images/santytec/main.webp'
imgs:
  - image: '/images/santytec/main.webp'
    caption: 'Dashboard de Rendimiento (Gráfico de Ingresos)'
    alt: 'Vista del panel principal con gráficos de ingresos y KPIs de stock.'
  # - image: '/images/santytec-admin/products-crud.webp'
  #   caption: 'Módulo de Gestión de Productos y Categorías (CRUD)'
  #   alt: 'Interfaz de administración para crear, leer, actualizar y eliminar productos.'
  # - image: '/images/santytec-admin/orders-tracking.webp'
  #   caption: 'Seguimiento Detallado y Gestión de Órdenes'
  #   alt: 'Tabla de órdenes mostrando estado de pago, procesamiento y opción de descuento.'
  # - image: '/images/santytec-admin/pricing-tool.webp'
  #   caption: 'Herramienta de Precios Dinámicos por Porcentaje'
  #   alt: 'Formulario para aplicar aumentos porcentuales masivos a productos o categorías.'
stack:
  - Next.js 15 (App Router, Server Actions, PPR)
  - Prisma ORM
  - Vercel Postgres
  - Auth.js con OAuth y Credenciales
  - shadcn/ui
  - Recharts (para visualización de métricas)
  - Tailwind CSS
  - Server Components & Client Components
  - Nodemailer
  - React-PDF Renderer
features:
  - Sistema CRUD completo para productos y categorías.
  - 'Herramienta de Precios Dinámicos: aplicación de aumentos porcentuales por producto o categoría.'
  - Gestión integral de órdenes con manejo de estados de pago y procesamiento.
  - 'Módulo de descuentos: Aplicación de descuentos porcentuales o fijos a órdenes o ítems individuales.'
  - Generación de comprobantes de órdenes en formato PDF.
  - Autenticación Segura con Auth.js, restringiendo el acceso únicamente al administrador.
  - 'Panel de Usuarios: Administración de datos de usuarios registrados.'
  - 'Seguimiento de Clientes sin Cuenta para personalización y envío de links de registro.'
  - 'Dashboard de Métricas Clave: Gráfico de ingresos (con Recharts), recuento de compras totales y stock.'
impact:
  - title: 'Automatización de Tareas'
    subtitle: 'Elimina la actualización manual de inventario y precios, ahorrando tiempo operativo.'
  - title: 'Decisiones Basadas en Datos'
    subtitle: 'El dashboard de ingresos permite una toma de decisiones informada sobre el rendimiento.'
  - title: 'Gestión Centralizada'
    subtitle: 'Manejo de órdenes, descuentos, clientes y stock desde una única interfaz.'
  - title: 'Mejora de Ventas y Atención'
    subtitle: 'La facilidad de gestión de órdenes y el seguimiento de clientes impulsan la eficiencia comercial.'
role: 'Full Stack Developer & Arquitecto de Sistemas'
scope: 'Diseño, desarrollo, planificación de la base de datos (Prisma), implementación de la lógica de precios y pedidos, seguridad de autenticación, y despliegue continuo en Vercel. Continúo brindando mantenimiento activo.'
challenges:
  - 'Lógica Financiera de Descuentos Complejos: Diseñar e implementar un motor de cálculo robusto para manejar la actualización, eliminación y validación de descuentos (porcentuales/fijos, totales/por ítem), garantizando la integridad de los precios recalculados y diferenciando correctamente entre tipos de descuento.'
  - Implementación de las últimas estrategias de Next.js 15 (PPR y Caché) para la escalabilidad del dashboard y la gestión de datos sensibles.
  - Garantizar la seguridad de la autenticación administrativa con Auth.js y control de acceso riguroso.
  - Optimizar la experiencia del usuario (UX) del CRUD y la gestión de órdenes para ser intuitiva y rápida, utilizando *suspense* y Server Components.
goal: 'Crear un sistema de gestión robusto y automatizado que sirviera como el cerebro del e-commerce, permitiendo al administrador una operación eficiente y la capacidad de responder rápidamente a las dinámicas del mercado (precios, stock y pedidos).'
---
