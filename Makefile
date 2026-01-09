# Makefile for Rabouquet Website Development
# ==========================================

.PHONY: help install dev build preview clean docker-up docker-down docker-build docker-logs docker-shell lint format test deploy-vercel check-env setup

# Default target
.DEFAULT_GOAL := help

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

##@ General Commands

help: ## Show this help message
	@echo "$(BLUE)Rabouquet Website - Development Commands$(NC)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make $(GREEN)<target>$(NC)\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2 } /^##@/ { printf "\n$(BLUE)%s$(NC)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Setup & Installation

setup: ## Complete project setup (install + logo placeholder)
	@echo "$(BLUE)Setting up Rabouquet project...$(NC)"
	@mkdir -p static src/lib/{components,data} src/routes/{products,about,contact}
	@if [ ! -f "package.json" ]; then \
		echo "$(YELLOW)Warning: package.json not found. Run 'make init' first$(NC)"; \
	fi
	@if [ ! -f "static/logo.png" ]; then \
		echo "$(YELLOW)Creating logo placeholder...$(NC)"; \
		echo "Replace this with actual logo" > static/logo.png; \
	fi
	@make install
	@echo "$(GREEN)Setup complete!$(NC)"

init: ## Initialize SvelteKit project (first time setup)
	@echo "$(BLUE)Initializing SvelteKit project...$(NC)"
	@if [ ! -f "package.json" ]; then \
		npm create svelte@latest . -- --template skeleton --types checkjs --no-prettier --no-eslint --no-playwright; \
		npm install -D tailwindcss postcss autoprefixer; \
		npm install -D @sveltejs/adapter-static; \
		npx tailwindcss init -p; \
		echo "$(GREEN)Project initialized!$(NC)"; \
	else \
		echo "$(YELLOW)Project already initialized$(NC)"; \
	fi

install: ## Install npm dependencies
	@echo "$(BLUE)Installing dependencies...$(NC)"
	@npm install
	@echo "$(GREEN)Dependencies installed!$(NC)"

##@ Development

dev: ## Start development server (local)
	@echo "$(BLUE)Starting development server at http://localhost:5173$(NC)"
	@npm run dev

dev-host: ## Start development server (accessible from network)
	@echo "$(BLUE)Starting development server (network accessible)...$(NC)"
	@npm run dev -- --host

preview: ## Preview production build locally
	@echo "$(BLUE)Starting preview server...$(NC)"
	@npm run preview

##@ Docker Commands

docker-up: ## Start Docker development environment
	@echo "$(BLUE)Starting Docker containers...$(NC)"
	@docker-compose up

docker-up-d: ## Start Docker containers in background
	@echo "$(BLUE)Starting Docker containers (detached)...$(NC)"
	@docker-compose up -d
	@echo "$(GREEN)Containers started! Visit http://localhost:5173$(NC)"

docker-down: ## Stop Docker containers
	@echo "$(BLUE)Stopping Docker containers...$(NC)"
	@docker-compose down

docker-build: ## Build Docker images
	@echo "$(BLUE)Building Docker images...$(NC)"
	@docker-compose build

docker-rebuild: ## Rebuild and restart Docker containers
	@echo "$(BLUE)Rebuilding Docker containers...$(NC)"
	@docker-compose down
	@docker-compose build --no-cache
	@docker-compose up -d
	@echo "$(GREEN)Containers rebuilt!$(NC)"

docker-logs: ## Show Docker container logs
	@docker-compose logs -f

docker-shell: ## Open shell in Docker container
	@docker-compose exec web sh

docker-install: ## Install npm package in Docker (usage: make docker-install PKG=package-name)
	@if [ -z "$(PKG)" ]; then \
		echo "$(RED)Error: Please specify package name$(NC)"; \
		echo "Usage: make docker-install PKG=package-name"; \
		exit 1; \
	fi
	@echo "$(BLUE)Installing $(PKG) in Docker container...$(NC)"
	@docker-compose exec web npm install $(PKG)

##@ Build & Testing

build: ## Build for production
	@echo "$(BLUE)Building for production...$(NC)"
	@npm run build
	@echo "$(GREEN)Build complete! Output in ./build$(NC)"

check: ## Run SvelteKit sync and check
	@echo "$(BLUE)Running SvelteKit check...$(NC)"
	@npm run check

lint: ## Run linting (if configured)
	@echo "$(BLUE)Running linter...$(NC)"
	@if [ -f ".eslintrc.cjs" ] || [ -f ".eslintrc.json" ]; then \
		npm run lint; \
	else \
		echo "$(YELLOW)No linter configured. Skipping...$(NC)"; \
	fi

format: ## Format code with Prettier (if configured)
	@echo "$(BLUE)Formatting code...$(NC)"
	@if command -v prettier > /dev/null; then \
		npx prettier --write --plugin prettier-plugin-svelte 'src/**/*.{js,svelte,css,md}'; \
	else \
		echo "$(YELLOW)Prettier not installed. Skipping...$(NC)"; \
	fi

test: ## Run tests (if configured)
	@echo "$(BLUE)Running tests...$(NC)"
	@if [ -f "playwright.config.js" ]; then \
		npm run test; \
	else \
		echo "$(YELLOW)No tests configured. Skipping...$(NC)"; \
	fi

##@ Deployment

deploy-vercel: build ## Deploy to Vercel
	@echo "$(BLUE)Deploying to Vercel...$(NC)"
	@if command -v vercel > /dev/null; then \
		vercel --prod; \
	else \
		echo "$(RED)Vercel CLI not installed. Install with: npm i -g vercel$(NC)"; \
		exit 1; \
	fi

deploy-preview: build ## Deploy preview to Vercel
	@echo "$(BLUE)Deploying preview to Vercel...$(NC)"
	@if command -v vercel > /dev/null; then \
		vercel; \
	else \
		echo "$(RED)Vercel CLI not installed. Install with: npm i -g vercel$(NC)"; \
		exit 1; \
	fi

##@ Cleanup

clean: ## Clean build artifacts and cache
	@echo "$(BLUE)Cleaning build artifacts...$(NC)"
	@rm -rf build .svelte-kit node_modules/.vite
	@echo "$(GREEN)Clean complete!$(NC)"

clean-all: clean ## Clean everything including node_modules
	@echo "$(BLUE)Cleaning everything...$(NC)"
	@rm -rf node_modules
	@echo "$(GREEN)All clean!$(NC)"

docker-clean: ## Remove Docker containers and volumes
	@echo "$(BLUE)Cleaning Docker resources...$(NC)"
	@docker-compose down -v
	@echo "$(GREEN)Docker resources cleaned!$(NC)"

##@ Utilities

check-env: ## Check environment and configuration
	@echo "$(BLUE)Checking environment...$(NC)"
	@echo "Node version: $$(node --version)"
	@echo "NPM version: $$(npm --version)"
	@echo "Docker: $$(command -v docker > /dev/null && echo 'installed' || echo 'not installed')"
	@echo "Vercel CLI: $$(command -v vercel > /dev/null && echo 'installed' || echo 'not installed')"
	@echo ""
	@echo "$(BLUE)Project files:$(NC)"
	@test -f package.json && echo "✓ package.json" || echo "✗ package.json $(YELLOW)(run 'make init')$(NC)"
	@test -f svelte.config.js && echo "✓ svelte.config.js" || echo "✗ svelte.config.js"
	@test -f tailwind.config.js && echo "✓ tailwind.config.js" || echo "✗ tailwind.config.js"
	@test -f docker-compose.yml && echo "✓ docker-compose.yml" || echo "✗ docker-compose.yml"
	@test -f Dockerfile && echo "✓ Dockerfile" || echo "✗ Dockerfile"
	@test -f static/logo.png && echo "✓ static/logo.png" || echo "✗ static/logo.png $(YELLOW)(placeholder needed)$(NC)"

info: ## Show project information
	@echo "$(BLUE)═══════════════════════════════════════════════════$(NC)"
	@echo "$(GREEN)  RABOUQUET.IN - Bouquet Shop Website$(NC)"
	@echo "$(BLUE)═══════════════════════════════════════════════════$(NC)"
	@echo ""
	@echo "$(YELLOW)Business Information:$(NC)"
	@echo "  Name:      RABOUQUET.IN"
	@echo "  WhatsApp:  +62 851-5757-2725"
	@echo "  Instagram: @rabouquet.in"
	@echo "  Location:  Kampung Pajeleran Gunung, Bogor, Indonesia"
	@echo ""
	@echo "$(YELLOW)Quick Commands:$(NC)"
	@echo "  make dev              - Start development server"
	@echo "  make docker-up        - Start with Docker"
	@echo "  make build            - Build for production"
	@echo "  make help             - Show all commands"
	@echo ""
	@echo "$(YELLOW)Development URLs:$(NC)"
	@echo "  Local:  http://localhost:5173"
	@echo "  Docker: http://localhost:5173"
	@echo ""

logs: docker-logs ## Alias for docker-logs

start: dev ## Alias for dev

stop: docker-down ## Alias for docker-down

restart: ## Restart Docker containers
	@make docker-down
	@make docker-up-d

##@ Advanced

optimize-images: ## Optimize images in static folder (requires imagemagick)
	@echo "$(BLUE)Optimizing images...$(NC)"
	@if command -v convert > /dev/null; then \
		find static -name "*.jpg" -o -name "*.jpeg" | while read img; do \
			convert "$$img" -quality 85 "$$img"; \
		done; \
		find static -name "*.png" | while read img; do \
			convert "$$img" -quality 85 "$$img"; \
		done; \
		echo "$(GREEN)Images optimized!$(NC)"; \
	else \
		echo "$(YELLOW)ImageMagick not installed. Install with: brew install imagemagick$(NC)"; \
	fi

analyze-bundle: build ## Analyze bundle size
	@echo "$(BLUE)Analyzing bundle size...$(NC)"
	@if [ -d "build" ]; then \
		du -sh build; \
		find build -name "*.js" -exec du -h {} \; | sort -rh | head -10; \
	else \
		echo "$(RED)Build folder not found. Run 'make build' first$(NC)"; \
	fi

watch: ## Watch for file changes (useful for debugging)
	@echo "$(BLUE)Watching for changes...$(NC)"
	@npx nodemon --watch src --exec "npm run build"

##@ Claude Flow Integration

sparc-init: ## Initialize SPARC coordination
	@echo "$(BLUE)Initializing SPARC coordination...$(NC)"
	@npx claude-flow@alpha hooks pre-task --description "development-setup"
	@npx claude-flow@alpha memory-persist --key "project/rabouquet" --data '{"status":"active","phase":"development"}'

sparc-status: ## Check SPARC coordination status
	@echo "$(BLUE)Checking SPARC status...$(NC)"
	@npx claude-flow@alpha swarm-status

hive-mind: ## Initialize hive-mind coordination
	@echo "$(BLUE)Initializing hive-mind...$(NC)"
	@npx claude-flow@alpha hive-mind-init --topology mesh --max-agents 6

##@ Quick Workflows

fresh-start: clean install dev ## Clean install and start dev server

docker-fresh: docker-clean docker-build docker-up-d ## Clean Docker setup and start

production-test: build preview ## Build and preview production locally

quick-deploy: build deploy-vercel ## Quick build and deploy to Vercel

# Show info on first run
all: info
