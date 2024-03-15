import "react";

declare module "react" {
  interface CSSProperties {
    "--rows"?: number;
    "--columns"?: number;
    "--x"?: number;
    "--y"?: number;
  }
}
