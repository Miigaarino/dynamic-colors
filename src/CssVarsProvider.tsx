import { css, Global } from "@emotion/react";
import { hexFromArgb, Scheme } from "@importantimport/material-color-utilities";

export function CssVarProvider({ scheme }: { scheme: Scheme }) {
  return (
    <Global
      styles={css({
        ":root": {
          "--m3-primary": hexFromArgb(scheme.primary),
          "--m3-onPrimary": hexFromArgb(scheme.onPrimary),
          "--m3-primaryContainer": hexFromArgb(scheme.primaryContainer),
          "--m3-onPrimaryContainer": hexFromArgb(scheme.onPrimaryContainer),

          "--m3-secondary": hexFromArgb(scheme.secondary),
          "--m3-onSecondary": hexFromArgb(scheme.onSecondary),
          "--m3-secondaryContainer": hexFromArgb(scheme.secondaryContainer),
          "--m3-onSecondaryContainer": hexFromArgb(scheme.onSecondaryContainer),

          "--m3-tertiary": hexFromArgb(scheme.tertiary),
          "--m3-onTertiary": hexFromArgb(scheme.onTertiary),
          "--m3-tertiaryContainer": hexFromArgb(scheme.tertiaryContainer),
          "--m3-onTertiaryContainer": hexFromArgb(scheme.onTertiaryContainer),

          "--m3-error": hexFromArgb(scheme.error),
          "--m3-onError": hexFromArgb(scheme.onError),
          "--m3-errorContainer": hexFromArgb(scheme.errorContainer),
          "--m3-onErrorContainer": hexFromArgb(scheme.onErrorContainer),

          "--m3-background": hexFromArgb(scheme.background),
          "--m3-onBackground": hexFromArgb(scheme.onBackground),
          "--m3-surface": hexFromArgb(scheme.surface),
          "--m3-onSurface": hexFromArgb(scheme.onSurface),

          "--m3-surfaceVariant": hexFromArgb(scheme.surfaceVariant),
          "--m3-onSurfaceVariant": hexFromArgb(scheme.onSurfaceVariant),
          "--m3-outline": hexFromArgb(scheme.outline),
        },
      })}
    />
  );
}
