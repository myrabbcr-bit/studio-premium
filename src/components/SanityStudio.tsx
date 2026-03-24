import { StudioProvider, StudioLayout } from 'sanity';
import config from '../../sanity.config';

/**
 * Sanity Studio embedded component — rendered client-side only
 * Route: /studio
 */
export default function SanityStudio() {
  return (
    <div style={{ height: '100dvh', width: '100%' }}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </div>
  );
}
