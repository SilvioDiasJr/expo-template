import { execSync } from 'node:child_process'

try {
  const output = execSync('tsc --noEmit', { stdio: 'inherit' })
  console.log('✅ TypeScript check passed')
} catch (error) {
  console.error('❌ TypeScript errors found')
  process.exit(1)
}
