
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');



@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
  :root {

    --accent: 185.4 70% 40%;

    --accent-foreground: 222.2 84% 4.9%;

    --background: 210 50% 0.8%;

    --border: 0 0% 13.3%;

    --card: 0 0% 10.2%;

    --card-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;

    --destructive-foreground: 210 40% 98%;

    --font-body: 'Outfit', system-ui, sans-serif;

    --font-heading: 'Outfit', system-ui, sans-serif;

    --foreground: 0 0% 100%;

    --input: 217.2 32.6% 17.5%;

    --muted: 0 0% 16.5%;

    --muted-foreground: 210 40% 65%;

    --popover: 210 50% 0.8%;

    --popover-foreground: 210 40% 98%;

    --primary: 155.4 100% 27.3%;

    --primary-foreground: 222.2 84% 4.9%;

    --radius: 0;

    --ring: 155.4 100% 27.3%;

    --secondary: 0 0% 3.9%;

    --secondary-foreground: 232.5 16.7% 90.6%;

  }
}


@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}


body { font-family: var(--font-body) !important; }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading) !important; }



/* ElevateFi Custom Animations */

@keyframes floatA {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes floatB {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
}

@keyframes floatC {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  animation: gradient-x 6s ease infinite;
  background-size: 200% auto;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(12px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fadeInScale {
  0% { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes sonner-fade-in {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes sonner-fade-out {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
}

@keyframes sonner-spin {
  0% { opacity: 1; }
  100% { opacity: 0.15; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.6);
}

/* Selection */
::selection {
  background: hsl(var(--primary) / 0.3);
  color: hsl(var(--foreground));
}
