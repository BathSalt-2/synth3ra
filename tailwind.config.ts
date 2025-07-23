import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'neural': 'var(--gradient-neural)',
				'consciousness': 'var(--gradient-consciousness)',
				'synthetic': 'var(--gradient-synthetic)',
				'depth': 'var(--gradient-depth)'
			},
			boxShadow: {
				'neural': 'var(--shadow-neural)',
				'consciousness': 'var(--shadow-consciousness)',
				'synthetic': 'var(--shadow-synthetic)',
				'depth': 'var(--shadow-depth)'
			},
			transitionTimingFunction: {
				'neural': 'var(--transition-neural)',
				'quantum': 'var(--transition-quantum)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'neural': 'var(--neural-radius)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)',
						'box-shadow': '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.02)',
						'box-shadow': '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				'consciousness-flow': {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				},
				'fractal-rotate': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'33%': { transform: 'rotate(120deg) scale(1.1)' },
					'66%': { transform: 'rotate(240deg) scale(0.95)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				},
				'epi-glow': {
					'0%, 100%': { 'filter': 'brightness(1) hue-rotate(0deg)' },
					'50%': { 'filter': 'brightness(1.2) hue-rotate(10deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neural-pulse': 'neural-pulse var(--pulse-duration) ease-in-out infinite',
				'consciousness-flow': 'consciousness-flow 8s ease-in-out infinite',
				'fractal-rotate': 'fractal-rotate 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'epi-glow': 'epi-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
