import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68f2dbf0b11165a8439c5a8b", 
  requiresAuth: false // Temporarily disabled for public access
});
