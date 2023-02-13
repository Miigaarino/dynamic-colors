import { useMemo, useState } from "react";

import {
  argbFromHex,
  hexFromArgb,
  sourceColorFromImage,
  themeFromSourceColor,
} from "@importantimport/material-color-utilities";
import { CssVarProvider } from "@/CssVarsProvider";
import { inverseColors, InverseColorsType } from "@/inverse_colors";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState(0x6750a4);
  const [previewImage, setPreviewImage] = useState<HTMLImageElement>();

  const theme = useMemo(() => themeFromSourceColor(color), [color]);

  const scheme = useMemo(
    () => (darkMode ? theme.schemes.dark : theme.schemes.light),
    [theme, darkMode]
  );

  return (
    <>
      <CssVarProvider scheme={scheme} />
      <main>
        <div style={{ display: "flex", columnGap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>From Image</div>

            <div style={{ display: "grid", width: 100, height: 50 }}>
              <div
                style={{
                  gridArea: "1/1/-1/-1",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                }}
              >
                Click to upload
              </div>

              <img
                src={previewImage?.src}
                alt=""
                style={{
                  width: 100,
                  height: 50,
                  gridArea: "1/1/-1/-1",
                  objectFit: "contain",
                }}
              />

              <input
                id="image-select"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const fr = new FileReader();

                  fr.onload = () => {
                    const image = new Image();
                    image.src = fr.result as string;

                    setPreviewImage(image);

                    sourceColorFromImage(image).then(setColor);
                  };

                  fr.readAsDataURL(e.target.files?.[0] as Blob);

                  e.target.value = "";
                }}
                style={{ gridArea: "1/1/-1/-1", opacity: 0 }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>From Color</div>
            <input
              type="color"
              value={hexFromArgb(color)}
              onChange={(e) => setColor(argbFromHex(e.target.value))}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>Dark Mode</div>
            <input
              type="checkbox"
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            rowGap: 8,
            backgroundColor: "var(--m3-background)",
          }}
        >
          {(
            Object.keys(
              //@ts-ignore
              scheme.props as { [key: InverseColorsType]: number }
            ).filter((propertyName) => {
              const execludeKeys =
                /shadow|inverseSurface|inverseOnSurface|inversePrimary/;
              return !execludeKeys.test(propertyName);
            }) as InverseColorsType[]
          ).map((v) => {
            return <Color key={v} token={v} />;
          })}
        </div>
      </main>
    </>
  );
}

function Color({ token }: { token: InverseColorsType }) {
  return (
    <div
      style={{
        padding: 8,
        height: 48,
        backgroundColor: `var(--m3-${token})`,
        color: `var(--m3-${inverseColors[token]})`,
        fontSize: "0.8rem",
        letterSpacing: 1.2,
      }}
    >
      <div>{token}</div>
    </div>
  );
}
