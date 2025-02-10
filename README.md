# Artoo Detoo Monorepo

This repository contains the Artoo Detoo project, a comprehensive monorepo setup leveraging shadcn/ui. It includes various subprojects designed for different platforms and functionalities, unified under a single cohesive architecture.

## Project Structure

The Artoo Detoo monorepo is organized into several key subprojects, each with its own code name and unique focus:

1. **Web App - EVA-UI**  
   Inspired by the agile EVA units from Neon Genesis Evangelion, this web application is designed for rapid development and deployment.

2. **Cross Platform App - GUNDAM**  
   Borrowing from the versatile mobile suits in Gundam, this application is adaptable and capable of running on multiple platforms.

3. **API - ALICE**  
   The Anime Logical Integrated Cognitive Engine (ALICE) powers seamless integrations with various services and functionalities.

4. **Backend App - SORA**  
   Named "Sora" (meaning "sky" in Japanese), this backend application signifies limitless scalability and robustness.

5. **Mobile App - KATANA**  
   Sharpened for precision and performance, this mobile application echoes the legendary Japanese blade, delivering top-notch user experience.


## Usage

To initialize the project, use the following command:

```bash
pnpm dlx shadcn@latest init
```

## Adding Components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the UI components in the `packages/ui/src/components` directory.

## Tailwind CSS Integration

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package. This ensures that you can start using Tailwind CSS with the components immediately.

## Using Components

To use the components in your app, import them from the `ui` package:

```tsx
import { Button } from "@r2d2/ui/components/ui/button"
```

## ESLint Configuration

This repository also includes a shared ESLint configuration for the workspace under the `@r2d2/eslint-config` package. This ensures consistent code quality and styling across all subprojects.

```markdown
# `@r2d2/eslint-config`

Shared ESLint configuration for the workspace.
```

## Getting Started

1. Clone the repository:
   
   ```bash
   git clone https://github.com/rbmalik1994/Artoo-Detoo.git
   ```

2. Install dependencies:
   
   ```bash
   pnpm install
   ```

3. Initialize the project and start development:

   ```bash
   pnpm dlx shadcn@latest init
   pnpm dev
   ```

## Contributing

We welcome contributions from the community. Please make sure to follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or support, please open an issue on the GitHub repository or contact the project maintainers directly.

