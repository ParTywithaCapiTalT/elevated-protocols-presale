/**
 * Client-side initialization polyfills
 * Fixes runtime crashes on browser load
 */

if (typeof window !== 'undefined') {
  // Polyfill global object for browser environment
  // @ts-ignore
  window.global = window.global || window;
  
  // Polyfill process object for Node.js-dependent libraries
  // @ts-ignore
  if (!window.process) {
    // @ts-ignore
    window.process = {
      env: {
        NODE_ENV: 'production',
      },
    };
  }
  
  // Ensure Buffer is available
  // @ts-ignore
  if (typeof window.Buffer === 'undefined') {
    // @ts-ignore
    window.Buffer = Buffer;
  }
}
