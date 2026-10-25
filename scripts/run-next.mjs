import { spawn } from "node:child_process";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextDir = path.dirname(require.resolve("next/package.json"));
const wasmDir = path.dirname(require.resolve("@next/swc-wasm-nodejs/package.json"));
const cli = path.join(nextDir, "dist", "bin", "next");
const [command = "dev", ...args] = process.argv.slice(2);

process.env.NEXT_TEST_WASM_DIR = wasmDir;
process.env.NEXT_TEST_WASM = "1";
const child = spawn(process.execPath, [cli, command, "--webpack", ...args], {
  env: process.env,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exitCode = code ?? 1;
});
